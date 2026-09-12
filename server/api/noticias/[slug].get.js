export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  const sql = db()
  const rows = await sql`
    SELECT id, slug, titulo, resumo, corpo, publicado_em
    FROM noticias
    WHERE slug = ${slug} AND publicada = true
    LIMIT 1
  `
  if (!rows[0]) {
    throw createError({ statusCode: 404, statusMessage: 'Novidade não encontrada.' })
  }
  return { noticia: rows[0] }
})
