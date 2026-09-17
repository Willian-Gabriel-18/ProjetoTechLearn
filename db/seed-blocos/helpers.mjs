export const md = (markdown) => ({ tipo: 'texto', conteudo: { markdown } })
export const conce = (termo, explicacao) => ({ tipo: 'conceito', conteudo: { termo, explicacao } })
export const code = (codigo, linguagem = 'javascript') => ({
  tipo: 'codigo',
  conteudo: { linguagem, codigo },
})
export const yt = (video_id, titulo, canal) => ({ tipo: 'youtube', conteudo: { video_id, titulo, canal } })
export const img = (src, alt, extras = {}) => ({
  tipo: 'imagem',
  conteudo: { src, alt, credito: extras.credito || '', legenda: extras.legenda || '' },
})
export const tente = (instrucao) => ({ tipo: 'tente', conteudo: { instrucao } })
export const ex = (enunciado, resposta = '') => ({
  tipo: 'exercicio',
  conteudo: { enunciado, resposta },
})
export const arq = (href, rotulo) => ({ tipo: 'arquivo', conteudo: { href, rotulo } })
// href: caminho da aula seguinte. Sem href, a frase já traz o destino (fim de trilha).
export const proxima = (frase, href) =>
  md(`## Na próxima\n\n${href ? `[${frase}](${href})` : frase}`)

function contarPalavras(s) {
  return String(s || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

// Tempo coerente com o tamanho: leitura (~150 pal/min) + prática, código e vídeo.
export function minutosAula(blocos, { projeto = false } = {}) {
  let palavras = 0
  let extra = 0
  for (const b of blocos) {
    const c = b.conteudo || {}
    if (b.tipo === 'texto') palavras += contarPalavras(c.markdown)
    else if (b.tipo === 'conceito') palavras += contarPalavras(c.termo) + contarPalavras(c.explicacao)
    else if (b.tipo === 'tente') {
      palavras += contarPalavras(c.instrucao)
      extra += 4
    } else if (b.tipo === 'exercicio') {
      palavras += contarPalavras(c.enunciado) + contarPalavras(c.resposta)
      extra += 2
    } else if (b.tipo === 'codigo') extra += 2
    else if (b.tipo === 'youtube') extra += 7
    else if (b.tipo === 'arquivo') extra += 2
    else if (b.tipo === 'imagem') extra += 1
  }
  if (projeto) extra += 16
  const leitura = Math.max(1, Math.round(palavras / 150))
  return Math.min(45, Math.max(10, leitura + extra))
}

// Coloca o botão de baixar antes de “Na próxima”, sem duplicar.
export function comDownload(blocos, href, rotulo) {
  if (!href) return blocos
  const semArq = blocos.filter((b) => b.tipo !== 'arquivo')
  const bloco = arq(href, rotulo)
  const i = semArq.findIndex(
    (b) => b.tipo === 'texto' && String(b.conteudo?.markdown || '').startsWith('## Na próxima'),
  )
  if (i < 0) return [...semArq, bloco]
  return [...semArq.slice(0, i), bloco, ...semArq.slice(i)]
}
