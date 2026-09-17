// Mini-projeto: lista de tarefas. Pasta + Chrome.
// Tente: inclua duas tarefas, clique numa (risca), recarregue — tem que lembrar.
// Tente: Limpar dados do site neste endereço e recarregar — lista vazia, sem erro.
//
// Mini-projeto intermediário. Inclui, marca feita, lembra no localStorage.
// textContent (nunca innerHTML com texto cru).

const chave = 'techlearn-tarefas'
const form = document.querySelector('#form')
const campo = document.querySelector('#campo')
const lista = document.querySelector('#lista')

// localStorage só guarda string. JSON.parse volta para lista.
// Se o texto estiver quebrado, devolve [] — limpar dados do site não pode crashar.
function ler() {
  try {
    return JSON.parse(localStorage.getItem(chave) || '[]')
  } catch {
    return []
  }
}

function salvar(itens) {
  localStorage.setItem(chave, JSON.stringify(itens))
}

function desenhar() {
  lista.textContent = ''
  const itens = ler()
  itens.forEach(function (item, i) {
    const li = document.createElement('li')
    li.textContent = item.texto
    if (item.feita) li.style.textDecoration = 'line-through'
    li.addEventListener('click', function () {
      itens[i].feita = !itens[i].feita
      salvar(itens)
      desenhar()
    })
    lista.appendChild(li)
  })
}

form.addEventListener('submit', function (evento) {
  evento.preventDefault()
  const texto = campo.value.trim()
  if (!texto) return
  const itens = ler()
  itens.push({ texto: texto, feita: false })
  salvar(itens)
  campo.value = ''
  desenhar()
})

desenhar()
