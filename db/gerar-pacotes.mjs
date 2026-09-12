import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const raiz = join(dirname(fileURLToPath(import.meta.url)), '../public/files/aulas')

function gravar(trilha, slug, arquivos) {
  const pasta = join(raiz, trilha, slug)
  mkdirSync(pasta, { recursive: true })
  for (const [nome, texto] of Object.entries(arquivos)) {
    writeFileSync(join(pasta, nome), texto.trimStart())
  }
}

function htmlDoc({ titulo, corpo, css, js, modulo = false }) {
  const linkCss = css ? `    <link rel="stylesheet" href="${css}" />\n` : ''
  const script = js
    ? modulo
      ? `    <script type="module" src="${js}"></script>\n`
      : `    <script src="${js}"></script>\n`
    : ''
  return `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${titulo} — TechLearn</title>
${linkCss}  </head>
  <body>
${corpo}
${script}  </body>
</html>
`
}

function htmlConsole(titulo) {
  return htmlDoc({
    titulo,
    corpo: `    <!-- Abra no Chrome. Aperte F12, aba Console. O script.js já rodou. -->
    <p>Abra o Console (F12). O código desta aula está em <code>script.js</code>.</p>`,
    js: 'script.js',
  })
}

const htmlCss = {
  'o-que-e-uma-pagina': {
    'pagina.html': `<!--
  Como abrir: salve, dê dois cliques (ou arraste para o Chrome).
  O que mudar: o texto entre <p> e </p>. Salve e aperte F5.
-->
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Minha primeira página</title>
  </head>
  <body>
    <p>Olá. Isto é uma página.</p>
  </body>
</html>
`,
  },
  esqueleto: {
    'esqueleto.html': `<!--
  Como abrir: Chrome. Olhe a aba — o título vem do <title>.
  O que mudar: o <title> e o parágrafo. charset e viewport ficam.
-->
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Esqueleto</title>
  </head>
  <body>
    <p>O esqueleto está no lugar.</p>
  </body>
</html>
`,
  },
  'texto-e-titulos': {
    'texto.html': `<!--
  Como abrir: Chrome.
  O que mudar: o h2 e um parágrafo. Deixe um único h1.
-->
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Texto e títulos</title>
  </head>
  <body>
    <h1>Bolo de fubá</h1>
    <p>Receita curta para um lanche.</p>
    <h2>Ingredientes</h2>
    <p>Fubá, ovos, leite e um pouco de <strong>paciência</strong>.</p>
    <p>O cheiro <em>importa</em> mais que o relógio.</p>
  </body>
</html>
`,
  },
  'links-imagens-listas': {
    'links.html': `<!--
  Como abrir: Chrome. Ctrl+clique no link abre outra aba.
  O que mudar: o href, um item da lista, o alt da imagem.
-->
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Links, imagens e listas</title>
  </head>
  <body>
    <h1>Peças do dia a dia</h1>
    <p><a href="https://developer.mozilla.org/pt-BR/">Documentação na MDN</a></p>
    <p>
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='120'%3E%3Crect fill='%231F6A4A' width='240' height='120'/%3E%3Ctext x='120' y='68' fill='white' text-anchor='middle' font-size='18'%3Ecaderno%3C/text%3E%3C/svg%3E"
        alt="Desenho simples de um caderno verde"
      />
    </p>
    <h2>Lista com marcador</h2>
    <ul>
      <li>Farinha</li>
      <li>Ovo</li>
    </ul>
    <h2>Lista numerada</h2>
    <ol>
      <li>Misturar</li>
      <li>Assar</li>
    </ol>
  </body>
</html>
`,
  },
  'nomear-pecas': {
    'nomes.html': `<!--
  Como abrir: Chrome. No F12, aba Elements, procure id="titulo".
  O que mudar: um id único e uma class repetida em dois blocos.
-->
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Nomear peças</title>
  </head>
  <body>
    <h1 id="titulo">Minha página</h1>
    <div class="card">
      <p class="destaque">Um recado.</p>
    </div>
    <div class="card">
      <p>Outro recado, mesma classe.</p>
    </div>
  </body>
</html>
`,
  },
  'botao-e-formulario': {
    'formulario.html': `<!--
  Como abrir: Chrome. Clique na palavra Nome — o cursor vai para o campo.
  Enviar recarrega a página (padrão do HTML). O botão type="button" não envia.
-->
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Botão e formulário</title>
  </head>
  <body>
    <h1>Um formulário simples</h1>
    <form>
      <p>
        <label for="nome">Nome</label>
        <input id="nome" type="text" name="nome" />
      </p>
      <p>
        <label>
          <input type="checkbox" name="aceito" />
          Li o recado
        </label>
      </p>
      <p>
        <button type="submit">Enviar</button>
        <button type="button">Só um botão</button>
      </p>
    </form>
  </body>
</html>
`,
  },
  'css-ligar-e-vestir': {
    'index.html': htmlDoc({
      titulo: 'CSS: ligar e vestir',
      css: 'estilos.css',
      corpo: `    <!-- Extraia o zip na mesma pasta. Abra index.html. O CSS está em estilos.css. -->
    <h1 id="titulo">Título vestido pelo CSS</h1>
    <p class="card">Este parágrafo usa a classe card.</p>
    <p id="aviso">Este parágrafo usa o id aviso.</p>`,
    }),
    'estilos.css': `/* Como abrir: junto com o index.html, na mesma pasta.
   O que mudar: as cores. Recarregue o HTML (F5). */

/* Todas as tags h1 desta página. */
h1 {
  color: #1f6a4a;
  font-size: 2rem;
  font-family: Georgia, serif;
}

/* Quem tem class="card". O ponto é a classe. */
.card {
  color: #241c15;
  font-size: 1.125rem;
}

/* O id aviso. A cerquilha é o id. */
#aviso {
  color: #c24e1d;
}
`,
  },
  'caixa-e-lado-a-lado': {
    'index.html': htmlDoc({
      titulo: 'Caixa e lado a lado',
      css: 'estilos.css',
      corpo: `    <!-- Três botões em fila: o pai .botoes tem display:flex. -->
    <h1>Três botões</h1>
    <p>Estes três ficam lado a lado. O joguinho de JavaScript usa o mesmo desenho.</p>
    <div class="botoes">
      <button type="button">Pedra</button>
      <button type="button">Papel</button>
      <button type="button">Tesoura</button>
    </div>`,
    }),
    'estilos.css': `/* padding = dentro da borda. margin = fora. gap = espaço entre filhos do flex. */

body {
  font-family: Georgia, serif;
  color: #241c15;
}

.botoes {
  display: flex;
  gap: 0.75rem;
}

button {
  padding: 0.6rem 1rem;
  border: 2px solid #1f6a4a;
  background: #e7f0ea;
  margin: 0;
}
`,
  },
  'projeto-pagina-sua': {
    'index.html': htmlDoc({
      titulo: 'Uma página sua',
      css: 'estilos.css',
      corpo: `    <!-- Troque os textos. A imagem de exemplo é um desenho embutido; você pode apontar src para uma foto na pasta. -->
    <h1 id="titulo">Sobre mim</h1>
    <p>Um parágrafo verdadeiro, não um lorem.</p>
    <p>
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='160'%3E%3Crect fill='%23C24E1D' width='320' height='160'/%3E%3Ctext x='160' y='90' fill='white' text-anchor='middle' font-size='20'%3Efoto%3C/text%3E%3C/svg%3E"
        alt="Retângulo de exemplo no lugar de uma foto"
      />
    </p>
    <h2>O que eu já sei fazer</h2>
    <ul>
      <li>Uma coisa que você sabe fazer</li>
      <li>Outra</li>
    </ul>
    <p>
      <button type="button">Oi</button>
    </p>`,
    }),
    'estilos.css': `/* Vista desta página. Mude cor e espaço até ficar com a sua cara. */

body {
  font-family: Georgia, serif;
  color: #241c15;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 0 1rem;
}

h1 {
  color: #1f6a4a;
}

button {
  padding: 0.6rem 1rem;
  border: 2px solid #1f6a4a;
  background: #e7f0ea;
}

img {
  max-width: 100%;
}
`,
  },
}

const jsConsole = {
  'o-que-e-javascript': {
    titulo: 'O que é JavaScript',
    js: `// Abra no Chrome + F12 (Console). Esta linha pede para o navegador escrever.
// O que mudar: o texto entre aspas.

console.log('Olá')
`,
  },
  'console-e-devtools': {
    titulo: 'Console e DevTools',
    js: `// Cada console.log é um passo visível. console.error pinta de vermelho de propósito.
// Digite no Console um nome que não existe (banana) e leia ReferenceError.

console.log('passo 1')
console.log(2 + 2)
console.error('isso é só um teste de erro')
`,
  },
  variaveis: {
    titulo: 'Variáveis',
    js: `// let = gaveta que pode trocar o conteúdo.
// const = gaveta que não troca o que está dentro.
// Tente pais = 'Outro' e leia o erro: você prometeu não trocar.

let idade = 18
const pais = 'Brasil'
idade = 19
console.log(idade)
console.log(pais)
`,
  },
  'tipos-de-dados': {
    titulo: 'Tipos de dados',
    js: `// typeof pergunta a espécie do valor.
// 10 é number. '10' é string. Não são a mesma coisa.

console.log(typeof 10)
console.log(typeof '10')
console.log(typeof true)
console.log(typeof undefined)

const vazioDeProposito = null
console.log(vazioDeProposito)
`,
  },
  operadores: {
    titulo: 'Operadores',
    js: `// === compara valor e tipo. == tenta converter e engana.
// 10 === '10' é false. 10 == '10' é true — por isso evitamos ==.

console.log(10 + 5)
console.log('Tech' + 'Learn')
console.log(10 === 10)
console.log(10 === '10')
console.log(10 == '10')
console.log(7 > 3 && 7 < 10)
`,
  },
  'if-else': {
    titulo: 'if e else',
    js: `// Troque hora para 9 (Bom dia) e 20 (Boa noite).
// A condição dentro do if vira verdadeiro ou falso.

const hora = 14
if (hora < 12) {
  console.log('Bom dia')
} else if (hora < 18) {
  console.log('Boa tarde')
} else {
  console.log('Boa noite')
}
`,
  },
  loops: {
    titulo: 'Loops',
    js: `// for: começa em 0, enquanto i < 5, soma 1.
// while: repete enquanto a condição for verdadeira. Sempre mude a variável, senão trava.

for (let i = 0; i < 5; i = i + 1) {
  console.log('volta', i)
}

let n = 3
while (n > 0) {
  console.log(n)
  n = n - 1
}
`,
  },
  funcoes: {
    titulo: 'Funções',
    js: `// return devolve o valor e para a função.
// console.log só mostra. São trabalhos diferentes.

function somar(a, b) {
  return a + b
}

const total = somar(2, 3)
console.log(total)

function cumprimentar(nome) {
  console.log('Olá, ' + nome)
}
cumprimentar('Ana')
`,
  },
  arrays: {
    titulo: 'Arrays',
    js: `// Índice começa em 0. frutas[1] é o segundo item.
// push coloca no fim. length é quantos itens existem agora.

const frutas = ['açaí', 'manga', 'caju']
console.log(frutas[0])
console.log(frutas.length)
frutas.push('goiaba')
for (let i = 0; i < frutas.length; i = i + 1) {
  console.log(frutas[i])
}
`,
  },
  objetos: {
    titulo: 'Objetos',
    js: `// Ficha com chaves, não fila 0, 1, 2.
// Ponto (aluno.nome) é o jeito mais comum.

const aluno = {
  nome: 'Lia',
  cidade: 'Recife',
  idade: 19,
}
console.log(aluno.nome)
console.log(aluno['cidade'])
aluno.idade = 20
console.log(aluno.idade)
`,
  },
  'arrays-map-filter': {
    titulo: 'map e filter',
    js: `// map: outra lista, mesmo tamanho, item transformado.
// filter: só quem passa no teste. Os dois não mudam a lista original.

const notas = [5, 7, 9, 4]
const comUm = notas.map(function (n) {
  return n + 1
})
const passou = notas.filter(function (n) {
  return n >= 6
})
console.log(comUm)
console.log(passou)
`,
  },
  'funcoes-es6': {
    titulo: 'Funções do dia a dia',
    js: `// Arrow é forma curta. Crase encaixa valor com \${ }.

const dobro = (n) => n * 2
const nome = 'Lia'
console.log(dobro(7))
console.log(\`Olá, \${nome}\`)
`,
  },
  'escopo-e-closure': {
    titulo: 'Escopo e closure',
    js: `// A função interna “lembra” o que estava à volta quando foi criada.
// Cada chamada de criarContador() tem o próprio let n.

function criarContador() {
  let n = 0
  return function () {
    n = n + 1
    return n
  }
}

const a = criarContador()
console.log(a())
console.log(a())
`,
  },
  json: {
    titulo: 'JSON',
    js: `// Objeto JS não viaja na rede. JSON é o texto combinado.
// stringify vai. parse volta.

const aula = { titulo: 'JSON', minutos: 20 }
const texto = JSON.stringify(aula)
console.log(texto)
console.log(JSON.parse(texto).titulo)
`,
  },
  promises: {
    titulo: 'Promises',
    js: `// Promise: um valor que ainda não chegou. then = quando chegar. catch = se falhar.

const espera = new Promise(function (resolve) {
  setTimeout(function () {
    resolve('pronto')
  }, 500)
})

espera.then(function (valor) {
  console.log(valor)
})
console.log('isso sai antes')
`,
  },
  'async-await': {
    titulo: 'async/await',
    js: `// async function + await: espera sem virar escada de then.
// Só funciona dentro de função async.

function esperar(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms)
  })
}

async function run() {
  console.log('antes')
  await esperar(300)
  console.log('depois')
}

run()
`,
  },
  fetch: {
    titulo: 'fetch',
    js: `// fetch chama uma URL. A resposta ainda não é o JSON: chame .json().
// Troque o CEP (8 dígitos) pelo da sua rua.

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
`,
  },
  this: {
    titulo: 'this',
    js: `// this no método aponta para o objeto à esquerda do ponto.
// Arrow não ganha this próprio — por isso o método aqui é function.

const conta = {
  saldo: 10,
  mostrar: function () {
    console.log(this.saldo)
  },
}
conta.mostrar()
`,
  },
  classes: {
    titulo: 'Classes',
    js: `// class é um molde. constructor roda na hora do new.
// this.saldo é o saldo desta conta, não de todas.

class Conta {
  constructor(saldo) {
    this.saldo = saldo
  }
  depositar(n) {
    this.saldo = this.saldo + n
  }
}

const c = new Conta(10)
c.depositar(5)
console.log(c.saldo)
`,
  },
  prototipo: {
    titulo: 'Protótipo',
    js: `// Se o objeto não tem a chave, o JS olha no protótipo.
// Object.create(pai) faz um objeto que “herda” do pai.

const pai = { tipo: 'conta' }
const filha = Object.create(pai)
filha.saldo = 3
console.log(filha.saldo)
console.log(filha.tipo)
`,
  },
  'event-loop': {
    titulo: 'Event loop',
    js: `// setTimeout 0 não é “agora”: entra na fila. O log B espera o A terminar.

console.log('A')
setTimeout(function () {
  console.log('C')
}, 0)
console.log('B')
`,
  },
  erros: {
    titulo: 'Erros',
    js: `// try/catch segura o erro. A página continua. Evite alert na cara do aluno.

function lerJson(texto) {
  try {
    return JSON.parse(texto)
  } catch (e) {
    console.log('JSON inválido')
    return null
  }
}

console.log(lerJson('{"ok":true}'))
console.log(lerJson('ops'))
`,
  },
  bundler: {
    titulo: 'Bundler',
    js: `// Analogia, não configuração.
// Vários arquivos seus viram o que o Chrome baixa. Você não abre cada .vue no navegador.

console.log('Isto rodou num arquivo só.')
console.log('Num app grande, o bundler junta vários arquivos como este.')
`,
  },
}

for (const [slug, arquivos] of Object.entries(htmlCss)) {
  gravar('html-css', slug, arquivos)
}

for (const [slug, { titulo, js }] of Object.entries(jsConsole)) {
  gravar('javascript', slug, {
    'index.html': htmlConsole(titulo),
    'script.js': js,
  })
}

gravar('javascript', 'dom', {
  'index.html': htmlDoc({
    titulo: 'DOM',
    corpo: `    <!-- ids que o script.js procura. Se mudar o id aqui, mude no JS. -->
    <h1 id="titulo">Olá</h1>
    <p id="msg">oi</p>`,
    js: 'script.js',
  }),
  'script.js': `// querySelector('#titulo') = “cadê o id titulo?”.
// textContent troca o texto. style.color troca a cor.

const titulo = document.querySelector('#titulo')
titulo.textContent = 'Aula de DOM'
titulo.style.color = '#1F6A4A'

const msg = document.querySelector('#msg')
msg.textContent = 'funcionou'
`,
})

gravar('javascript', 'eventos', {
  'index.html': htmlDoc({
    titulo: 'Eventos',
    corpo: `    <button type="button" id="btn">Clique</button>
    <p id="saida">Cliques: 0</p>`,
    js: 'script.js',
  }),
  'script.js': `// addEventListener fica de ouvido. Cada clique soma 1 e mostra o total.

const botao = document.querySelector('#btn')
const saida = document.querySelector('#saida')
let cliques = 0

botao.addEventListener('click', function () {
  cliques = cliques + 1
  saida.textContent = 'Cliques: ' + cliques
})
`,
})

gravar('javascript', 'projeto-pedra-papel-tesoura', {
  'index.html': htmlDoc({
    titulo: 'Pedra, papel e tesoura',
    css: 'estilos.css',
    corpo: `    <h1>Pedra, papel e tesoura</h1>
    <p id="placar">Você 0 × 0 Computador</p>
    <p id="rodada">Clique para jogar.</p>
    <div class="botoes">
      <button type="button" data-jogada="pedra">Pedra</button>
      <button type="button" data-jogada="papel">Papel</button>
      <button type="button" data-jogada="tesoura">Tesoura</button>
    </div>`,
    js: 'script.js',
  }),
  'estilos.css': `.botoes { display: flex; gap: 0.75rem; }
button { padding: 0.6rem 1rem; }
`,
  'script.js': `// Três botões. O computador sorteia. if decide quem ganhou. textContent atualiza o placar.

function jogadaComputador() {
  const n = Math.random()
  if (n < 0.33) return 'pedra'
  if (n < 0.66) return 'papel'
  return 'tesoura'
}

function resultado(jogador, pc) {
  if (jogador === pc) return 'empate'
  if (
    (jogador === 'pedra' && pc === 'tesoura') ||
    (jogador === 'papel' && pc === 'pedra') ||
    (jogador === 'tesoura' && pc === 'papel')
  ) {
    return 'você'
  }
  return 'computador'
}

let pontosVoce = 0
let pontosPc = 0
const placar = document.querySelector('#placar')
const rodada = document.querySelector('#rodada')

document.querySelectorAll('[data-jogada]').forEach(function (botao) {
  botao.addEventListener('click', function () {
    const voce = botao.getAttribute('data-jogada')
    const pc = jogadaComputador()
    const r = resultado(voce, pc)
    if (r === 'você') pontosVoce = pontosVoce + 1
    if (r === 'computador') pontosPc = pontosPc + 1
    placar.textContent = 'Você ' + pontosVoce + ' × ' + pontosPc + ' Computador'
    rodada.textContent = 'Você: ' + voce + '. PC: ' + pc + '. ' + r
  })
})
`,
})

gravar('javascript', 'formularios', {
  'index.html': htmlDoc({
    titulo: 'Formulários',
    corpo: `    <form id="form">
      <label for="cep">CEP</label>
      <input id="cep" type="text" />
      <button type="submit">Enviar</button>
    </form>
    <p id="saida"></p>`,
    js: 'script.js',
  }),
  'script.js': `// preventDefault cancela o recarregar. trim tira espaços nas pontas.

const form = document.querySelector('#form')
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
})
`,
})

gravar('javascript', 'modulos', {
  'index.html': htmlDoc({
    titulo: 'Módulos',
    corpo: `    <p>Abra pelo servidor local se o módulo bloquear em file://. O Console mostra 5.</p>`,
    js: 'main.js',
    modulo: true,
  }),
  'somar.js': `// Este arquivo oferece a função. O outro importa.

export function somar(a, b) {
  return a + b
}
`,
  'main.js': `// type="module" no HTML é obrigatório. Um arquivo calcula, o outro fala com a página.

import { somar } from './somar.js'
console.log(somar(2, 3))
`,
})

gravar('javascript', 'projeto-lista-de-tarefas', {
  'index.html': htmlDoc({
    titulo: 'Lista de tarefas',
    corpo: `    <form id="form">
      <label for="campo">Nova tarefa</label>
      <input id="campo" type="text" />
      <button type="submit">Incluir</button>
    </form>
    <ul id="lista"></ul>`,
    js: 'script.js',
  }),
  'script.js': `// Inclui, marca feita no clique, lembra no localStorage. Sem innerHTML com texto cru: textContent.

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
`,
})

gravar('javascript', 'seguranca-front', {
  'index.html': htmlDoc({
    titulo: 'Segurança no front',
    corpo: `    <p>O texto perigoso tem que aparecer como texto, não como imagem/alerta.</p>
    <p id="nome"></p>`,
    js: 'script.js',
  }),
  'script.js': `// textContent trata o texto como texto. innerHTML com dado de fora abre XSS.

const nome = '<img src=x onerror=alert(1)>'
const p = document.querySelector('#nome')
p.textContent = nome
// p.innerHTML = nome  // não faça isso com dado de fora
`,
})

gravar('javascript', 'projeto-consulta-publica', {
  'index.html': htmlDoc({
    titulo: 'Consulta pública',
    corpo: `    <form id="form">
      <label for="cep">CEP (8 dígitos)</label>
      <input id="cep" type="text" inputmode="numeric" />
      <button type="submit">Buscar</button>
    </form>
    <p id="saida"></p>`,
    js: 'script.js',
  }),
  'script.js': `// Loading, cidade, CEP inexistente, falha de rede. textContent, nunca innerHTML com a resposta.

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
  const cep = campo.value.replace(/\\D/g, '')
  if (cep.length !== 8) {
    saida.textContent = 'CEP precisa de 8 números.'
    return
  }
  mostrarCep(cep, saida)
})
`,
})

console.log('pacotes gravados em public/files/aulas')
