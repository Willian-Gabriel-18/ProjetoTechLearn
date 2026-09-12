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
