// Ficha com chaves, não fila 0, 1, 2.
// Ponto (aluno.nome) é o jeito mais comum.

const aluno = {
  nome: 'Lia',
  cidade: 'Recife',
  idade: 19,
}
console.log(aluno.nome)
console.log(aluno['cidade'])
aluno.idade = 20
console.log(aluno.idade)
