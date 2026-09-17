// Aula: this. Bancada: Console.
// Tente: rode conta.mostrar() e depois solta().
// Tente: const mostra = () => console.log(conta.saldo) e chame mostra().
//
// this = quem chamou com o PONTO. conta.mostrar() → this é conta.
// Arrow não ganha this próprio — por isso o método aqui é function.

const conta = {
  saldo: 10,
  mostrar: function () {
    console.log(this.saldo)
  },
}

conta.mostrar() // 10

const solta = conta.mostrar
solta() // this se perde (undefined / erro)
