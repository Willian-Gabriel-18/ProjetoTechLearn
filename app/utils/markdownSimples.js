// Markdown mínimo: parágrafos, **negrito**, `código`, [texto](url). Sem HTML cru.
export function markdownParaHtml(src) {
  const texto = String(src || '')
  const blocos = texto.split(/\n{2,}/)
  return blocos
    .map((p) => {
      let h = escapeHtml(p.trim()).replace(/\n/g, '<br>')
      h = h.replace(/`([^`]+)`/g, '<code class="fonte-codigo">$1</code>')
      h = h.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      h = h.replace(
        /\[([^\]]+)\]\((https?:[^)]+)\)/g,
        '<a href="$2" class="underline text-cerrado" target="_blank" rel="noopener noreferrer">$1</a>',
      )
      return `<p class="mb-3 last:mb-0">${h}</p>`
    })
    .join('')
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
