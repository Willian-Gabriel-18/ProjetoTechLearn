// Aula: Segurança no front. Pasta + Chrome.
// Tente: o símbolo < tem que aparecer na tela, NÃO um alerta.
//
// textContent trata o texto como texto. innerHTML com dado de fora abre XSS
// (o navegador executaria o onerror e um alerta apareceria).

const nome = '<img src=x onerror=alert(1)>'
const p = document.querySelector('#nome')
p.textContent = nome
// p.innerHTML = nome  // não faça isso com dado de fora
