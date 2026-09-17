// Aula: Objetos. Bancada: Console.
// Ficha com chaves (propriedades). Método = função numa chave. Sem this nesta aula.
//
// Tente: mude aluno.idade e logue de novo.
// Tente: chame conta.mostrar(). Depois troque o saldo e chame de novo.

const aluno = {
  nome: 'Lia',
  cidade: 'Recife',
  idade: 19,
}
console.log(aluno.nome)
console.log(aluno['cidade'])
aluno.idade = 20
console.log(aluno.idade)

const conta = {
  saldo: 10,
  mostrar: function () {
    console.log(conta.saldo)
  },
}
conta.mostrar()
