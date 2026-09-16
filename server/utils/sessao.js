const COOKIE = 'techlearn_sessao'
const UMA_SEMANA = 60 * 60 * 24 * 7

export function nomeCookieSessao() {
  return COOKIE
}

export function gravarCookieSessao(event, token) {
  const seguro = process.env.NODE_ENV === 'production'
  setCookie(event, COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: seguro,
    path: '/',
    maxAge: UMA_SEMANA,
  })
}

export function apagarCookieSessao(event) {
  deleteCookie(event, COOKIE, { path: '/' })
}

export async function usuarioDaSessao(event) {
  // Mesmo request não consulta o Neon duas vezes (plugin + API).
  if (event?.context && Object.prototype.hasOwnProperty.call(event.context, 'usuarioSessao')) {
    return event.context.usuarioSessao
  }
  const token = getCookie(event, COOKIE)
  if (!token) {
    if (event?.context) event.context.usuarioSessao = null
    return null
  }
  const sql = db()
  const segredo = useRuntimeConfig().sessionSecret
  const hash = hashToken(token, segredo)
  const rows = await sql`
    SELECT u.id, u.email, u.nome, u.papel
    FROM sessoes s
    JOIN usuarios u ON u.id = s.usuario_id
    WHERE s.token_hash = ${hash}
      AND s.expira_em > now()
    LIMIT 1
  `
  const usuario = rows[0] || null
  if (event?.context) event.context.usuarioSessao = usuario
  return usuario
}

export async function exigirUsuario(event) {
  const u = await usuarioDaSessao(event)
  if (!u) {
    throw createError({ statusCode: 401, statusMessage: 'Entre na sua conta.' })
  }
  return u
}

export async function exigirAdmin(event) {
  const u = await exigirUsuario(event)
  if (u.papel !== 'admin') {
    throw createError({ statusCode: 403, statusMessage: 'Só quem administra o site.' })
  }
  return u
}
