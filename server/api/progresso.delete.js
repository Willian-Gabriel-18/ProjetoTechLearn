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
  const rows = await sql`
    WITH sess AS (
      SELECT usuario_id
      FROM sessoes
      WHERE token_hash = ${hash} AND expira_em > now()
      LIMIT 1
    ),
    del AS (
      DELETE FROM progresso
      WHERE usuario_id = (SELECT usuario_id FROM sess)
        AND aula_id = ${aulaId}::uuid
      RETURNING usuario_id
    )
    SELECT (SELECT usuario_id FROM sess) AS sessao
  `
  if (!rows[0]?.sessao) {
    throw createError({ statusCode: 401, statusMessage: 'Entre na sua conta.' })
  }
  return { ok: true }
})
