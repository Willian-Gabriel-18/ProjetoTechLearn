export default defineEventHandler(async (event) => {
  const trilhaId = getRouterParam(event, 'trilha')
  const slug = getRouterParam(event, 'slug')
  const sql = db()
  const rows = await sql`
    SELECT a.id, a.slug, a.titulo, a.resumo, a.ordem, a.tempo_minutos, a.tipo, a.publicada,
           a.trilha_id, t.titulo AS trilha_titulo
    FROM aulas a
    JOIN trilhas t ON t.id = a.trilha_id
    WHERE a.trilha_id = ${trilhaId} AND a.slug = ${slug}
    LIMIT 1
  `
  const aula = rows[0]
  if (!aula) {
    throw createError({ statusCode: 404, statusMessage: 'Aula não encontrada.' })
  }

  const blocos = await sql`
    SELECT id, ordem, tipo, conteudo
    FROM blocos_aula
    WHERE aula_id = ${aula.id}
    ORDER BY ordem
  `

  const viz = await sql`
    SELECT slug, titulo, ordem, tipo
    FROM aulas
    WHERE trilha_id = ${aula.trilha_id}
    ORDER BY ordem
  `
  const i = viz.findIndex((x) => x.slug === aula.slug)
  const anterior = i > 0 ? viz[i - 1] : null
  const proxima = i >= 0 && i < viz.length - 1 ? viz[i + 1] : null

  let feita = false
  const usuario = await usuarioDaSessao(event)
  if (usuario) {
    const p = await sql`
      SELECT 1 FROM progresso
      WHERE usuario_id = ${usuario.id} AND aula_id = ${aula.id}
      LIMIT 1
    `
    feita = p.length > 0
  }

  return { aula, blocos, anterior, proxima, feita, logado: Boolean(usuario) }
})
