import { md, conce, code, img, tente, ex, proxima } from './helpers.mjs'

export const intermediario = {
  'arrays-map-filter': [
    md(`## O que você vai conseguir

Transformar e filtrar listas com \`map\` e \`filter\` — sem um \`for\` gigante.`),
    md(`## A lista nova, a lista velha intacta

\`map\` devolve **outra** lista, do mesmo tamanho, cada item transformado.

\`filter\` fica só com quem passa no teste.

Os dois **não** mudam a lista original. \`forEach\` só visita; não é para construir outra lista.`),
    conce(
      'map / filter',
      'Os dois devolvem lista nova. map: mesmo tamanho, item transformado. filter: só quem passa no teste.',
    ),
    md(`## Onde isso aparece no dia a dia

Lista de produtos: ficar só com preço abaixo de 50. Lista de nomes: deixar tudo maiúsculo. Lista de alunas: achar quem mora em Recife.`),
    md(`## Exemplo mínimo desta aula`),
    code(`const notas = [5, 7, 9, 4]
const comUm = notas.map(function (n) {
  return n + 1
})
const passou = notas.filter(function (n) {
  return n >= 6
})
console.log(comUm)
console.log(passou)`),
    tente(
      'No Console (F12): const nomes = [\'ana\', \'bia\']. Use map para deixar tudo maiúsculo (n.toUpperCase()). console.log do resultado.',
    ),
    ex('Qual método você usa para ficar só com os números pares de [1, 2, 3, 4]?'),
    proxima(
      'Na próxima aula o código moderno fica mais curto: arrow, crase no texto, e desmontar objeto em variáveis.',
    ),
  ],

  'funcoes-es6': [
    md(`## O que você vai conseguir

Ler uma arrow function e uma template string como código do dia a dia — não como magia.`),
    md(`## O mesmo, escrito menor

Arrow \`() =>\` é forma curta de função. Se só há uma expressão, o \`return\` é implícito.

Texto entre crases (\`\\\` \\\`) encaixa valor no meio com \`\${ }\`. Mais legível que vários \`+\`.

\`const { cidade } = aluno\` tira a chave cidade para uma variável. \`[...lista]\` copia um array.`),
    conce(
      'arrow function',
      'Forma curta de função. Se só há uma expressão, o return é implícito. Cuidado: o this dela é diferente — isso fica para o avançado.',
    ),
    conce(
      'template string',
      'Texto entre crases. ${} encaixa valor no meio da frase.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(`const dobro = (n) => n * 2
const nome = 'Lia'
const frase = \`Olá, \${nome}. O dobro de 4 é \${dobro(4)}.\`
console.log(frase)

const aluno = { nome: 'Lia', cidade: 'Recife' }
const { cidade } = aluno
const copias = [...[1, 2], 3]
console.log(cidade, copias)`),
    tente(
      'No Console: reescreva function soma(a, b) { return a + b } como arrow. Teste soma(1, 2) e logue.',
    ),
    ex('Por que [...] copia um array em vez de apontar para o mesmo? (Pista: se mudar a cópia, o original fica.)'),
    proxima(
      'Na próxima aula você explica por que uma variável de dentro da função não existe fora — e por que um contador “lembra”.',
    ),
  ],

  'escopo-e-closure': [
    md(`## O que você vai conseguir

Explicar por que uma variável de dentro da função não existe fora — e por que um contador “lembra”.`),
    md(`## Onde o nome vale

\`let\` dentro de \`{ }\` não vaza para fora. Isso é **escopo**. Evita bagunça.

**Closure** é o truque seguinte: a função de dentro continua enxergando \`n\` mesmo depois de \`criarContador\` ter acabado. Por isso o contador lembra.`),
    conce(
      'escopo',
      'Onde o nome vale. let dentro de { } não vaza para fora.',
    ),
    conce(
      'closure',
      'A função de dentro continua enxergando a variável de fora mesmo depois da função de fora ter acabado.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(`function criarContador() {
  let n = 0
  return function () {
    n = n + 1
    return n
  }
}
const proximo = criarContador()
console.log(proximo())
console.log(proximo())`),
    tente(
      'Cole criarContador no Console. Crie const a = criarContador(); const b = criarContador(). Some no a duas vezes e no b uma: 2 e 1. Eles não compartilham o n.',
    ),
    ex('Se n fosse criado fora da função, os dois contadores brigariam pelo mesmo n. Por quê?'),
    proxima(
      'Na próxima aula o objeto vira texto para viajar na internet — e o texto vira objeto de novo.',
    ),
  ],

  json: [
    md(`## O que você vai conseguir

Transformar um objeto em texto JSON e o texto de volta em objeto — o formato que as APIs usam.`),
    md(`## Objeto não atravessa a rede “cru”

JavaScript tem objeto. A internet manda **texto**. JSON é o combinado: texto com cara de objeto, chaves entre aspas.

\`JSON.stringify\` vai (objeto → texto). \`JSON.parse\` volta (texto → objeto). JSON inválido quebra o parse.`),
    conce(
      'JSON',
      'Texto com cara de objeto. É o que viaja na internet. stringify vai, parse volta.',
    ),
    md(`## Onde isso aparece no dia a dia

Resposta de um CEP. Lista de produtos de uma loja. Configuração salva no navegador. Quase toda API pública fala JSON.`),
    md(`## Exemplo mínimo desta aula`),
    code(`const aula = { titulo: 'JSON', minutos: 20 }
const texto = JSON.stringify(aula)
console.log(texto)
const deNovo = JSON.parse(texto)
console.log(deNovo.titulo)`),
    tente(
      'No Console: JSON.parse(\'{"ok": true}\') e leia .ok. Depois JSON.parse(\'nao e json\') e leia o erro vermelho.',
    ),
    ex('Por que a gente não manda o objeto JavaScript “cru” para outro programa? (Pista: texto atravessa rede.)'),
    proxima(
      'Na próxima aula o JavaScript espera sem travar a página: uma promessa de valor futuro.',
    ),
  ],

  promises: [
    md(`## O que você vai conseguir

Encadear \`.then\` e \`.catch\`: a espera termina, aí o próximo passo roda — a página continua clicável.`),
    md(`## Esperar sem congelar

JS não para a página enquanto espera a internet. Ele agenda o resto. **Promise** é essa promessa de um valor futuro.

\`then\` roda no sucesso. \`catch\` no erro. \`setTimeout\` nesta aula só simula espera.`),
    conce(
      'Promise',
      'Objeto que vai se resolver (deu certo) ou rejeitar (deu errado). then no sucesso; catch no erro.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(`const espera = new Promise(function (resolve) {
  setTimeout(function () {
    resolve('pronto')
  }, 500)
})
espera.then(function (msg) {
  console.log(msg)
}).catch(function (err) {
  console.log('falhou', err)
})`),
    tente(
      'No Console, cole o exemplo. Troque 500 por 1000 e veja o log atrasar um segundo. A página continua clicável — essa é a graça.',
    ),
    ex('O que seria pior: travar a página 5 segundos ou mostrar “carregando” e continuar?'),
    proxima(
      'Na próxima aula a mesma espera se escreve como passo a passo, com async e await.',
    ),
  ],

  'async-await': [
    md(`## O que você vai conseguir

Escrever espera como se fosse passo a passo, com \`async\`/\`await\` e \`try\`/\`catch\`.`),
    md(`## A mesma Promise, outra letra

\`await\` só funciona dentro de função \`async\`. Pausa **essa função** até a Promise resolver, sem travar o resto da página.

Erro: \`try\`/\`catch\`, como um \`if\` para falha.`),
    conce(
      'await',
      'Só funciona dentro de função async. Pausa essa função até a Promise resolver, sem travar o resto da página.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(`function esperar(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms)
  })
}

async function run() {
  try {
    await esperar(300)
    console.log('depois da espera')
  } catch (e) {
    console.log('erro', e)
  }
}
run()`),
    tente(
      'No Console, cole a função run e chame run() duas vezes seguidas. As duas esperas andam juntas. Isso é o JS não travando.',
    ),
    ex('Reescreva um .then simples (console.log depois de esperar) em async/await.'),
    proxima(
      'Na próxima aula você busca um CEP na internet e lê o JSON — sem chave de API.',
    ),
  ],

  fetch: [
    md(`## O que você vai conseguir

Buscar um CEP numa API pública e ler o JSON — cidade e UF no Console.`),
    md(`## Pedir um endereço e esperar a resposta

\`fetch\` chama uma URL. A resposta **não** é o JSON ainda: chame \`.json()\`.

ViaCEP é pública e sem senha — boa para treinar. Use um CEP de 8 dígitos, só números. Exemplo conhecido: \`01001000\` (centro de São Paulo).

Senha de API no arquivo JS que o Chrome baixa é senha pública. Por isso treinamos com API sem chave.`),
    conce(
      'fetch',
      'Função do navegador que chama uma URL. A resposta não é o JSON ainda: chame .json().',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(`async function buscarCep(cep) {
  const url = 'https://viacep.com.br/ws/' + cep + '/json/'
  const resp = await fetch(url)
  if (!resp.ok) {
    throw new Error('rede')
  }
  return resp.json()
}

buscarCep('01001000').then(function (dados) {
  console.log(dados.localidade, dados.uf)
})`),
    tente(
      'No Console (ou no arquivo da aula): troque o CEP para o da sua rua (8 dígitos). Veja localidade. Se der erro, o CEP pode ser inválido — trate no mini-projeto avançado.',
    ),
    ex('Por que não colocamos senha de API no arquivo JS que o navegador baixa?'),
    proxima(
      'Na próxima aula o formulário não recarrega a página: você lê o campo e mostra o resultado na hora.',
    ),
  ],

  formularios: [
    md(`## O que você vai conseguir

O formulário não recarrega a página: você lê o input e mostra o resultado na hora.`),
    md(`## O padrão do HTML é recarregar

No \`submit\`, o navegador recarrega a página. \`preventDefault\` cancela isso. Sem ele, seu JS perde o estado.

\`trim()\` tira espaços nas pontas. Campo que parece preenchido com espaços está vazio de verdade.`),
    conce(
      'preventDefault',
      'Cancela o comportamento padrão. No submit, o padrão é recarregar a página.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(`const form = document.querySelector('#form')
const campo = document.querySelector('#cep')
const saida = document.querySelector('#saida')

form.addEventListener('submit', function (evento) {
  evento.preventDefault()
  const valor = campo.value.trim()
  if (valor === '') {
    saida.textContent = 'Preencha o CEP.'
    return
  }
  saida.textContent = 'Você digitou ' + valor
})`),
    tente(
      'Abra o zip no Chrome (index.html + script.js na mesma pasta). Form: se estiver vazio, aviso; se tiver texto, mostre no parágrafo. Teste com espaços na frente.',
    ),
    ex('Por que trim() no value? Teste com espaços na frente.'),
    proxima(
      'Na próxima aula o código se parte em dois arquivos: um calcula, o outro fala com a página.',
    ),
  ],

  modulos: [
    md(`## O que você vai conseguir

Partir o código em dois arquivos e importar uma função — cada arquivo uma responsabilidade.`),
    md(`## Um arquivo, um trabalho

\`export\` oferece um nome. \`import\` pega. No HTML, o script precisa de \`type="module"\`.

Abrir \`file://\` às vezes bloqueia módulos. Sirva com um servidor simples (Live Preview, \`npx serve\`).`),
    conce(
      'módulo',
      'Arquivo que exporta nomes (export) e importa o que precisa (import). type="module" no script é obrigatório no navegador sem bundler.',
    ),
    img(
      '/images/estruturaProjeto.jpg',
      'Pastas e arquivos de um projeto pequeno',
      { credito: 'material do projeto', legenda: 'Um arquivo calcula, outro fala com a página. Cada um uma responsabilidade.' },
    ),
    md(`## Exemplo mínimo desta aula`),
    code(`// somar.js
export function somar(a, b) {
  return a + b
}

// main.js
import { somar } from './somar.js'
console.log(somar(2, 3))

// no HTML:
// <script type="module" src="main.js"></script>`),
    tente(
      'Pasta com main.js e somar.js. Abra o HTML (type=module). Console deve mostrar 5. Se der erro de CORS ou module, você abriu como arquivo cru — use um servidor local.',
    ),
    ex('Cite uma razão para não deixar 400 linhas num único main.js.'),
    proxima(
      'Na próxima aula um app único: tarefas, filtro, e a lista lembra depois que a página recarrega.',
    ),
  ],

  'projeto-lista-de-tarefas': [
    md(`## O que vai existir na tela no final

Um campo, um botão Adicionar, uma lista. Dá para marcar feita, filtrar pendentes, recarregar a página e as tarefas continuarem lá.`),
    md(`## O que desta trilha entra

map/filter para desenhar e filtrar. JSON para salvar. Formulário sem recarregar. Dois arquivos se quiser organizar. \`localStorage\` é a gaveta do navegador.`),
    md(`## Esqueleto mínimo`),
    code(`const chave = 'techlearn-tarefas'
function ler() {
  const t = localStorage.getItem(chave)
  return t ? JSON.parse(t) : []
}
function salvar(lista) {
  localStorage.setItem(chave, JSON.stringify(lista))
}`),
    conce(
      'localStorage',
      'Gaveta de texto no navegador, por site. Só cabe string — por isso JSON.stringify. Não é banco seguro: o usuário pode limpar.',
    ),
    tente(
      'Abra o zip da lista de tarefas. Input + Adicionar. Lista em ul. Clique marca feita. Recarregue: tem que lembrar (localStorage). Filtro para “só pendentes”.',
    ),
    ex(
      'Checklist de pronto: inclui, marca feita, filtra, recarrega e a lista volta, limpar dados do site nasce vazio sem erro. Se os cinco estiverem lá, o projeto está feito.',
    ),
  ],
}
