// map: outra lista, mesmo tamanho, item transformado.
// filter: só quem passa no teste. Os dois não mudam a lista original.

const notas = [5, 7, 9, 4]
const comUm = notas.map(function (n) {
  return n + 1
})
const passou = notas.filter(function (n) {
  return n >= 6
})
console.log(comUm)
console.log(passou)
