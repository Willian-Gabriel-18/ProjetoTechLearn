export default defineEventHandler(async (event) => {
  await exigirAdmin(event)
  const sql = db()
  const aulas = await sql`
    SELECT a.id, a.slug, a.titulo, a.ordem, a.tipo, a.publicada, a.trilha_id,
           t.titulo AS trilha_titulo,
           (SELECT count(*)::int FROM blocos_aula b WHERE b.aula_id = a.id) AS blocos
    FROM aulas a
    JOIN trilhas t ON t.id = a.trilha_id
    ORDER BY t.ordem, a.ordem
  `
  return { aulas }
})
