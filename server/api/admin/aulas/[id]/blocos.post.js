export default defineEventHandler(async (event) => {
  await exigirAdmin(event)
  const id = getRouterParam(event, 'id')
  const corpo = await readBody(event)
  const tipo = String(corpo?.tipo || 'texto')
  const conteudo = corpo?.conteudo || {}
  const sql = db()
  const max = await sql`
    SELECT coalesce(max(ordem), 0)::int AS m FROM blocos_aula WHERE aula_id = ${id}
  `
  const ordem = max[0].m + 1
  const rows = await sql`
    INSERT INTO blocos_aula (aula_id, ordem, tipo, conteudo)
    VALUES (${id}, ${ordem}, ${tipo}::tipo_bloco, ${JSON.stringify(conteudo)}::jsonb)
    RETURNING id, ordem, tipo, conteudo
  `
  return { bloco: rows[0] }
})
