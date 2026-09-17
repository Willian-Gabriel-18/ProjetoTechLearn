export default defineEventHandler(async (event) => {
  await exigirAdmin(event)
  const id = getRouterParam(event, 'id')
  const corpo = await readBody(event)
  const direcao = corpo?.direcao === 'cima' ? 'cima' : 'baixo'
  const sql = db()
  const atual = await sql`
    SELECT id, aula_id, ordem FROM blocos_aula WHERE id = ${id} LIMIT 1
  `
  if (!atual[0]) {
    throw createError({ statusCode: 404, statusMessage: 'Bloco não encontrado.' })
  }
  const vizinho = direcao === 'cima'
    ? await sql`
        SELECT id, ordem FROM blocos_aula
        WHERE aula_id = ${atual[0].aula_id} AND ordem < ${atual[0].ordem}
        ORDER BY ordem DESC LIMIT 1
      `
    : await sql`
        SELECT id, ordem FROM blocos_aula
        WHERE aula_id = ${atual[0].aula_id} AND ordem > ${atual[0].ordem}
        ORDER BY ordem ASC LIMIT 1
      `
  if (!vizinho[0]) return { ok: true, moveu: false }

  // Troca as ordens; usa valor temporário negativo para não bater no UNIQUE (aula_id, ordem).
  const a = atual[0]
  const b = vizinho[0]
  await sql`UPDATE blocos_aula SET ordem = -1 WHERE id = ${a.id}`
  await sql`UPDATE blocos_aula SET ordem = ${a.ordem} WHERE id = ${b.id}`
  await sql`UPDATE blocos_aula SET ordem = ${b.ordem} WHERE id = ${a.id}`
  return { ok: true, moveu: true }
})
