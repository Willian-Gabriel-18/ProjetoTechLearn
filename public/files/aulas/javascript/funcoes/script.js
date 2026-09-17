// Aula: Funções. Bancada: Console.
// Declarar = escrever a receita. Chamar = usar. a, b = parâmetros. 2, 3 = argumentos.
// return devolve. console.log só mostra.
//
// Tente: troque 2 e 3 por outros números.
// Tente: acrescente console.log(somar(10, 1)).
// Tente: apague o return e veja undefined.

function somar(a, b) {
  return a + b
}

const total = somar(2, 3)
console.log(total)

function cumprimentar(nome) {
  console.log('Olá, ' + nome)
}
cumprimentar('Ana')
