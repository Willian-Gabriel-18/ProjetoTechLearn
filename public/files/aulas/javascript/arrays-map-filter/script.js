// Bancada: Console (F12). Os três não mudam a lista original.

const notas = [5, 7, 9, 4]

// map: outra lista, mesmo tamanho, cada item transformado.
const comUm = notas.map(function (n) {
  return n + 1
})

// filter: só quem passa no teste (aqui: nota >= 6).
const passou = notas.filter(function (n) {
  return n >= 6
})

// find: o PRIMEIRO que passa. Se ninguém passar, undefined.
const primeira = notas.find(function (n) {
  return n >= 6
})

console.log('map', comUm)
console.log('filter', passou)
console.log('find', primeira)
console.log('original intacto', notas)
