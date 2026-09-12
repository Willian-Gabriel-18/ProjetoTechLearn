// textContent trata o texto como texto. innerHTML com dado de fora abre XSS.

const nome = '<img src=x onerror=alert(1)>'
const p = document.querySelector('#nome')
p.textContent = nome
// p.innerHTML = nome  // não faça isso com dado de fora
