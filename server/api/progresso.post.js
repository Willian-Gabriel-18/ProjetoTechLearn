export default defineEventHandler(async (event) => {
  const corpo = await readBody(event)
  const aulaId = corpo?.aulaId
  if (!aulaId) {
    throw createError({ statusCode: 400, statusMessage: 'Qual aula?' })
  }
  const token = getCookie(event, nomeCookieSessao())
  if (!token) {
    throw createError({ statusCode: 401, statusMessage: 'Entre na sua conta.' })
  }
  const sql = db()
  const hash = hashToken(token, useRuntimeConfig().sessionSecret)
  // Uma ida ao Neon: acha a sessão e grava o progresso.
  const rows = await sql`
    WITH sess AS (
      SELECT usuario_id
      FROM sessoes
      WHERE token_hash = ${hash} AND expira_em > now()
      LIMIT 1
    ),
    ins AS (
      INSERT INTO progresso (usuario_id, aula_id)
      SELECT usuario_id, ${aulaId}::uuid FROM sess
      ON CONFLICT (usuario_id, aula_id) DO NOTHING
      RETURNING usuario_id
    )
    SELECT (SELECT usuario_id FROM sess) AS sessao
  `
  if (!rows[0]?.sessao) {
    throw createError({ statusCode: 401, statusMessage: 'Entre na sua conta.' })
  }
  return { ok: true }
})
