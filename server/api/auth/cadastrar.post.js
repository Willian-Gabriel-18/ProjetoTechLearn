export default defineEventHandler(async (event) => {
  const corpo = await readBody(event)
  const nome = String(corpo?.nome || '').trim()
  const email = String(corpo?.email || '').trim().toLowerCase()
  const senha = String(corpo?.senha || '')

  if (nome.length < 2) {
    throw createError({ statusCode: 400, statusMessage: 'Diga seu nome.' })
  }
  if (!email.includes('@')) {
    throw createError({ statusCode: 400, statusMessage: 'E-mail inválido.' })
  }
  if (senha.length < 8) {
    throw createError({ statusCode: 400, statusMessage: 'A senha precisa de pelo menos 8 caracteres.' })
  }

  const sql = db()
  const ja = await sql`SELECT id FROM usuarios WHERE lower(email) = ${email} LIMIT 1`
  if (ja.length) {
    throw createError({ statusCode: 409, statusMessage: 'Já existe conta com esse e-mail.' })
  }

  const senha_hash = await hashSenha(senha)
  const criados = await sql`
    INSERT INTO usuarios (email, senha_hash, nome, papel)
    VALUES (${email}, ${senha_hash}, ${nome}, 'aluno')
    RETURNING id, email, nome, papel
  `
  const usuario = criados[0]
  const token = tokenSessao()
  const hash = hashToken(token, useRuntimeConfig().sessionSecret)
  await sql`
    INSERT INTO sessoes (usuario_id, token_hash, expira_em)
    VALUES (${usuario.id}, ${hash}, now() + interval '7 days')
  `
  gravarCookieSessao(event, token)
  return { usuario }
})
