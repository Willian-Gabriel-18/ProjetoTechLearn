export default defineEventHandler(async (event) => {
  const corpo = await readBody(event)
  const email = String(corpo?.email || '').trim().toLowerCase()
  const senha = String(corpo?.senha || '')
  const sql = db()
  const rows = await sql`
    SELECT id, email, nome, papel, senha_hash
    FROM usuarios
    WHERE lower(email) = ${email}
    LIMIT 1
  `
  const u = rows[0]
  if (!u || !(await senhaConfere(senha, u.senha_hash))) {
    throw createError({ statusCode: 401, statusMessage: 'E-mail ou senha não conferem.' })
  }
  const token = tokenSessao()
  const hash = hashToken(token, useRuntimeConfig().sessionSecret)
  await sql`
    INSERT INTO sessoes (usuario_id, token_hash, expira_em)
    VALUES (${u.id}, ${hash}, now() + interval '7 days')
  `
  gravarCookieSessao(event, token)
  return { usuario: { id: u.id, email: u.email, nome: u.nome, papel: u.papel } }
})
