// Desmarca aula feita. Exige a mesma sessão que marcou.
export default defineEventHandler(async (event) => {
  const usuario = await exigirUsuario(event)
  const corpo = await readBody(event)
  const aulaId = corpo?.aulaId
  if (!aulaId) {
    throw createError({ statusCode: 400, statusMessage: 'Qual aula?' })
  }
  const sql = db()
  await sql`
    DELETE FROM progresso
    WHERE usuario_id = ${usuario.id} AND aula_id = ${aulaId}
  `
  return { ok: true }
})
