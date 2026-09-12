// Inclui, marca feita no clique, lembra no localStorage. Sem innerHTML com texto cru: textContent.

const chave = 'techlearn-tarefas'
const form = document.querySelector('#form')
const campo = document.querySelector('#campo')
const lista = document.querySelector('#lista')

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
