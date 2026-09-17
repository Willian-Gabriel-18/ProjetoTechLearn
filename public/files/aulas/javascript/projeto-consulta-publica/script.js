// Mini-projeto avançado. Quatro estados na tela: carregando, cidade, CEP inexistente, falha de rede.
// textContent sempre — a resposta da API nunca vira HTML.

async function mostrarCep(cep, saida) {
  saida.textContent = 'Buscando…'
  try {
    const resp = await fetch('https://viacep.com.br/ws/' + cep + '/json/')
    const dados = await resp.json()
    // ViaCEP devolve { erro: true } quando o CEP não existe.
    if (dados.erro) {
      saida.textContent = 'CEP não encontrado.'
      return
    }
    saida.textContent = dados.localidade + ' / ' + dados.uf
  } catch (e) {
    // Wi-Fi desligado, URL errada, etc. Frase humana, não o erro cru.
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
