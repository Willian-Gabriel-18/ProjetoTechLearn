// Aula: Promises. Bancada: Console.
// Tente: troque 500 por 1000 e veja o log atrasar.
// Tente: clique na página durante a espera — ela continua viva.
//
// Promise = valor futuro. then = quando chegar. catch = se falhar.
// A página NÃO trava: “isso sai antes” aparece primeiro.

const espera = new Promise(function (resolve) {
  setTimeout(function () {
    resolve('pronto')
  }, 500)
})

espera.then(function (valor) {
  console.log(valor)
})
console.log('isso sai antes')
