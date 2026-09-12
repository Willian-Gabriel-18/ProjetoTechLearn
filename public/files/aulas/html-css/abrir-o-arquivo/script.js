// Roda sozinho quando o index.html abre.
// F12 → aba Console: esta mensagem tem que aparecer.

console.log('O JavaScript também rodou.')

const frase = document.querySelector('#frase')
frase.textContent = 'HTML aberto. JS também — olhe o Console (F12).'
