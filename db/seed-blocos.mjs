import { readFileSync } from 'node:fs'
import { neon } from '@neondatabase/serverless'
import { iniciante } from './seed-blocos/iniciante.mjs'
import { intermediario } from './seed-blocos/intermediario.mjs'
import { avancado } from './seed-blocos/avancado.mjs'
import { htmlCss } from './seed-blocos/html-css.mjs'
import { comecar } from './seed-blocos/comecar.mjs'
import { noticias } from './seed-blocos/noticias.mjs'
import { minutosAula, comDownload } from './seed-blocos/helpers.mjs'
import { empacotarAulas, infoPacote } from './empacotar-arquivos.mjs'
import './gerar-pacotes.mjs'

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

await sql`ALTER TABLE noticias ADD COLUMN IF NOT EXISTS imagem_capa text`

const comecarMeta = [
  ['arquivo-pasta-extensao', 'Arquivo, pasta e extensão', 'Arquivo não é pasta. A extensão (.html) diz o tipo. Windows às vezes esconde o ponto.', 1, 'aula'],
  ['chrome-nao-e-google', 'Chrome não é o Google', 'Chrome é o programa da janela. Google é busca. F5 depois de salvar.', 2, 'aula'],
  ['editor-vscode', 'O editor é o VS Code', 'Código não vai no Word. Instalar o VS Code e abrir a pasta, não um arquivo solto.', 3, 'aula'],
  ['atalhos-vscode', 'Atalhos do VS Code', 'Salvar, formatar, comentar, desfazer. Só estes atalhos nas outras trilhas.', 4, 'aula'],
  ['baixar-e-abrir', 'Baixar e abrir o pacote', 'Botão de baixar, zip, mesma pasta, abrir o HTML. Serve para HTML+CSS e para JavaScript.', 5, 'aula'],
  ['duas-bancadas', 'Duas bancadas', 'Pasta + Chrome para ver a página. F12 Console para falar com o JavaScript.', 6, 'aula'],
]

const htmlMeta = [
  ['o-que-e-uma-pagina', 'O que é uma página', 'Arquivo .html, abrir no Chrome, e o mapa HTML / CSS / JS.', 1, 'aula'],
  ['anatomia-da-tag', 'Anatomia da tag', 'Abertura, conteúdo, fechamento. Atributo na abertura.', 2, 'aula'],
  ['esqueleto', 'Esqueleto', 'doctype, html, head, body. O visível vai no body.', 3, 'aula'],
  ['texto-e-titulos', 'Texto e títulos', 'h1 a h3, parágrafo. strong é importância; em é ênfase no tom.', 4, 'aula'],
  ['links-imagens-listas', 'Links, imagens e listas', 'a, img (não fecha) com alt, listas numeradas e com marcador.', 5, 'aula'],
  ['nomear-pecas', 'Nomear peças', 'id único, class repetível, div. O JavaScript vai perguntar esses nomes.', 6, 'aula'],
  ['botao-e-formulario', 'Botão e formulário', 'button, input, label, form e checkbox. Sem JavaScript ainda.', 7, 'aula'],
  ['css-ligar-e-vestir', 'CSS: ligar e vestir', 'Arquivo CSS na mesma pasta, seletores, cor e letra.', 8, 'aula'],
  ['caixa-e-lado-a-lado', 'Caixa e lado a lado', 'margin, padding, border e três botões em fila.', 9, 'aula'],
  ['projeto-pagina-sua', 'Mini-projeto: uma página sua', 'Título, texto, imagem, lista e um botão. Quando terminar, o próximo passo é o JavaScript.', 10, 'projeto'],
]

// ordem UNIQUE nas trilhas: empurra primeiro, depois assenta 1, 2, 3.
await sql`UPDATE trilhas SET ordem = ordem + 10 WHERE id IN ('html-css', 'javascript', 'comecar')`

await sql`
  INSERT INTO trilhas (id, titulo, descricao, ordem, publicada)
  VALUES (
    'comecar',
    'Antes de começar',
    'Pasta, Chrome, VS Code e o botão de baixar. O ponto de partida, antes das outras trilhas.',
    1,
    true
  )
  ON CONFLICT (id) DO UPDATE SET
    titulo = EXCLUDED.titulo,
    descricao = EXCLUDED.descricao,
    ordem = 1,
    publicada = true
`
await sql`
  INSERT INTO trilhas (id, titulo, descricao, ordem, publicada)
  VALUES (
    'html-css',
    'HTML e CSS',
    'A estrutura e o visual da página. Melhor depois da trilha “Antes de começar”.',
    2,
    true
  )
  ON CONFLICT (id) DO UPDATE SET
    titulo = EXCLUDED.titulo,
    descricao = EXCLUDED.descricao,
    ordem = 2,
    publicada = true
`
await sql`
  INSERT INTO trilhas (id, titulo, descricao, ordem, publicada)
  VALUES (
    'javascript',
    'JavaScript',
    'A página reage ao clique. Melhor depois das trilhas “Antes de começar” e “HTML e CSS”.',
    3,
    true
  )
  ON CONFLICT (id) DO UPDATE SET
    titulo = EXCLUDED.titulo,
    descricao = EXCLUDED.descricao,
    ordem = 3,
    publicada = true
`

await sql`
  DELETE FROM aulas
  WHERE trilha_id = 'html-css' AND slug = 'abrir-o-arquivo'
`
// UNIQUE (trilha_id, nivel, ordem): afasta os números velhos antes de assentar os novos.
await sql`UPDATE aulas SET ordem = ordem + 50 WHERE trilha_id IN ('html-css', 'comecar')`

async function upsertAulas(trilhaId, lista) {
  for (const [slug, titulo, resumo, ordem, tipo] of lista) {
    await sql`
      INSERT INTO aulas (trilha_id, slug, titulo, resumo, ordem, tipo, nivel, precisa_pagina, publicada)
      VALUES (
        ${trilhaId},
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
}

await upsertAulas('comecar', comecarMeta)
await upsertAulas('html-css', htmlMeta)

await sql`
  UPDATE aulas
  SET resumo = 'try/catch e mensagem para a pessoa, sem alert no site publicado.',
      atualizado_em = now()
  WHERE trilha_id = 'javascript' AND slug = 'erros'
`

const zips = empacotarAulas()
console.log('zips', zips)

const aulas = {
  ...Object.fromEntries(Object.entries(comecar).map(([slug, blocos]) => ['comecar:' + slug, blocos])),
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

await sql`UPDATE trilhas SET publicada = true WHERE id IN ('comecar', 'html-css', 'javascript')`

await sql`DELETE FROM noticias`
for (const not of noticias) {
  await sql`
    INSERT INTO noticias (slug, titulo, resumo, corpo, imagem_capa, publicada, publicado_em)
    VALUES (
      ${not.slug},
      ${not.titulo},
      ${not.resumo},
      ${JSON.stringify({ markdown: not.markdown })}::jsonb,
      ${not.imagem_capa || null},
      true,
      now()
    )
  `
}

console.log('blocos inseridos', n, 'aulas com mapa', Object.keys(aulas).length, 'noticias', noticias.length)
