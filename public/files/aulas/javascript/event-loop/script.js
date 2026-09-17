// Ordem: A, C, B. O setTimeout 0 NÃO fura a pilha.
// B só roda quando o código síncrono (A e C) acaba.

console.log('A')
setTimeout(function () {
  console.log('B')
}, 0)
console.log('C')
