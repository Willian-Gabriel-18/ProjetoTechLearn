// this no método aponta para o objeto à esquerda do ponto.
// Arrow não ganha this próprio — por isso o método aqui é function.

const conta = {
  saldo: 10,
  mostrar: function () {
    console.log(this.saldo)
  },
}
conta.mostrar()
