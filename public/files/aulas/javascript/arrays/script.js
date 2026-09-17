// Aula: Arrays. Bancada: Console.
// Índice começa em 0. length = propriedade. push() = método (leva parênteses).
//
// Tente: console.log(frutas[1]) — segundo item, não o primeiro.
// Tente: frutas.push('caju') e logue length de novo.

const frutas = ['açaí', 'manga', 'caju']
console.log(frutas[0])
console.log(frutas.length)
frutas.push('goiaba')
for (let i = 0; i < frutas.length; i = i + 1) {
  console.log(frutas[i])
}
