export default defineEventHandler(async (event) => {
  const usuario = await exigirUsuario(event)
  const corpo = await readBody(event)
  const aulaId = corpo?.aulaId
  if (!aulaId) {
    throw createError({ statusCode: 400, statusMessage: 'Qual aula?' })
  }
  const sql = db()
  await sql`
    INSERT INTO progresso (usuario_id, aula_id)
    VALUES (${usuario.id}, ${aulaId})
    ON CONFLICT (usuario_id, aula_id) DO NOTHING
  `
  return { ok: true }
})
