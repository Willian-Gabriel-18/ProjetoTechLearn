// Bancada: pasta + Chrome. index.html e este arquivo na mesma pasta.

const form = document.querySelector('#form')
const campo = document.querySelector('#cep')
const saida = document.querySelector('#saida')

form.addEventListener('submit', function (evento) {
  // Sem isto, o HTML recarrega a página e o JS perde o estado.
  evento.preventDefault()
  // trim tira espaços nas pontas. "   " parece preenchido e está vazio.
  const valor = campo.value.trim()
  if (valor === '') {
    saida.textContent = 'Preencha o CEP.'
    return
  }
  saida.textContent = 'Você digitou ' + valor
})
