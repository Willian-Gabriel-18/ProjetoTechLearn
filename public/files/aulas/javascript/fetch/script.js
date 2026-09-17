// fetch chama uma URL. A resposta AINDA NÃO é o JSON: chame .json().
// ViaCEP é pública, sem senha. Troque o CEP (8 dígitos) pelo da sua rua.

async function buscarCep(cep) {
  const url = 'https://viacep.com.br/ws/' + cep + '/json/'
  const resp = await fetch(url)
  if (!resp.ok) {
    throw new Error('rede')
  }
  return resp.json()
}

buscarCep('01001000').then(function (dados) {
  console.log(dados.localidade, dados.uf)
})
