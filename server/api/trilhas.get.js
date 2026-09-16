export default defineEventHandler(async (event) => {
  const sql = db()
  const usuario = await usuarioDaSessao(event)

  // Só aulas publicadas entram na conta — trilha no ar não parece vazia.
  const trilhas = await sql`
    SELECT t.id, t.titulo, t.descricao, t.ordem, t.publicada,
      (SELECT count(*)::int FROM aulas a
        WHERE a.trilha_id = t.id AND a.publicada = true) AS total_aulas
    FROM trilhas t
    ORDER BY t.ordem
  `

  let continuar = null
  let trilhaConcluida = false

  const feitasPorUsuario = usuario
    ? await sql`
        SELECT a.id, a.trilha_id, a.nivel
        FROM progresso p
        JOIN aulas a ON a.id = p.aula_id
        WHERE p.usuario_id = ${usuario.id}
      `
    : []

  const idsFeitas = new Set(feitasPorUsuario.map((r) => r.id))

  for (const t of trilhas) {
    const porNivelRows = await sql`
      SELECT a.nivel, count(*)::int AS total
      FROM aulas a
      WHERE a.trilha_id = ${t.id} AND a.publicada = true
      GROUP BY a.nivel
    `
    t.porNivel = { basico: null, intermediario: null, avancado: null }
    for (const row of porNivelRows) {
      t.porNivel[row.nivel] = { total: row.total, feitas: 0 }
    }
    if (usuario) {
      t.feitas = feitasPorUsuario.filter((r) => r.trilha_id === t.id).length
      for (const nv of ['basico', 'intermediario', 'avancado']) {
        if (!t.porNivel[nv]) continue
        t.porNivel[nv].feitas = feitasPorUsuario.filter(
          (r) => r.trilha_id === t.id && r.nivel === nv,
        ).length
      }
    }
  }

  if (usuario) {
    const fila = await sql`
      SELECT a.id, a.slug, a.titulo, a.trilha_id, t.ordem AS trilha_ordem, a.ordem, a.nivel
      FROM aulas a
      JOIN trilhas t ON t.id = a.trilha_id
      WHERE t.publicada = true AND a.publicada = true
      ORDER BY t.ordem,
        CASE a.nivel
          WHEN 'basico' THEN 1
          WHEN 'intermediario' THEN 2
          WHEN 'avancado' THEN 3
          ELSE 4
        END,
        a.ordem
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
