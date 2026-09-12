export default defineEventHandler(async (event) => {
  await exigirAdmin(event)
  const id = getRouterParam(event, 'id')
  const corpo = await readBody(event)
  const tipo = String(corpo?.tipo || '')
  const conteudo = corpo?.conteudo || {}
  if (!tipo) {
    throw createError({ statusCode: 400, statusMessage: 'Qual o tipo do bloco?' })
  }
  const sql = db()
  const rows = await sql`
    UPDATE blocos_aula
    SET tipo = ${tipo}::tipo_bloco,
        conteudo = ${JSON.stringify(conteudo)}::jsonb
    WHERE id = ${id}
    RETURNING id, ordem, tipo, conteudo
  `
  if (!rows[0]) {
    throw createError({ statusCode: 404, statusMessage: 'Bloco não encontrado.' })
  }
  return { bloco: rows[0] }
})
