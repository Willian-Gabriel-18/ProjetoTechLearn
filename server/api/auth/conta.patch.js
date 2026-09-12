// Aluno logado troca nome, e-mail e (opcional) senha. Senha nova exige a atual.
export default defineEventHandler(async (event) => {
  const usuario = await exigirUsuario(event)
  const corpo = await readBody(event)
  const nome = String(corpo?.nome || '').trim()
  const email = String(corpo?.email || '').trim().toLowerCase()
  const senhaAtual = String(corpo?.senhaAtual || '')
  const senhaNova = String(corpo?.senhaNova || '')

  if (nome.length < 2) {
    throw createError({ statusCode: 400, statusMessage: 'Diga seu nome.' })
  }
  if (!email.includes('@')) {
    throw createError({ statusCode: 400, statusMessage: 'E-mail inválido.' })
  }

  const sql = db()
  const rows = await sql`
    SELECT id, email, senha_hash FROM usuarios WHERE id = ${usuario.id} LIMIT 1
  `
  const atual = rows[0]
  if (!atual) {
    throw createError({ statusCode: 401, statusMessage: 'Entre na sua conta.' })
  }

  if (email !== atual.email) {
    const ja = await sql`SELECT id FROM usuarios WHERE lower(email) = ${email} AND id <> ${usuario.id} LIMIT 1`
    if (ja.length) {
      throw createError({ statusCode: 409, statusMessage: 'Já existe conta com esse e-mail.' })
    }
  }

  let senha_hash = atual.senha_hash
  if (senhaNova) {
    if (senhaNova.length < 8) {
      throw createError({ statusCode: 400, statusMessage: 'A senha nova precisa de pelo menos 8 caracteres.' })
    }
    if (!senhaAtual) {
      throw createError({ statusCode: 400, statusMessage: 'Informe a senha atual para trocar a senha.' })
    }
    const ok = await senhaConfere(senhaAtual, atual.senha_hash)
    if (!ok) {
      throw createError({ statusCode: 400, statusMessage: 'Senha atual não confere.' })
    }
    senha_hash = await hashSenha(senhaNova)
  }

  const salvo = await sql`
    UPDATE usuarios
    SET nome = ${nome}, email = ${email}, senha_hash = ${senha_hash}
    WHERE id = ${usuario.id}
    RETURNING id, email, nome, papel
  `
  return { usuario: salvo[0] }
})
