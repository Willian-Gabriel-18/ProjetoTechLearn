export default defineEventHandler(async () => {
  const sql = db()
  const noticias = await sql`
    SELECT id, slug, titulo, resumo, publicado_em
    FROM noticias
    WHERE publicada = true
    ORDER BY publicado_em DESC NULLS LAST, criado_em DESC
  `
  return { noticias }
})
