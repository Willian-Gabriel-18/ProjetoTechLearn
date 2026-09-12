export default defineEventHandler(async () => {
  const sql = db()
  const trilhas = await sql`
    SELECT t.id, t.titulo, t.descricao, t.ordem, t.publicada,
      (SELECT count(*)::int FROM aulas a WHERE a.trilha_id = t.id) AS total_aulas
    FROM trilhas t
    ORDER BY t.ordem
  `
  return { trilhas }
})
