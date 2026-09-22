import { md, conce, code, img, tente, ex, proxima } from './helpers.mjs'

export const intermediario = {
  'arrays-map-filter': [
    md(`No [básico](/aprender/javascript/arrays) você percorreu uma lista com \`for\`. Funciona. Fica comprido.

Três métodos devolvem (ou visitam) a lista sem você escrever o índice na mão. Os dois primeiros **não mudam** a lista original: entregam outra.

Bancada desta aula: **Console** (F12). O zip, se quiser, já roda o mesmo código.`),
    md(`**\`map\`** — mesma quantidade de itens, cada um transformado. Lista de preços em real → lista em centavos. Lista de nomes → lista em maiúsculo.

**\`filter\`** — fica só quem passa no teste. Produtos abaixo de 50. Notas que passaram.

**\`find\`** — o **primeiro** que passa no teste (um item, não uma lista). Se ninguém passar, \`undefined\`.

**\`forEach\`** só visita. Não devolve lista nova. Se você precisa do resultado, use map ou filter.`),
    conce(
      'map / filter / find',
      'map: lista nova, mesmo tamanho, item transformado. filter: lista nova, só quem passa. find: o primeiro que passa (ou undefined). Nenhum dos três altera a lista original.',
    ),
    code(`const notas = [5, 7, 9, 4]
const comUm = notas.map(function (n) {
  return n + 1
})
const passou = notas.filter(function (n) {
  return n >= 6
})
const primeira = notas.find(function (n) {
  return n >= 6
})
console.log(comUm)
console.log(passou)
console.log(primeira)
console.log(notas)`),
    md(`\`map\` e \`filter\` devolvem **outra** lista. \`notas\` continua \`[5, 7, 9, 4]\`. Isso importa: você não perde o original.

O teste do filter/find é uma função que devolve verdadeiro ou falso. \`n % 2 === 0\` é “é par”.`),
    tente(
      'No Console (F12): const nomes = [\'ana\', \'bia\']. Use map para deixar tudo maiúsculo (n.toUpperCase()). console.log do resultado. Depois filter para ficar só com nomes com mais de 3 letras.',
    ),
    ex(
      'Qual método você usa para ficar só com os números pares de [1, 2, 3, 4]?',
      '`filter`. Ele devolve uma lista nova só com quem passa no teste. `const pares = [1, 2, 3, 4].filter(function (n) { return n % 2 === 0 })` → `[2, 4]`. `map` transformaria cada item (continuaria com 4 números). `find` pegaria só o primeiro par (`2`).',
    ),
    proxima(
      'Na próxima, o código moderno fica mais curto: arrow, crase no texto, e desmontar objeto em variáveis.',
      '/aprender/javascript/funcoes-es6',
      'Funções do dia a dia',
    ),
  ],

  'funcoes-es6': [
    md(`O JavaScript de hoje escreve a mesma função de um jeito mais curto. Não é outra linguagem. É letra menor para o que você já fez no [básico](/aprender/javascript/funcoes).

Bancada: **Console**.`),
    md(`**Arrow** \`() =>\` é forma curta de função. Se o corpo é uma expressão só, o \`return\` vem implícito: \`(n) => n * 2\` é o dobro.

**Template string** — texto entre crases. Dentro, \`\${nome}\` encaixa o valor no meio da frase. Mais legível que vários \`+\`.

**Desestruturar** — \`const { cidade } = aluno\` tira a chave \`cidade\` para uma variável. É o mesmo que \`const cidade = aluno.cidade\`.

**Spread** \`[...lista]\` — os três pontinhos **espalham** os itens. Num array novo, isso **copia** os valores.`),
    conce(
      'arrow function',
      'Forma curta de função. Se só há uma expressão, o return é implícito. Cuidado: o this dela é diferente — isso fica para o avançado.',
    ),
    conce(
      'template string',
      'Texto entre crases. ${} encaixa valor no meio da frase.',
    ),
    md(`Por que a cópia importa. Duas variáveis podem apontar para **a mesma** lista:

\`const a = [1, 2]\` e \`const b = a\`. Se você faz \`b[0] = 9\`, \`a[0]\` também vira 9: é o mesmo array com dois nomes.

\`const c = [...a]\` cria **outra** lista, com os mesmos números. \`c[0] = 9\` não mexe em \`a\`. Os três pontinhos copiam os itens para um array novo; não apontam para o antigo.`),
    code(`const dobro = (n) => n * 2
const nome = 'Lia'
const frase = \`Olá, \${nome}. O dobro de 4 é \${dobro(4)}.\`
console.log(frase)

const aluno = { nome: 'Lia', cidade: 'Recife' }
const { cidade } = aluno
const original = [1, 2]
const copia = [...original]
copia[0] = 9
console.log(cidade, original, copia)`),
    tente(
      'No Console: reescreva function soma(a, b) { return a + b } como arrow. Teste soma(1, 2). Depois: const a = [1, 2]; const b = [...a]; b.push(3); console.log(a, b) — a tem que continuar com 2 itens.',
    ),
    ex(
      'O que [...lista] faz — e por que o array original não muda se você alterar a cópia?',
      '`[...lista]` cria um **array novo** com os mesmos itens. É cópia, não o mesmo objeto. Por isso `copia[0] = 9` não altera `lista`. Se você fizer `const b = lista` (sem os pontinhos), `b` e `lista` são a **mesma** gaveta: mudar um muda o outro.',
    ),
    proxima(
      'Na próxima, você explica por que uma variável de dentro da função não existe fora — e por que um contador “lembra”.',
      '/aprender/javascript/escopo-e-closure',
      'Onde a variável vale — escopo e closure',
    ),
  ],

  'escopo-e-closure': [
    md(`**Escopo** é onde o nome vale. \`let\` e \`const\` dentro de \`{ }\` não vazam para fora. Isso evita bagunça: a variável da função não atropela a da página.

**Closure** é o passo seguinte. A função de *dentro* continua enxergando a variável da função de *fora*, mesmo depois da de fora ter acabado. Por isso um contador “lembra”.

Bancada: **Console**.`),
    conce(
      'escopo',
      'Onde o nome vale. let dentro de { } não vaza para fora.',
    ),
    conce(
      'closure',
      'A função de dentro continua enxergando a variável de fora mesmo depois da função de fora ter acabado.',
    ),
    code(`function criarContador() {
  let n = 0
  return function () {
    n = n + 1
    return n
  }
}
const a = criarContador()
const b = criarContador()
console.log(a())
console.log(a())
console.log(b())`),
    md(`Cada chamada de \`criarContador()\` abre **a própria gaveta** \`n\`. Por isso \`a\` e \`b\` não brigam: o segundo \`a()\` dá 2; o primeiro \`b()\` dá 1.

Se \`n\` vivesse **fora** da função (um \`let n = 0\` no topo), só existiria **uma** gaveta. Aí \`a\` e \`b\` somariam no mesmo número — brigariam.`),
    tente(
      'Cole criarContador no Console. Crie const a = criarContador(); const b = criarContador(). Some no a duas vezes e no b uma: 2 e 1. Eles não compartilham o n.',
    ),
    ex(
      'Por que a e b não compartilham o mesmo n?',
      'Porque `n` foi criado **dentro** de `criarContador`. Cada chamada da função abre uma gaveta nova. `a` tem a dela; `b` tem a dela. Closure faz cada função interna lembrar da sua. Se `n` vivesse fora, só existiria uma gaveta — aí os dois brigariam.',
    ),
    proxima(
      'Na próxima, o objeto vira texto para viajar na internet — e o texto vira objeto de novo.',
      '/aprender/javascript/json',
      'JSON — o formato das APIs',
    ),
  ],

  json: [
    md(`JavaScript tem objeto. A internet manda **texto**. Os dois não são a mesma coisa.

**JSON** é o combinado: texto com cara de objeto, chaves entre aspas. Quase toda API pública fala JSON: CEP, lista de produtos, configuração salva no navegador.

\`JSON.stringify\` vai (objeto → texto). \`JSON.parse\` volta (texto → objeto). Texto inválido quebra o parse — o Console fica vermelho.

Bancada: **Console**.`),
    conce(
      'JSON',
      'Texto com cara de objeto. É o que viaja na internet. stringify vai, parse volta.',
    ),
    code(`const aula = { titulo: 'JSON', minutos: 20 }
const texto = JSON.stringify(aula)
console.log(texto)
const deNovo = JSON.parse(texto)
console.log(deNovo.titulo)`),
    md(`O objeto “cru” (com funções, com \`undefined\`) não atravessa a rede. O outro programa do outro lado talvez nem seja JavaScript. Texto JSON é o recado que os dois combinaram.

Na aula de [erros](/aprender/javascript/erros) você envolve o parse num \`try\` para a página não cair.`),
    tente(
      'No Console: JSON.parse(\'{"ok": true}\') e leia .ok. Depois JSON.parse(\'nao e json\') e leia o erro vermelho.',
    ),
    ex(
      'Por que não mandamos o objeto JavaScript “cru” para outro programa?',
      'Objeto é coisa do JavaScript, na memória desta página. A rede e o outro programa falam **texto**. JSON é o texto combinado (chaves entre aspas). `stringify` empacota; `parse` desembala. Sem isso, o outro lado não entende.',
    ),
    proxima(
      'Na próxima, o JavaScript espera sem travar a página: uma promessa de valor futuro.',
      '/aprender/javascript/promises',
      'Esperar sem travar — Promises',
    ),
  ],

  promises: [
    md(`Pedir um CEP na internet demora. Se o JavaScript **parasse** a página inteira nesses 5 segundos, o botão não clicaria, o scroll travaria.

Ele **não para**. Agenda o resto. **Promise** é essa promessa de um valor futuro: ou resolve (deu certo) ou rejeita (deu errado).

\`then\` roda no sucesso. \`catch\` no erro. Nesta aula \`setTimeout\` só simula a espera — não é internet ainda. Internet é a aula de [fetch](/aprender/javascript/fetch).

Bancada: **Console**. A página continua clicável enquanto espera. Essa é a graça.`),
    conce(
      'Promise',
      'Objeto que vai se resolver (deu certo) ou rejeitar (deu errado). then no sucesso; catch no erro. A página não trava.',
    ),
    code(`const espera = new Promise(function (resolve) {
  setTimeout(function () {
    resolve('pronto')
  }, 500)
})
espera.then(function (msg) {
  console.log(msg)
}).catch(function (err) {
  console.log('falhou', err)
})
console.log('isso sai antes')`),
    md(`A ordem no Console: primeiro “isso sai antes”, depois “pronto”. O JS não ficou parado 500 ms na linha da Promise: ele registrou o then e seguiu.`),
    tente(
      'No Console, cole o exemplo. Troque 500 por 1000 e veja o log atrasar um segundo. Clique em qualquer lugar da página durante a espera — ela continua viva.',
    ),
    ex(
      'Por que o JavaScript não para a página inteira enquanto espera a internet?',
      'Porque a espera é **assíncrona**. Ele agenda o resto (o `then`) e segue. A página continua clicável. Uma Promise é essa promessa de valor futuro. Se o JS travasse 5 segundos no meio, botão e scroll morreriam até a resposta chegar.',
    ),
    proxima(
      'Na próxima, a mesma espera se escreve como passo a passo, com async e await.',
      '/aprender/javascript/async-await',
      'async/await',
    ),
  ],

  'async-await': [
    md(`\`then\` em escada cansa. \`async\` / \`await\` é a **mesma Promise**, escrita como passo a passo.

\`await\` só funciona dentro de função marcada \`async\`. Pausa **essa função** até a Promise resolver. O resto da página não trava.

Erro: \`try\` / \`catch\`, como um \`if\` para falha — o mesmo par da aula de erros, mais à frente.

Bancada: **Console**.`),
    conce(
      'await',
      'Só funciona dentro de função async. Pausa essa função até a Promise resolver, sem travar o resto da página.',
    ),
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
    md(`Chamar \`run()\` duas vezes seguidas: as duas esperas andam juntas. Cada função async pausa a si mesma; não pausa o Chrome.`),
    tente(
      'No Console, cole a função run e chame run() duas vezes seguidas. As duas esperas andam juntas. Isso é o JS não travando.',
    ),
    ex(
      'Reescreva um .then simples (console.log depois de esperar) em async/await.',
      'A Promise continua a mesma. Muda a letra: `async function run() { await esperar(300); console.log(\'depois da espera\') }` e no fim `run()`. `await` só vale dentro de `async`. Erro vai para o `try/catch`, não para um `.catch` encadeado.',
    ),
    proxima(
      'Na próxima, você busca um CEP na internet e lê o JSON — sem chave de API.',
      '/aprender/javascript/fetch',
      'Buscar dados — fetch',
    ),
  ],

  fetch: [
    md(`\`fetch\` chama uma URL. A resposta **não** é o JSON ainda: chame \`.json()\` (isso também é uma Promise — por isso o \`await\`).

Vamos usar o [ViaCEP](https://viacep.com.br): API pública, sem senha. CEP de 8 dígitos, só números. Exemplo conhecido: \`01001000\` (centro de São Paulo).

Senha de API no arquivo JS que o Chrome baixa é senha pública. Por isso treinamos com API sem chave.

Bancada: **Console**, ou o zip (pasta + Chrome) se quiser ver o script já rodando. Precisa de internet.`),
    conce(
      'fetch',
      'Função do navegador que chama uma URL. A resposta não é o JSON ainda: chame .json().',
    ),
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
      'No Console (ou no arquivo da aula): troque o CEP para o da sua rua (8 dígitos). Veja localidade. Se der erro, o CEP pode ser inválido — o tratamento humano fica no mini-projeto avançado.',
    ),
    ex(
      'Por que não colocamos senha de API no arquivo JS que o navegador baixa?',
      'Porque esse arquivo o Chrome baixa para **qualquer visitante**. Abrir o código (F12 → Sources) mostra a senha. Senha pública não é senha. Por isso esta aula usa ViaCEP, sem chave. Senha de verdade vive no servidor.',
    ),
    proxima(
      'Na próxima, o formulário não recarrega a página: você lê o campo e mostra o resultado na hora.',
      '/aprender/javascript/formularios',
      'Formulários',
    ),
  ],

  formularios: [
    md(`No HTML, enviar um \`form\` **recarrega** a página. Você viu isso na [aula de botão](/aprender/html-css/botao-e-formulario). Aqui o JavaScript cancela isso.

\`evento.preventDefault()\` diz: não faça o padrão. Sem ele, seu JS perde o estado — a página nasce de novo.

\`trim()\` tira espaços nas pontas. Campo que parece preenchido com espaços está vazio de verdade.

Bancada: **pasta + Chrome**. Zip com \`index.html\` + \`script.js\`. [Como abrir](/aprender/comecar/baixar-e-abrir).`),
    conce(
      'preventDefault',
      'Cancela o comportamento padrão. No submit, o padrão é recarregar a página.',
    ),
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
      'Abra o zip no Chrome (index.html + script.js na mesma pasta). Form vazio: aviso. Form com texto: o parágrafo mostra o valor. Teste com espaços na frente — sem trim, passaria; com trim, o campo está vazio.',
    ),
    ex(
      'Por que trim() no value? Teste com espaços na frente.',
      '`trim()` tira espaços no começo e no fim. Um campo com `"   "` parece preenchido e está vazio de verdade. Sem trim, o `if (valor === \'\')` não pega e você manda lixo adiante (CEP inválido, busca vazia).',
    ),
    proxima(
      'Na próxima, o código se parte em dois arquivos: um calcula, o outro fala com a página.',
      '/aprender/javascript/modulos',
      'Organizar o código',
    ),
  ],

  modulos: [
    md(`Um arquivo com 400 linhas mistura cálculo, página e recado. Dói achar o erro.

**Módulo**: um arquivo, um trabalho. \`export\` oferece um nome. \`import\` pega. No HTML, o script precisa de \`type="module"\`.

Abrir como \`file://\` (dois cliques no HTML) às vezes bloqueia módulos. Sirva com um servidor simples (Live Preview no VS Code, ou \`npx serve\`).

Bancada: **pasta + Chrome**, de preferência por um servidor local.`),
    conce(
      'módulo',
      'Arquivo que exporta nomes (export) e importa o que precisa (import). type="module" no script é obrigatório no navegador sem bundler.',
    ),
    img(
      '/images/estruturaProjeto.jpg',
      'Pastas e arquivos de um projeto pequeno',
      { credito: 'material do projeto', legenda: 'Um arquivo calcula, outro fala com a página. Cada um uma responsabilidade.' },
    ),
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
    ex(
      'Cite uma razão para não deixar 400 linhas num único main.js.',
      'Um arquivo, um trabalho. 400 linhas misturam cálculo, página e recado: o erro vermelho aponta uma linha e você não sabe de qual assunto. Com módulos, `somar.js` calcula e `main.js` fala com a página. Achar, testar e reaproveitar fica menor.',
    ),
    proxima(
      'Na próxima, um app único: tarefas, filtro, e a lista lembra depois que a página recarrega.',
      '/aprender/javascript/projeto-lista-de-tarefas',
      'Mini-projeto: lista de tarefas',
    ),
  ],

  'projeto-lista-de-tarefas': [
    md(`No final existe, na tela: um campo, um botão Adicionar, uma lista. Dá para marcar feita, filtrar pendentes, recarregar a página e as tarefas continuarem lá.

O que desta trilha entra: map/filter para desenhar e filtrar. JSON para salvar. Formulário sem recarregar. Dois arquivos se quiser organizar.

\`localStorage\` é a gaveta do navegador, por site. Só cabe **string** — por isso \`JSON.stringify\`. Não é banco seguro: o usuário pode limpar.

Bancada: **pasta + Chrome**. [Como abrir o zip](/aprender/comecar/baixar-e-abrir).`),
    conce(
      'localStorage',
      'Gaveta de texto no navegador, por site. Só cabe string — por isso JSON.stringify. Não é banco seguro: o usuário pode limpar.',
    ),
    code(`const chave = 'techlearn-tarefas'
function ler() {
  const t = localStorage.getItem(chave)
  return t ? JSON.parse(t) : []
}
function salvar(lista) {
  localStorage.setItem(chave, JSON.stringify(lista))
}`),
    md(`O zip já monta o app comentado. Leia o \`script.js\` de cima a baixo. Cada função diz o que faz.`),
    tente(
      'Abra o zip da lista de tarefas. Input + Adicionar. Lista em ul. Clique marca feita. Recarregue: tem que lembrar (localStorage). Filtro para “só pendentes”.',
    ),
    ex(
      'Checklist de pronto: inclui, marca feita, filtra, recarrega e a lista volta, limpar dados do site nasce vazio sem erro. Se os cinco estiverem lá, o projeto está feito.',
      `Os cinco na tela, não de memória:

1. Incluir — form com preventDefault + trim; item vai para a lista.
2. Marcar feita — clique no item risca (e grava).
3. Filtrar — filter nas pendentes, sem um for gigante.
4. Recarregar — localStorage + JSON; a lista volta.
5. Limpar dados do site — nasce \`[]\`, sem erro no parse.

O zip comentado é a cola. Faltou um? Volte na aula da peça (formulário, JSON, map/filter).`,
    ),
    proxima(
      'O intermediário fechou. A próxima é o avançado: this, o ponto, e por que a arrow é diferente.',
      '/aprender/javascript/this',
      'this e objetos com método',
    ),
  ],
}
