// Se o objeto não tem a chave, o JS olha no protótipo.
// Object.create(pai) faz um objeto que “herda” do pai.

const pai = { tipo: 'conta' }
const filha = Object.create(pai)
filha.saldo = 3
console.log(filha.saldo)
console.log(filha.tipo)
