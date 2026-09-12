// Índice começa em 0. frutas[1] é o segundo item.
// push coloca no fim. length é quantos itens existem agora.

const frutas = ['açaí', 'manga', 'caju']
console.log(frutas[0])
console.log(frutas.length)
frutas.push('goiaba')
for (let i = 0; i < frutas.length; i = i + 1) {
  console.log(frutas[i])
}
