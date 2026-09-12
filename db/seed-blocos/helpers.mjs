export const md = (markdown) => ({ tipo: 'texto', conteudo: { markdown } })
export const conce = (termo, explicacao) => ({ tipo: 'conceito', conteudo: { termo, explicacao } })
export const code = (codigo) => ({ tipo: 'codigo', conteudo: { linguagem: 'javascript', codigo } })
export const yt = (video_id, titulo, canal) => ({ tipo: 'youtube', conteudo: { video_id, titulo, canal } })
export const img = (src, alt, extras = {}) => ({
  tipo: 'imagem',
  conteudo: { src, alt, credito: extras.credito || '', legenda: extras.legenda || '' },
})
export const tente = (instrucao) => ({ tipo: 'tente', conteudo: { instrucao } })
export const ex = (enunciado) => ({ tipo: 'exercicio', conteudo: { enunciado } })
export const arq = (href, rotulo) => ({ tipo: 'arquivo', conteudo: { href, rotulo } })
export const proxima = (frase) => md(`## Na próxima\n\n${frase}`)

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
      palavras += contarPalavras(c.enunciado)
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
