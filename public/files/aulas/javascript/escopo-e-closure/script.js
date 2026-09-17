// n vive DENTRO de criarContador. Cada chamada abre a própria gaveta.
// A função de dentro “lembra” esse n (closure).

function criarContador() {
  let n = 0
  return function () {
    n = n + 1
    return n
  }
}

const a = criarContador()
const b = criarContador()
console.log('a', a()) // 1
console.log('a', a()) // 2
console.log('b', b()) // 1 — não briga com a
