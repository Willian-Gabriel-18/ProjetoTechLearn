export default defineEventHandler(async (event) => {
  const token = getCookie(event, nomeCookieSessao())
  if (token) {
    const hash = hashToken(token, useRuntimeConfig().sessionSecret)
    const sql = db()
    await sql`DELETE FROM sessoes WHERE token_hash = ${hash}`
  }
  apagarCookieSessao(event)
  return { ok: true }
})
