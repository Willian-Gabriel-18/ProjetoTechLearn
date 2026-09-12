// Loading, cidade, CEP inexistente, falha de rede. textContent, nunca innerHTML com a resposta.

async function mostrarCep(cep, saida) {
  saida.textContent = 'Buscando…'
  try {
    const resp = await fetch('https://viacep.com.br/ws/' + cep + '/json/')
    const dados = await resp.json()
    if (dados.erro) {
      saida.textContent = 'CEP não encontrado.'
      return
    }
    saida.textContent = dados.localidade + ' / ' + dados.uf
  } catch (e) {
    saida.textContent = 'Falha de rede. Tente de novo.'
  }
}

const form = document.querySelector('#form')
const campo = document.querySelector('#cep')
const saida = document.querySelector('#saida')

form.addEventListener('submit', function (evento) {
  evento.preventDefault()
  const cep = campo.value.replace(/\D/g, '')
  if (cep.length !== 8) {
    saida.textContent = 'CEP precisa de 8 números.'
    return
  }
  mostrarCep(cep, saida)
})
