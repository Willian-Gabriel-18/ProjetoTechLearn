// Markdown mínimo: parágrafos, títulos, listas, **negrito**, `código`, [texto](url). Sem HTML cru.
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function inline(src) {
  let h = escapeHtml(src)
  h = h.replace(/`([^`]+)`/g, '<code class="fonte-codigo">$1</code>')
  h = h.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  h = h.replace(/\*([^*]+)\*/g, '<em>$1</em>')
  h = h.replace(
    /\[([^\]]+)\]\((https?:[^)]+)\)/g,
    '<a href="$2" class="underline text-cerrado" target="_blank" rel="noopener noreferrer">$1</a>',
  )
  h = h.replace(
    /\[([^\]]+)\]\((\/[^)]+)\)/g,
    '<a href="$2" class="underline text-cerrado">$1</a>',
  )
  return h
}

export function markdownParaHtml(src) {
  const texto = String(src || '')
  const blocos = texto.split(/\n{2,}/)
  return blocos
    .map((p) => {
      const t = p.trim()
      if (!t) return ''
      if (t.startsWith('## ')) {
        return `<h2 class="font-display text-2xl text-tinta mt-2 mb-3">${inline(t.slice(3))}</h2>`
      }
      if (t.startsWith('### ')) {
        return `<h3 class="font-display text-xl text-tinta mt-2 mb-2">${inline(t.slice(4))}</h3>`
      }
      const linhas = t.split('\n')
      if (linhas.every((l) => /^[-*] /.test(l.trim()) || l.trim() === '')) {
        const items = linhas
          .map((l) => l.trim())
          .filter((l) => /^[-*] /.test(l))
          .map((l) => `<li class="mb-1">${inline(l.replace(/^[-*] /, ''))}</li>`)
          .join('')
        return `<ul class="list-disc pl-5 mb-5 space-y-1 text-lg leading-relaxed">${items}</ul>`
      }
      return `<p class="mb-5 last:mb-0">${inline(t).replace(/\n/g, '<br>')}</p>`
    })
    .join('')
}
