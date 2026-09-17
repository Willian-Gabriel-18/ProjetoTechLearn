// Aula: if e else. Bancada: Console. Cole o bloco INTEIRO.
// Troque hora para 9 (Bom dia) e 20 (Boa noite).
//
// Tente: if ('') { console.log('entrou') } — texto vazio não entra.
// Tente: if (0) { console.log('entrou') } — zero também é “não”.

const hora = 14
if (hora < 12) {
  console.log('Bom dia')
} else if (hora < 18) {
  console.log('Boa tarde')
} else {
  console.log('Boa noite')
}
