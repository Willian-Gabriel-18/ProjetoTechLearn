export default defineEventHandler(async (event) => {
  await exigirAdmin(event)
  const id = getRouterParam(event, 'id')
  const sql = db()
  await sql`DELETE FROM blocos_aula WHERE id = ${id}`
  return { ok: true }
})
