// Aula: Loops. Bancada: Console.
// for: começa em 0, enquanto i < 5, soma 1. while: sempre mude a variável.
//
// Tente: some 1 a 10 com for (let soma = 0). Tem que dar 55.
// Não rode um while sem n = n - 1 — trava o Chrome.

for (let i = 0; i < 5; i = i + 1) {
  console.log('volta', i)
}

let n = 3
while (n > 0) {
  console.log(n)
  n = n - 1
}
