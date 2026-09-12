export default defineEventHandler(async (event) => {
  await exigirAdmin(event)
  const id = getRouterParam(event, 'id')
  const sql = db()
  const a = await sql`
    SELECT id, trilha_id, slug, titulo, resumo, ordem, tempo_minutos, tipo, publicada
    FROM aulas WHERE id = ${id} LIMIT 1
  `
  if (!a[0]) throw createError({ statusCode: 404, statusMessage: 'Aula não encontrada.' })
  const blocos = await sql`
    SELECT id, ordem, tipo, conteudo FROM blocos_aula
    WHERE aula_id = ${id} ORDER BY ordem
  `
  return { aula: a[0], blocos }
})
