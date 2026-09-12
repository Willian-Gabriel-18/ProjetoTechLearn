import { readFileSync } from 'node:fs'
import { neon } from '@neondatabase/serverless'
import { iniciante } from './seed-blocos/iniciante.mjs'
import { intermediario } from './seed-blocos/intermediario.mjs'
import { avancado } from './seed-blocos/avancado.mjs'
import { noticias } from './seed-blocos/noticias.mjs'
import { minutosAula } from './seed-blocos/helpers.mjs'

function envLocal() {
  const t = readFileSync(new URL('../.env', import.meta.url), 'utf8')
  const out = {}
  for (const line of t.split('\n')) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
    if (m) out[m[1]] = m[2]
  }
  return out
}

const aulas = { ...iniciante, ...intermediario, ...avancado }

const env = { ...envLocal(), ...process.env }
const sql = neon(env.DATABASE_URL)

await sql`
  INSERT INTO trilhas (id, titulo, descricao, ordem, publicada)
  VALUES (
    'html-css',
    'HTML e CSS',
    'A estrutura e a roupa da página. Abre depois do JavaScript.',
    4,
    false
  )
  ON CONFLICT (id) DO UPDATE SET
    titulo = EXCLUDED.titulo,
    descricao = EXCLUDED.descricao,
    ordem = EXCLUDED.ordem,
    publicada = false
`

const rows = await sql`SELECT id, slug FROM aulas`
const idPorSlug = Object.fromEntries(rows.map((r) => [r.slug, r.id]))

await sql`DELETE FROM blocos_aula`

let n = 0
for (const [slug, blocos] of Object.entries(aulas)) {
  const aulaId = idPorSlug[slug]
  if (!aulaId) {
    console.error('slug sem aula:', slug)
    continue
  }
  let ordem = 1
  for (const b of blocos) {
    await sql`
      INSERT INTO blocos_aula (aula_id, ordem, tipo, conteudo)
      VALUES (${aulaId}, ${ordem}, ${b.tipo}::tipo_bloco, ${JSON.stringify(b.conteudo)}::jsonb)
    `
    ordem += 1
    n += 1
  }
  const minutos = minutosAula(blocos, { projeto: slug.startsWith('projeto-') })
  await sql`
    UPDATE aulas
    SET tempo_minutos = ${minutos}, atualizado_em = now()
    WHERE id = ${aulaId}
  `
  console.log(slug, minutos, 'min')
}

await sql`UPDATE aulas SET publicada = true, atualizado_em = now()`
await sql`UPDATE trilhas SET publicada = true WHERE id <> 'html-css'`
await sql`UPDATE trilhas SET publicada = false WHERE id = 'html-css'`

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
