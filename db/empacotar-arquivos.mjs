import { existsSync, readdirSync, unlinkSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const CODE_EXT = new Set(['.html', '.css', '.js'])
const raizAulas = join(dirname(fileURLToPath(import.meta.url)), '../public/files/aulas')

function ext(nome) {
  const i = nome.lastIndexOf('.')
  return i >= 0 ? nome.slice(i).toLowerCase() : ''
}

export function arquivosCodigo(pasta) {
  if (!existsSync(pasta)) return []
  return readdirSync(pasta)
    .filter((n) => CODE_EXT.has(ext(n)))
    .sort()
}

export function infoPacote(trilha, slug) {
  const pasta = join(raizAulas, trilha, slug)
  const zipNome = `${slug}.zip`
  const zipPath = join(pasta, zipNome)
  const arquivos = arquivosCodigo(pasta)
  if (arquivos.length >= 2 && existsSync(zipPath)) {
    const exts = new Set(arquivos.map((n) => ext(n).slice(1).toUpperCase()))
    const extra = [...exts].join(' + ')
    return {
      href: `/files/aulas/${trilha}/${slug}/${zipNome}`,
      rotulo: `Baixar os arquivos desta aula (${extra})`,
    }
  }
  if (arquivos.length === 1) {
    return {
      href: `/files/aulas/${trilha}/${slug}/${arquivos[0]}`,
      rotulo: 'Baixar o arquivo desta aula',
    }
  }
  return null
}

export function empacotarAulas() {
  if (!existsSync(raizAulas)) return 0
  let n = 0
  for (const trilha of readdirSync(raizAulas)) {
    const dirTrilha = join(raizAulas, trilha)
    for (const slug of readdirSync(dirTrilha)) {
      const pasta = join(dirTrilha, slug)
      const zipPath = join(pasta, `${slug}.zip`)
      if (existsSync(zipPath)) unlinkSync(zipPath)
      const arquivos = arquivosCodigo(pasta)
      if (arquivos.length < 2) continue
      execFileSync('zip', ['-q', '-j', zipPath, ...arquivos.map((f) => join(pasta, f))])
      n += 1
    }
  }
  return n
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const n = empacotarAulas()
  console.log('zips gerados', n)
}
