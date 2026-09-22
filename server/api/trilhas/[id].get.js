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
    throw createError({ statusCode: 403, statusMessage: 'Esta trilha ainda não está disponível.' })
  }

  const aulas = await sql`
    SELECT id, slug, titulo, resumo, ordem, tempo_minutos, tipo, publicada, nivel, precisa_pagina
    FROM aulas
    WHERE trilha_id = ${id}
      AND (${usuario?.papel === 'admin'} OR publicada = true)
    ORDER BY
      CASE nivel
        WHEN 'basico' THEN 1
        WHEN 'intermediario' THEN 2
        WHEN 'avancado' THEN 3
        ELSE 4
      END,
      ordem
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
    const feitasN = aulas.filter((a) => a.feita).length
    const niveis = ['basico', 'intermediario', 'avancado']
    const porNivel = {}
    for (const nv of niveis) {
      const doNv = aulas.filter((a) => a.nivel === nv)
      porNivel[nv] = {
        total: doNv.length,
        feitas: doNv.filter((a) => a.feita).length,
      }
    }
    resumoProgresso = {
      total: aulas.length,
      feitas: feitasN,
      porNivel,
    }
  }

  return { trilha: t[0], aulas, resumoProgresso }
})
