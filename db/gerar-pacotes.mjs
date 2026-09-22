import { mkdirSync, writeFileSync, rmSync } from 'node:fs'
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

function htmlDoc({ titulo, corpo, css, js, modulo = false, intro = '' }) {
  const linkCss = css
    ? `    <!-- CSS da mesma pasta. Se a cor não mudar, este href não achou o arquivo. -->
    <link rel="stylesheet" href="${css}" />\n`
    : ''
  const script = js
    ? modulo
      ? `    <!-- type="module" deixa este arquivo importar outros .js -->
    <script type="module" src="${js}"></script>\n`
      : `    <!-- script no fim do body: o HTML já existe quando o JS procura o id. -->
    <script src="${js}"></script>\n`
    : ''
  const recado =
    intro ||
    'Abra este arquivo no Chrome (dois cliques ou arrastar). No VS Code, abra a PASTA da aula, edite, Ctrl+S, volte no Chrome e F5.'
  return `<!--
  ${recado}
-->
<!DOCTYPE html>
<html lang="pt-BR">
  <!-- lang: o texto desta página está em português. -->
  <head>
    <!-- head: aba, acento, celular, CSS. Não é o texto do meio da tela. -->
    <meta charset="utf-8" />
    <!-- charset: acento (você, coração) aparece certo. -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- viewport: no celular a página usa a largura da tela. -->
    <title>${titulo} — TechLearn</title>
${linkCss}  </head>
  <body>
    <!-- body: o que a pessoa vê. -->
${corpo}
${script}  </body>
</html>
`
}

function htmlConsole(titulo) {
  return htmlDoc({
    titulo,
    intro:
      'Abra no Chrome. F12 → aba Console. O script.js já rodou. Você também pode colar o código do script no Console na mão.',
    corpo: `    <p>Abra o Console (F12). O código desta aula está em <code>script.js</code>, nesta mesma pasta.</p>`,
    js: 'script.js',
  })
}

const htmlCss = {
  'o-que-e-uma-pagina': {
    'pagina.html': `<!--
  Aula: O que é uma página. Abra no Chrome. VS Code: abra a PASTA, Ctrl+S, F5.
  Tente: mude o texto entre <p> e </p> e recarregue.
  DOCTYPE, head e body a aula "Esqueleto" explica com calma.
-->
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Minha primeira página</title>
  </head>
  <body>
    <!-- O que aparece na tela: mude só esta frase. -->
    <p>Olá. Isto é uma página.</p>
  </body>
</html>
`,
  },
  'anatomia-da-tag': {
    'tag.html': `<!--
  Aula: Anatomia da tag.
  Tente: troque o conteúdo do primeiro <p>.
  Tente: acrescente um segundo <p>…</p> no body e recarregue.
-->
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Anatomia da tag</title>
  </head>
  <body>
    <!-- par: abertura, conteúdo, fechamento. lang é atributo na abertura. -->
    <p>Um parágrafo.</p>
    <p lang="pt-BR">Outro parágrafo, com atributo na abertura.</p>
  </body>
</html>
`,
  },
  esqueleto: {
    'esqueleto.html': `<!--
  Aula: Esqueleto. A aba vem do <title> (head). O parágrafo vive no body.
  Tente: troque o title — a aba muda. Troque o p — o meio muda.
-->
<!DOCTYPE html>
<html lang="pt-BR">
  <!-- lang na abertura da raiz. -->
  <head>
    <!-- head: o que a pessoa NÃO vê no meio da página. -->
    <meta charset="utf-8" />
    <!-- charset: acento aparece certo. -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- viewport: no celular, largura da tela. -->
    <title>Esqueleto</title>
    <!-- title: texto da ABA, não o título enorme no meio. -->
  </head>
  <body>
    <!-- body: o que aparece na tela. -->
    <p>O esqueleto está no lugar.</p>
  </body>
</html>
`,
  },
  'texto-e-titulos': {
    'texto.html': `<!--
  Aula: Texto e títulos. Um h1 só. strong = importância. em = ênfase no tom.
  Tente: acrescente um h2 "Modo de fazer" e um p seu, ainda no body.
  Tente: troque strong por em e veja que não é a mesma tag.
-->
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Texto e títulos</title>
  </head>
  <body>
    <!-- h1: título da página. um por página. -->
    <h1>Bolo de fubá</h1>
    <p>Receita curta para um lanche.</p>
    <!-- h2: seção, não um segundo título principal. -->
    <h2>Ingredientes</h2>
    <!-- strong: isto é importante. não é a mesma tag que em. -->
    <p>Fubá, ovos, leite e um pouco de <strong>paciência</strong>.</p>
    <!-- em: ênfase no tom, como mudar a voz. -->
    <p>O cheiro <em>importa</em> mais que o relógio.</p>
  </body>
</html>
`,
  },
  'links-imagens-listas': {
    'links.html': `<!--
  Aula: Links, imagens e listas. Ctrl+clique no link abre outra aba.
  Tente: troque o href por um site que você usa.
  Tente: acrescente um <li> e mude o alt para descrever o desenho.
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
  Aula: Nomear peças. F12 → Elements, procure id="titulo".
  Tente: dois blocos com a mesma class. Tente: um id em dois lugares — o JS depois pega só o primeiro.
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
  Aula: Botão e formulário. Clique na palavra Nome — o cursor vai para o campo.
  Tente: Enviar (a página recarrega — é o HTML). Tente: o botão "Só um botão" não envia.
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
    'estilos.css': `/* Aula: CSS ligar e vestir. Junto com o index.html, na mesma pasta.
   Tente: troque a cor do h1, Ctrl+S, F5 no HTML.
   Tente: mude font-size do .card. */

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
    'estilos.css': `/* Aula: caixa. padding = dentro. margin = fora. gap = entre filhos do flex.
   Tente: aumente o gap. Tente: padding maior num botão — o texto respira. */

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
    'estilos.css': `/* Mini-projeto: uma página sua. Mude cor e espaço até ficar com a sua cara.
   Tente: troque a cor do h1 e o padding do botão. */

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
    js: `// Aula: O que é JavaScript. Bancada: Console (F12).
// // no começo da linha é comentário: o Chrome ignora.
// console.log é um MÉTODO: peça.ação(). O ponto liga.
//
// Tente: troque Olá por seu nome.
// Tente: acrescente uma segunda linha console.log('passo 2').

console.log('Olá')
`,
  },
  'console-e-devtools': {
    titulo: 'Console e DevTools',
    js: `// Aula: Console. Bancada: F12 → aba Console.
// Cada log é um passo. console.error pinta de vermelho de propósito.
//
// Tente: some 10 + 32 só digitando no Console.
// Tente: escreva banana (sem aspas) e leia ReferenceError.

console.log('passo 1')
console.log(2 + 2)
console.error('isso é só um teste de erro')
`,
  },
  variaveis: {
    titulo: 'Variáveis',
    js: `// Aula: Variáveis. Bancada: Console.
// let = pode trocar. const = não troca o valor.
//
// Tente: mude idade para 21 e logue de novo.
// Tente: pais = 'Outro' — leia o erro: você prometeu não trocar.

let idade = 18
const pais = 'Brasil'
idade = 19
console.log(idade)
console.log(pais)
`,
  },
  'tipos-de-dados': {
    titulo: 'Tipos de dados',
    js: `// Aula: Tipos. Bancada: Console.
// typeof pergunta a espécie. 'Ana'.length é propriedade. toUpperCase() é método.
//
// Tente: 'Ana'.length e 'Ana'.toUpperCase().
// Tente: 2 * 'a' — o Console mostra NaN (não é um número).

console.log(typeof 10)
console.log(typeof '10')
console.log(typeof true)
console.log('Ana'.length)
console.log('Ana'.toUpperCase())
console.log(2 * 'a')
const vazioDeProposito = null
console.log(vazioDeProposito)
`,
  },
  operadores: {
    titulo: 'Operadores',
    js: `// Aula: Operadores. Bancada: Console.
// === compara valor E tipo. == tenta converter e engana.
//
// Tente: 7 === '7' e 7 == '7'. Qual deu false?
// Tente: uma conta com && que só é verdadeira se os dois lados forem.

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
    js: `// Aula: if e else. Bancada: Console. Cole o bloco INTEIRO.
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
`,
  },
  loops: {
    titulo: 'Loops',
    js: `// Aula: Loops. Bancada: Console.
// for: começa em 0, enquanto i < 5, soma 1. while: sempre mude a variável.
//
// Tente: some 1 a 10 com for (let soma = 0). Tem que dar 55.
// Não rode um while sem n = n - 1 — trava o Chrome.

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
    js: `// Aula: Funções. Bancada: Console.
// Declarar = escrever a receita. Chamar = usar. a, b = parâmetros. 2, 3 = argumentos.
// return devolve. console.log só mostra.
//
// Tente: troque 2 e 3 por outros números.
// Tente: acrescente console.log(somar(10, 1)).
// Tente: apague o return e veja undefined.

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
    js: `// Aula: Arrays. Bancada: Console.
// Índice começa em 0. length = propriedade. push() = método (leva parênteses).
//
// Tente: console.log(frutas[1]) — segundo item, não o primeiro.
// Tente: frutas.push('caju') e logue length de novo.

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
    js: `// Aula: Objetos. Bancada: Console.
// Ficha com chaves (propriedades). Método = função numa chave. Sem this nesta aula.
//
// Tente: mude aluno.idade e logue de novo.
// Tente: chame conta.mostrar(). Depois troque o saldo e chame de novo.

const aluno = {
  nome: 'Lia',
  cidade: 'Recife',
  idade: 19,
}
console.log(aluno.nome)
console.log(aluno['cidade'])
aluno.idade = 20
console.log(aluno.idade)

const conta = {
  saldo: 10,
  mostrar: function () {
    console.log(conta.saldo)
  },
}
conta.mostrar()
`,
  },
  'arrays-map-filter': {
    titulo: 'map e filter',
    js: `// Aula: map, filter, find. Bancada: Console.
// Os três NÃO mudam a lista original.
//
// Tente: filter só os pares (n % 2 === 0).
// Tente: find o primeiro >= 9.

const notas = [5, 7, 9, 4]

// map: outra lista, mesmo tamanho, cada item transformado.
const comUm = notas.map(function (n) {
  return n + 1
})

// filter: só quem passa no teste (aqui: nota >= 6).
const passou = notas.filter(function (n) {
  return n >= 6
})

// find: o PRIMEIRO que passa. Se ninguém passar, undefined.
const primeira = notas.find(function (n) {
  return n >= 6
})

console.log('map', comUm)
console.log('filter', passou)
console.log('find', primeira)
console.log('original intacto', notas)
`,
  },
  'funcoes-es6': {
    titulo: 'Funções do dia a dia',
    js: `// Aula: Funções do dia a dia. Bancada: Console.
// Tente: const b = [...original]; b.push(3); console.log(original, b).
// Tente: reescreva function soma(a, b) { return a + b } como arrow.
//
// Arrow = forma curta. Se o corpo é uma expressão, o return vem implícito.
const dobro = (n) => n * 2
const nome = 'Lia'
// Crase: \${ } encaixa o valor no meio da frase.
console.log(dobro(7))
console.log(\`Olá, \${nome}\`)

// Sem os pontinhos, b e original são A MESMA lista.
const original = [1, 2]
const mesma = original
mesma[0] = 9
console.log('mesma gaveta', original)

// Com [...], copia os itens para um array NOVO.
const copia = [...[1, 2]]
copia[0] = 9
console.log('cópia', copia)
`,
  },
  'escopo-e-closure': {
    titulo: 'Escopo e closure',
    js: `// Aula: Escopo e closure. Bancada: Console.
// Tente: chame a() três vezes e b() uma — 3 e 1, não brigam.
// Tente: imagine n fora da função: aí só existiria UMA gaveta.
//
// n vive DENTRO de criarContador. Cada chamada abre a própria gaveta.
// A função de dentro “lembra” esse n (closure).

function criarContador() {
  let n = 0
  return function () {
    n = n + 1
    return n
  }
}

const a = criarContador()
const b = criarContador()
console.log('a', a()) // 1
console.log('a', a()) // 2
console.log('b', b()) // 1 — não briga com a
`,
  },
  json: {
    titulo: 'JSON',
    js: `// Aula: JSON. Bancada: Console.
// Tente: JSON.parse('{"ok": true}') e leia .ok.
// Tente: JSON.parse('nao e json') e leia o erro vermelho.
//
// Objeto JS não viaja na rede. JSON é o texto combinado.
// stringify vai (objeto → texto). parse volta (texto → objeto).

const aula = { titulo: 'JSON', minutos: 20 }
const texto = JSON.stringify(aula)
console.log('texto que viaja', texto)
console.log('de volta', JSON.parse(texto).titulo)
`,
  },
  promises: {
    titulo: 'Promises',
    js: `// Aula: Promises. Bancada: Console.
// Tente: troque 500 por 1000 e veja o log atrasar.
// Tente: clique na página durante a espera — ela continua viva.
//
// Promise = valor futuro. then = quando chegar. catch = se falhar.
// A página NÃO trava: “isso sai antes” aparece primeiro.

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
    js: `// Aula: async/await. Bancada: Console.
// Tente: chame run() duas vezes seguidas — as esperas andam juntas.
//
// Mesma Promise, letra de passo a passo.
// await só funciona dentro de função async. Pausa ESTA função, não a página.

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
    js: `// Aula: fetch. Bancada: Console (precisa de internet).
// Tente: troque o CEP 01001000 pelo da sua rua (8 dígitos).
// Tente: um CEP inventado e leia o que a API devolve.
//
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
`,
  },
  this: {
    titulo: 'this',
    js: `// Aula: this. Bancada: Console.
// Tente: rode conta.mostrar() e depois solta().
// Tente: const mostra = () => console.log(conta.saldo) e chame mostra().
//
// this = quem chamou com o PONTO. conta.mostrar() → this é conta.
// Arrow não ganha this próprio — por isso o método aqui é function.

const conta = {
  saldo: 10,
  mostrar: function () {
    console.log(this.saldo)
  },
}

conta.mostrar() // 10

const solta = conta.mostrar
solta() // this se perde (undefined / erro)
`,
  },
  classes: {
    titulo: 'Classes',
    js: `// Aula: Classes. Bancada: Console.
// Tente: deposite só em a e logue a.saldo e b.saldo — duas gavetas.
//
// class = molde. constructor roda no new.
// this.saldo é o saldo DESTA conta, não de todas.

class Conta {
  constructor(saldo) {
    this.saldo = saldo
  }
  depositar(n) {
    this.saldo = this.saldo + n
  }
}

const a = new Conta(10)
const b = new Conta(0)
a.depositar(5)
console.log(a.saldo, b.saldo) // 15 e 0 — duas gavetas
`,
  },
  prototipo: {
    titulo: 'Protótipo',
    js: `// Aula: Protótipo. Bancada: Console.
// Tente: mude pai.tipo e leia filha.tipo de novo — não é cópia.
//
// Se o objeto não tem a chave, o JS olha no protótipo (o pai).
// Object.create(pai) liga os dois. Não é cópia.

const pai = { tipo: 'conta' }
const filha = Object.create(pai)
filha.saldo = 3
console.log(filha.saldo) // no próprio objeto
console.log(filha.tipo) // veio do pai
`,
  },
  'event-loop': {
    titulo: 'Event loop',
    js: `// Aula: Event loop. Bancada: Console.
// Tente: rode e anote a ordem. Tem que ser A, C, B — não A, B, C.
//
// Ordem: A, C, B. O setTimeout 0 NÃO fura a pilha.
// B só roda quando o código síncrono (A e C) acaba.

console.log('A')
setTimeout(function () {
  console.log('B')
}, 0)
console.log('C')
`,
  },
  erros: {
    titulo: 'Erros',
    js: `// Aula: Erros. Bancada: Console.
// Tente: lerJson('{"ok":true}') e lerJson('banana').
// Tente: os dois passam pelo finally.
//
// try tenta. catch pega o erro. finally roda sempre.
// A página continua. Evite alert na cara de quem lê.

function lerJson(texto) {
  try {
    return JSON.parse(texto)
  } catch (e) {
    console.log('Não deu para ler esse texto como JSON.')
    return null
  } finally {
    console.log('tentativa de parse acabou')
  }
}

console.log(lerJson('{"ok":true}'))
console.log(lerJson('ops'))
`,
  },
  bundler: {
    titulo: 'Bundler',
    js: `// Aula: Bundler. Analogia, não configuração.
// Tente: olhe o endereço desta plataforma — o Chrome não abre cada .vue.
//
// Analogia, não configuração.
// Várias receitas (arquivos) viram um marmitex (o que o Chrome baixa).
// Ganhos: nome curto, tamanho menor, import que o navegador entende.

console.log('Isto rodou num arquivo só.')
console.log('Num app grande, o bundler junta vários arquivos como este.')
`,
  },
}

rmSync(join(raiz, 'html-css', 'abrir-o-arquivo'), { recursive: true, force: true })

for (const [slug, arquivos] of Object.entries(htmlCss)) {
  gravar('html-css', slug, arquivos)
}

// Zip de treino da aula "Baixar e abrir": duas pastas, sem ensinar a linguagem.
gravar('comecar', 'baixar-e-abrir/html-css', {
  'index.html': htmlDoc({
    titulo: 'Treino HTML e CSS',
    intro:
      'Isto NÃO ensina CSS. Só confere: os dois arquivos na mesma pasta e o HTML abre no Chrome. O título deve aparecer verde.',
    css: 'estilos.css',
    corpo: `    <h1>Os dois arquivos estão juntos</h1>
    <p>Se este título não estiver verde, o estilos.css não está nesta pasta.</p>`,
  }),
  'estilos.css': `/* Só para o treino do zip. Não é aula de CSS.
   Se o h1 não ficar verde, HTML e CSS não estão na mesma pasta. */

h1 {
  color: #1f6a4a;
}
`,
})
gravar('comecar', 'baixar-e-abrir/javascript', {
  'index.html': htmlDoc({
    titulo: 'Treino HTML e JS',
    intro:
      'Isto NÃO ensina JavaScript. Só confere: os dois arquivos na mesma pasta e o HTML abre no Chrome. A frase deve mudar.',
    corpo: `    <p id="frase">Se esta frase não mudar, o script.js não está nesta pasta.</p>`,
    js: 'script.js',
  }),
  'script.js': `// Só para o treino do zip. Não é aula de JavaScript.
// Se a frase não mudar, HTML e JS não estão na mesma pasta.

const frase = document.querySelector('#frase')
frase.textContent = 'Os dois arquivos estão juntos.'
`,
})

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
  'script.js': `// Aula: DOM. Pasta + Chrome. Tente: troque a string do textContent, Ctrl+S, F5.
// Tente: se der null no Console, o id do HTML não bate com o do JS.
//
// Este arquivo está na mesma pasta do index.html.
// A cerquilha (#) é o id. Se mudar o id no HTML, mude aqui também.

// 1) Acha na página a peça com id="titulo".
const titulo = document.querySelector('#titulo')
// 2) Troca o texto que a pessoa lê.
titulo.textContent = 'Aula de DOM'
// 3) (passo extra) Troca a cor. Se o texto já mudou, a ponte HTML↔JS está de pé.
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
  'script.js': `// Aula: Eventos. Pasta + Chrome. Tente: cada clique deve somar 1 no parágrafo.
// Tente: mude o texto do botão no HTML e recarregue — o JS continua no mesmo id.
//
// Pasta: este script.js ao lado do index.html.
// 1) Acha o botão e o parágrafo pelos ids do HTML.
const botao = document.querySelector('#btn')
const saida = document.querySelector('#saida')
// 2) let porque o número de cliques muda.
let cliques = 0

// 3) Quando o evento "click" acontecer neste botão, rode a função.
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
  'estilos.css': `/* Os três botões em fila: o PAI ganha flex. gap = espaço entre eles.
   É a mesma ideia da aula de caixa (HTML e CSS). */

.botoes {
  display: flex;
  gap: 0.75rem;
}

/* padding = espaço DENTRO da borda. O texto do botão respira. */
button {
  padding: 0.6rem 1rem;
}
`,
  'script.js': `// Mini-projeto: pedra, papel e tesoura. Pasta + Chrome. F5 depois de salvar.
// Tente: jogue até empatar — o placar não pode somar.
// Tente: abra o Console (F12) se o placar não subir: o vermelho aponta a linha.
//
// Mini-projeto do básico. Leia de cima a baixo: cada bloco é uma aula que você já fez.

// Sorteia a jogada do computador. Math.random() vai de 0 até quase 1.
function jogadaComputador() {
  const n = Math.random()
  if (n < 0.33) return 'pedra'
  if (n < 0.66) return 'papel'
  return 'tesoura'
}

// if decide o resultado. Empate devolve "empate" — não soma ponto lá embaixo.
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

// let: os pontos mudam a cada rodada.
let pontosVoce = 0
let pontosPc = 0

// ids do HTML. Se mudar o id lá, mude aqui.
const placar = document.querySelector('#placar')
const rodada = document.querySelector('#rodada')

// Cada botão tem data-jogada. Clique → joga, compara, atualiza o texto (sem recarregar).
document.querySelectorAll('[data-jogada]').forEach(function (botao) {
  botao.addEventListener('click', function () {
    const voce = botao.getAttribute('data-jogada')
    const pc = jogadaComputador()
    const r = resultado(voce, pc)
    if (r === 'você') pontosVoce = pontosVoce + 1
    if (r === 'computador') pontosPc = pontosPc + 1
    // textContent troca o que a pessoa lê. Empate não entra nos ifs de ponto.
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
  'script.js': `// Aula: Formulários. Pasta + Chrome.
// Tente: envie vazio (aviso). Tente: espaços na frente — trim trata como vazio.
//
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
`,
})

gravar('javascript', 'modulos', {
  'index.html': htmlDoc({
    titulo: 'Módulos',
    corpo: `    <p>Abra pelo servidor local se o módulo bloquear em file://. O Console mostra 5.</p>`,
    js: 'main.js',
    modulo: true,
  }),
  'somar.js': `// Um arquivo, um trabalho: só calcula. O outro arquivo é quem fala com a página.

export function somar(a, b) {
  return a + b
}
`,
  'main.js': `// Aula: Módulos. Tente: Console deve mostrar 5. Se der CORS, use um servidor local.
//
// type="module" no HTML é obrigatório. Sem isso o import quebra.
// Se der erro de CORS / module, você abriu como file:// — use um servidor local.

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
  'script.js': `// Mini-projeto: lista de tarefas. Pasta + Chrome.
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
`,
})

gravar('javascript', 'seguranca-front', {
  'index.html': htmlDoc({
    titulo: 'Segurança no front',
    corpo: `    <p>O texto perigoso tem que aparecer como texto, não como imagem/alerta.</p>
    <p id="nome"></p>`,
    js: 'script.js',
  }),
  'script.js': `// Aula: Segurança no front. Pasta + Chrome.
// Tente: o símbolo < tem que aparecer na tela, NÃO um alerta.
//
// textContent trata o texto como texto. innerHTML com dado de fora abre XSS
// (o navegador executaria o onerror e um alerta apareceria).

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
  'script.js': `// Mini-projeto: consulta de CEP. Pasta + Chrome, com internet.
// Tente: 01001000 (centro de SP). Tente: 00000000 (CEP inexistente).
// Tente: desligue o Wi-Fi e busque de novo (falha de rede).
//
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
