export default defineEventHandler(async (event) => {
  const sql = db()
  const usuario = await usuarioDaSessao(event)

  const trilhas = await sql`
    SELECT t.id, t.titulo, t.descricao, t.ordem, t.publicada,
      (SELECT count(*)::int FROM aulas a WHERE a.trilha_id = t.id) AS total_aulas
    FROM trilhas t
    ORDER BY t.ordem
  `

  let continuar = null
  let trilhaConcluida = false

  if (usuario) {
    const feitas = await sql`
      SELECT a.id
      FROM progresso p
      JOIN aulas a ON a.id = p.aula_id
      WHERE p.usuario_id = ${usuario.id}
    `
    const idsFeitas = new Set(feitas.map((r) => r.id))

    for (const t of trilhas) {
      const n = await sql`
        SELECT count(*)::int AS c
        FROM progresso p
        JOIN aulas a ON a.id = p.aula_id
        WHERE p.usuario_id = ${usuario.id} AND a.trilha_id = ${t.id}
      `
      t.feitas = n[0].c
    }

    const fila = await sql`
      SELECT a.id, a.slug, a.titulo, a.trilha_id, t.ordem AS trilha_ordem, a.ordem
      FROM aulas a
      JOIN trilhas t ON t.id = a.trilha_id
      WHERE t.publicada = true AND a.publicada = true
      ORDER BY t.ordem, a.ordem
    `
    const proxima = fila.find((a) => !idsFeitas.has(a.id))
    if (proxima) {
      continuar = {
        trilha_id: proxima.trilha_id,
        slug: proxima.slug,
        titulo: proxima.titulo,
      }
    } else if (fila.length) {
      trilhaConcluida = true
    }
  }

  return { trilhas, continuar, trilhaConcluida, logado: Boolean(usuario) }
})
