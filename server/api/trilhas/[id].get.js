export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const sql = db()
  const usuario = await usuarioDaSessao(event)

  const t = await sql`
    SELECT id, titulo, descricao, ordem, publicada
    FROM trilhas WHERE id = ${id} LIMIT 1
  `
  if (!t[0]) {
    throw createError({ statusCode: 404, statusMessage: 'Trilha não encontrada.' })
  }
  // Aluno não entra em trilha "em breve". Admin pode ver.
  if (!t[0].publicada && usuario?.papel !== 'admin') {
    throw createError({ statusCode: 403, statusMessage: 'Esta trilha abre em breve.' })
  }

  const aulas = await sql`
    SELECT id, slug, titulo, resumo, ordem, tempo_minutos, tipo, publicada
    FROM aulas
    WHERE trilha_id = ${id}
    ORDER BY ordem
  `

  let resumoProgresso = null
  if (usuario) {
    const feitas = await sql`
      SELECT aula_id FROM progresso WHERE usuario_id = ${usuario.id}
    `
    const set = new Set(feitas.map((r) => r.aula_id))
    for (const a of aulas) {
      a.feita = set.has(a.id)
    }
    resumoProgresso = {
      total: aulas.length,
      feitas: aulas.filter((a) => a.feita).length,
    }
  }

  return { trilha: t[0], aulas, resumoProgresso }
})
