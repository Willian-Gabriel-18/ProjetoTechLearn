// Nomes oficiais das trilhas (imutáveis: feedback e material já citam estes títulos).
export const TRILHAS = [
  { id: 'comecar', titulo: 'Antes de começar', href: '/aprender/comecar' },
  { id: 'html-css', titulo: 'HTML e CSS', href: '/aprender/html-css' },
  { id: 'javascript', titulo: 'JavaScript', href: '/aprender/javascript' },
]

const CLASSE_LINK = 'underline text-cerrado underline-offset-4'

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function escapeRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function semAspas(texto) {
  return String(texto || '')
    .replace(/^[“”"«»]+/, '')
    .replace(/[“”"«»]+$/, '')
    .trim()
}

export function trilhaPorId(id) {
  return TRILHAS.find((t) => t.id === id) || null
}

/** Põe aspas no nome oficial da trilha. “HTML e CSS básico” vira “HTML e CSS” básico. */
export function aspasNomeTrilha(texto) {
  const nu = semAspas(texto)
  const basico = nu.endsWith(' básico')
  const base = basico ? nu.slice(0, -' básico'.length) : nu
  if (TRILHAS.some((t) => t.titulo === base)) {
    return `“${base}”${basico ? ' básico' : ''}`
  }
  return String(texto || '')
}

/** Texto corrido (descrição da card): nomes oficiais viram link com aspas. */
export function htmlCitarTrilhas(texto) {
  let s = escapeHtml(String(texto || ''))
  for (const t of TRILHAS) {
    const re = new RegExp(`(?:“|&ldquo;|&quot;)?${escapeRe(t.titulo)}(?:”|&rdquo;|&quot;)?`, 'g')
    s = s.replace(
      re,
      `<a href="${t.href}" class="${CLASSE_LINK}">“${escapeHtml(t.titulo)}”</a>`,
    )
  }
  return s
}
