export default defineEventHandler(async (event) => {
  const trilhaId = getRouterParam(event, 'trilha')
  const slug = getRouterParam(event, 'slug')
  const sql = db()

  const [rows, usuario] = await Promise.all([
    sql`
      SELECT a.id, a.slug, a.titulo, a.resumo, a.ordem, a.tempo_minutos, a.tipo, a.publicada,
             a.nivel, a.precisa_pagina, a.trilha_id, t.titulo AS trilha_titulo, t.publicada AS trilha_publicada
      FROM aulas a
      JOIN trilhas t ON t.id = a.trilha_id
      WHERE a.trilha_id = ${trilhaId} AND a.slug = ${slug}
      LIMIT 1
    `,
    usuarioDaSessao(event),
  ])

  const aula = rows[0]
  if (!aula) {
    throw createError({ statusCode: 404, statusMessage: 'Aula não encontrada.' })
  }
  if (!aula.trilha_publicada && usuario?.papel !== 'admin') {
    throw createError({ statusCode: 403, statusMessage: 'Esta trilha ainda não está disponível.' })
  }

  const [blocos, viz, progresso] = await Promise.all([
    sql`
      SELECT id, ordem, tipo, conteudo
      FROM blocos_aula
      WHERE aula_id = ${aula.id}
      ORDER BY ordem
    `,
    sql`
      SELECT slug, titulo, ordem, tipo, nivel
      FROM aulas
      WHERE trilha_id = ${aula.trilha_id} AND publicada = true
      ORDER BY
        CASE nivel
          WHEN 'basico' THEN 1
          WHEN 'intermediario' THEN 2
          WHEN 'avancado' THEN 3
          ELSE 4
        END,
        ordem
    `,
    usuario
      ? sql`
          SELECT 1 FROM progresso
          WHERE usuario_id = ${usuario.id} AND aula_id = ${aula.id}
          LIMIT 1
        `
      : Promise.resolve([]),
  ])

  const i = viz.findIndex((x) => x.slug === aula.slug)
  const anterior = i > 0 ? viz[i - 1] : null
  const proxima = i >= 0 && i < viz.length - 1 ? viz[i + 1] : null

  const { trilha_publicada: _pub, ...aulaPublica } = aula
  return {
    aula: aulaPublica,
    blocos,
    anterior,
    proxima,
    feita: progresso.length > 0,
    logado: Boolean(usuario),
  }
})
