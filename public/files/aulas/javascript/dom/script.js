// Aula: DOM. Pasta + Chrome. Tente: troque a string do textContent, Ctrl+S, F5.
// Tente: se der null no Console, o id do HTML não bate com o do JS.
//
// Este arquivo está na mesma pasta do index.html.
// A cerquilha (#) é o id. Se mudar o id no HTML, mude aqui também.

// 1) Acha na página a peça com id="titulo".
const titulo = document.querySelector('#titulo')
// 2) Troca o texto que a pessoa lê.
titulo.textContent = 'Aula de DOM'
// 3) (passo extra) Troca a cor. Se o texto já mudou, a ponte HTML↔JS está de pé.
titulo.style.color = '#1F6A4A'

const msg = document.querySelector('#msg')
msg.textContent = 'funcionou'
