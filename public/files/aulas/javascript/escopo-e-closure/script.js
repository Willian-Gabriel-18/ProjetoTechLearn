// A função interna “lembra” o que estava à volta quando foi criada.
// Cada chamada de criarContador() tem o próprio let n.

function criarContador() {
  let n = 0
  return function () {
    n = n + 1
    return n
  }
}

const a = criarContador()
console.log(a())
console.log(a())
