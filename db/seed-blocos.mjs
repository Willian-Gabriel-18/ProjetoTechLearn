import { readFileSync } from 'node:fs'
import { neon } from '@neondatabase/serverless'
import { iniciante } from './seed-blocos/iniciante.mjs'
import { intermediario } from './seed-blocos/intermediario.mjs'
import { avancado } from './seed-blocos/avancado.mjs'
import { htmlCss } from './seed-blocos/html-css.mjs'
import { noticias } from './seed-blocos/noticias.mjs'
import { minutosAula, comDownload } from './seed-blocos/helpers.mjs'
import { empacotarAulas, infoPacote } from './empacotar-arquivos.mjs'

function envLocal() {
  const t = readFileSync(new URL('../.env', import.meta.url), 'utf8')
  const out = {}
  for (const line of t.split('\n')) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
    if (m) out[m[1]] = m[2]
  }
  return out
}

const env = { ...envLocal(), ...process.env }
const sql = neon(env.DATABASE_URL)

const htmlMeta = [
  ['o-que-e-uma-pagina', 'O que é uma página', 'Arquivo .html, abrir no navegador, e o mapa HTML / CSS / JS.', 1, 'aula'],
  ['esqueleto', 'Esqueleto', 'doctype, html, head, body, charset, title e viewport.', 2, 'aula'],
  ['texto-e-titulos', 'Texto e títulos', 'h1 a h3, parágrafo, negrito e ênfase.', 3, 'aula'],
  ['links-imagens-listas', 'Links, imagens e listas', 'a, img com alt, listas numeradas e com marcador.', 4, 'aula'],
  ['nomear-pecas', 'Nomear peças', 'id, class e div: o gancho que o JavaScript vai usar.', 5, 'aula'],
  ['botao-e-formulario', 'Botão e formulário', 'button, input, label, form e checkbox. Sem JavaScript ainda.', 6, 'aula'],
  ['css-ligar-e-vestir', 'CSS: ligar e vestir', 'Arquivo CSS, seletores, cor e letra.', 7, 'aula'],
  ['caixa-e-lado-a-lado', 'Caixa e lado a lado', 'margin, padding, border e três botões em fila.', 8, 'aula'],
  ['projeto-pagina-sua', 'Mini-projeto: uma página sua', 'Título, texto, imagem, lista e um botão. Depois: JavaScript ou HTML intermediário (em breve).', 9, 'projeto'],
]

await sql`
  INSERT INTO trilhas (id, titulo, descricao, ordem, publicada)
  VALUES (
    'html-css',
    'HTML e CSS',
    'A estrutura e a roupa da página. Comece por aqui.',
    1,
    true
  )
  ON CONFLICT (id) DO UPDATE SET
    titulo = EXCLUDED.titulo,
    descricao = EXCLUDED.descricao,
    ordem = EXCLUDED.ordem,
    publicada = true
`
await sql`
  INSERT INTO trilhas (id, titulo, descricao, ordem, publicada)
  VALUES (
    'javascript',
    'JavaScript',
    'A página reage. Recomendado: HTML e CSS básico antes.',
    2,
    true
  )
  ON CONFLICT (id) DO UPDATE SET
    titulo = EXCLUDED.titulo,
    descricao = EXCLUDED.descricao,
    ordem = EXCLUDED.ordem,
    publicada = true
`

for (const [slug, titulo, resumo, ordem, tipo] of htmlMeta) {
  await sql`
    INSERT INTO aulas (trilha_id, slug, titulo, resumo, ordem, tipo, nivel, precisa_pagina, publicada)
    VALUES (
      'html-css',
      ${slug},
      ${titulo},
      ${resumo},
      ${ordem},
      ${tipo}::tipo_aula,
      'basico',
      false,
      true
    )
    ON CONFLICT (trilha_id, slug) DO UPDATE SET
      titulo = EXCLUDED.titulo,
      resumo = EXCLUDED.resumo,
      ordem = EXCLUDED.ordem,
      tipo = EXCLUDED.tipo,
      nivel = 'basico',
      precisa_pagina = false,
      publicada = true,
      atualizado_em = now()
  `
}

const zips = empacotarAulas()
console.log('zips', zips)

const aulas = {
  ...Object.fromEntries(Object.entries(htmlCss).map(([slug, blocos]) => ['html-css:' + slug, blocos])),
  ...Object.fromEntries(Object.entries(iniciante).map(([slug, blocos]) => ['javascript:' + slug, blocos])),
  ...Object.fromEntries(Object.entries(intermediario).map(([slug, blocos]) => ['javascript:' + slug, blocos])),
  ...Object.fromEntries(Object.entries(avancado).map(([slug, blocos]) => ['javascript:' + slug, blocos])),
}

const rows = await sql`SELECT id, slug, trilha_id, tipo FROM aulas`
const porChave = Object.fromEntries(rows.map((r) => [`${r.trilha_id}:${r.slug}`, r]))

await sql`DELETE FROM blocos_aula`

let n = 0
for (const [chave, blocosBrutos] of Object.entries(aulas)) {
  const aula = porChave[chave]
  if (!aula) {
    console.error('slug sem aula:', chave)
    continue
  }
  const [trilha, slug] = chave.split(':')
  const pacote = infoPacote(trilha, slug)
  const blocos = pacote
    ? comDownload(blocosBrutos, pacote.href, pacote.rotulo)
    : blocosBrutos
  let ordem = 1
  for (const b of blocos) {
    await sql`
      INSERT INTO blocos_aula (aula_id, ordem, tipo, conteudo)
      VALUES (${aula.id}, ${ordem}, ${b.tipo}::tipo_bloco, ${JSON.stringify(b.conteudo)}::jsonb)
    `
    ordem += 1
    n += 1
  }
  const minutos = minutosAula(blocos, { projeto: aula.tipo === 'projeto' })
  await sql`
    UPDATE aulas
    SET tempo_minutos = ${minutos}, atualizado_em = now(), publicada = true
    WHERE id = ${aula.id}
  `
  console.log(chave, minutos, 'min', pacote ? pacote.href : 'sem-arquivo')
}

await sql`UPDATE trilhas SET publicada = true WHERE id IN ('html-css', 'javascript')`

await sql`DELETE FROM noticias`
for (const not of noticias) {
  await sql`
    INSERT INTO noticias (slug, titulo, resumo, corpo, publicada, publicado_em)
    VALUES (
      ${not.slug},
      ${not.titulo},
      ${not.resumo},
      ${JSON.stringify({ markdown: not.markdown })}::jsonb,
      true,
      now()
    )
  `
}

console.log('blocos inseridos', n, 'aulas com mapa', Object.keys(aulas).length, 'noticias', noticias.length)
