export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const sql = db()
  const t = await sql`
    SELECT id, titulo, descricao, ordem, publicada
    FROM trilhas WHERE id = ${id} LIMIT 1
  `
  if (!t[0]) {
    throw createError({ statusCode: 404, statusMessage: 'Trilha não encontrada.' })
  }
  const aulas = await sql`
    SELECT id, slug, titulo, resumo, ordem, tempo_minutos, tipo, publicada
    FROM aulas
    WHERE trilha_id = ${id}
    ORDER BY ordem
  `
  return { trilha: t[0], aulas }
})
