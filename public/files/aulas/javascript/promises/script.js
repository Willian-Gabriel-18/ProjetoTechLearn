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
