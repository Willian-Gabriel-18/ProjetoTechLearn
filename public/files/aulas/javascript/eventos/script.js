// Aula: Eventos. Pasta + Chrome. Tente: cada clique deve somar 1 no parágrafo.
// Tente: mude o texto do botão no HTML e recarregue — o JS continua no mesmo id.
//
// Pasta: este script.js ao lado do index.html.
// 1) Acha o botão e o parágrafo pelos ids do HTML.
const botao = document.querySelector('#btn')
const saida = document.querySelector('#saida')
// 2) let porque o número de cliques muda.
let cliques = 0

// 3) Quando o evento "click" acontecer neste botão, rode a função.
botao.addEventListener('click', function () {
  cliques = cliques + 1
  saida.textContent = 'Cliques: ' + cliques
})
