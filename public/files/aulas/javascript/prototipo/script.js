// Se o objeto não tem a chave, o JS olha no protótipo (o pai).
// Object.create(pai) liga os dois. Não é cópia.

const pai = { tipo: 'conta' }
const filha = Object.create(pai)
filha.saldo = 3
console.log(filha.saldo) // no próprio objeto
console.log(filha.tipo) // veio do pai
