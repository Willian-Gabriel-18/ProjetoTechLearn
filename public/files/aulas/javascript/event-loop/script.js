// setTimeout 0 não é “agora”: entra na fila. O log B espera o A terminar.

console.log('A')
setTimeout(function () {
  console.log('C')
}, 0)
console.log('B')
