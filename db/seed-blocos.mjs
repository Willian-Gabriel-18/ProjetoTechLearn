import { readFileSync } from 'node:fs'
import { neon } from '@neondatabase/serverless'

function envLocal() {
  const t = readFileSync(new URL('../.env', import.meta.url), 'utf8')
  const out = {}
  for (const line of t.split('\n')) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
    if (m) out[m[1]] = m[2]
  }
  return out
}

const md = (markdown) => ({ tipo: 'texto', conteudo: { markdown } })
const conce = (termo, explicacao) => ({ tipo: 'conceito', conteudo: { termo, explicacao } })
const code = (codigo) => ({ tipo: 'codigo', conteudo: { linguagem: 'javascript', codigo } })
const yt = (video_id, titulo, canal) => ({ tipo: 'youtube', conteudo: { video_id, titulo, canal } })
const img = (src, alt, credito) => ({ tipo: 'imagem', conteudo: { src, alt, credito } })
const tente = (instrucao) => ({ tipo: 'tente', conteudo: { instrucao } })
const ex = (enunciado) => ({ tipo: 'exercicio', conteudo: { enunciado } })
const arq = (href, rotulo) => ({ tipo: 'arquivo', conteudo: { href, rotulo } })

const aulas = {
  'o-que-e-javascript': [
    md('Ao terminar esta aula, você abre o Console do navegador e vê uma mensagem que **você** mandou o computador escrever.'),
    md('Um site tem três peças. **HTML** é o conteúdo (títulos, botões). **CSS** é a roupa (cor, tamanho). **JavaScript** é o que reage: clique, conta, busca dados. Sem JS, a página só “está lá”.'),
    conce('JavaScript', 'Linguagem que o navegador entende para a página responder a você — mudar texto, somar números, falar com a internet.'),
    img('/images/hero.jpg', 'Mesa de estudo com notebooks — o lugar onde o JS roda: o navegador.', 'arquivo do projeto'),
    md('Você escreve num editor (VS Code, ou o bloco de notas no começo). O navegador lê o arquivo. O **Console** (F12) é a janela onde o JS “fala” com você.'),
    code(`console.log('Olá, Gurupi')`),
    conce('console.log', 'Pedido para o navegador escrever uma mensagem no Console. Não aparece no meio da página — aparece na ferramenta de desenvolvedor.'),
    yt('le-URjBhevE', 'Variables — Beau teaches JavaScript (começa pelo básico; usamos na aula 3 também)', 'freeCodeCamp.org'),
    arq('/files/hello.html', 'Baixar página de exemplo (HTML + JS)'),
    tente('Abra o Chrome ou o Edge. Aperte F12. Clique em Console. Cole console.log(\'Olá\') e aperte Enter. Tem que aparecer Olá.'),
    ex('Em uma frase: o que o JavaScript faz que o HTML não faz?'),
  ],
  'console-e-devtools': [
    md('Ao terminar, você acha sozinho um erro vermelho no Console e lê o que ele está dizendo.'),
    md('F12 (ou botão direito → Inspecionar) abre as **ferramentas do navegador**. A aba **Console** é a mais importante no começo: é lá que o `console.log` aparece e que os erros gritam em vermelho.'),
    img('/images/devToolsConsole.jpg', 'Console do navegador, onde as mensagens e os erros aparecem.', 'material do projeto'),
    conce('DevTools', 'Conjunto de ferramentas do navegador para quem programa. Console, Elements (HTML), Rede. Você não precisa de todas no primeiro dia — o Console basta.'),
    code(`console.log('passo 1')
console.log(2 + 2)
console.error('isso é só um teste de erro')`),
    tente('No Console, some 10 + 32 só digitando a conta e Enter. O Console calcula na hora. Depois escreva um nome de variável que não existe, tipo banana, e veja o vermelho. Leia a palavra ReferenceError — ela só diz “eu não conheço esse nome”.'),
    ex('Qual tecla (ou caminho) você usa para abrir o Console no seu computador?'),
  ],
  variaveis: [
    md('Ao terminar, você guarda um valor numa caixinha com nome e troca esse valor depois.'),
    md('Uma **variável** é um nome que aponta para um valor. Pense numa gaveta: o nome está na frente; dentro vai o conteúdo. Em JavaScript moderno usamos `let` (pode mudar) e `const` (não troca o valor).'),
    conce('let e const', '`let` declara uma gaveta que você pode rechear de novo. `const` declara uma gaveta que não troca o que está dentro. Prefira const quando o valor não muda.'),
    conce('var', 'Jeito antigo. Quase não usamos em código novo: o comportamento dela é mais confuso. Se vir `var` num exemplo velho, leia como “era let, mas antigo”.'),
    code(`let cidade = 'Gurupi'
const estado = 'TO'
cidade = 'Palmas'
console.log(cidade)
console.log(estado)`),
    yt('le-URjBhevE', 'Variables — Beau teaches JavaScript', 'freeCodeCamp.org'),
    tente('No Console, crie let idade = 18 e depois idade = 19. Dê console.log(idade). Tente mudar um const e leia o erro — ele está te avisando que você prometeu não trocar.'),
    ex('Quando você usaria const em vez de let? Dê um exemplo da sua vida (nome, cidade, quantidade).'),
  ],
  'tipos-de-dados': [
    md('Ao terminar, você olha um valor e diz se é número, texto ou verdadeiro/falso.'),
    md('O computador trata **42** diferente de **"42"**. O primeiro é número (dá para somar). O segundo é texto (dá para juntar com outras palavras).'),
    conce('tipo', 'A espécie do valor: número, texto (string), verdadeiro/falso (boolean), vazio. `typeof` pergunta a espécie.'),
    code(`typeof 10
typeof '10'
typeof true
typeof undefined
let caixa = null
console.log(typeof caixa)`),
    conce('null e undefined', '`undefined` é “ainda não pus nada nessa gaveta”. `null` é “pus de propósito o vazio”. No começo, se der undefined, quase sempre faltou atribuir valor.'),
    yt('808eYu9B9Yw', 'Data Types — Beau teaches JavaScript', 'freeCodeCamp.org'),
    tente('No Console: typeof "Gurupi", typeof 2026, typeof false. Anote as três respostas. Elas têm que ser string, number, boolean.'),
    ex('O que acontece se você fizer "3" + 1? Teste no Console e explique com a palavra tipo.'),
  ],
  operadores: [
    md('Ao terminar, você compara dois valores com === e sabe a diferença para o + de texto.'),
    md('Operador é o símbolo da conta: `+ - * / %`. O `+` com texto **cola** palavras. Com número, soma.'),
    code(`console.log(10 + 5)
console.log('Tech' + 'Learn')
console.log(10 === 10)
console.log(10 === '10')
console.log(10 == '10')`),
    conce('===', 'Compara valor **e** tipo. 10 e "10" não são a mesma coisa. Use === no dia a dia. == tenta converter e engana gente iniciante.'),
    conce('&& e ||', '`&&` é “e”: os dois lados verdadeiros. `||` é “ou”: um dos dois basta. `!` inverte verdadeiro/falso.'),
    tente('No Console: 7 > 3, 7 === "7", 7 == "7". Qual deu false? Esse é o === te protegendo.'),
    ex('Escreva uma comparação que só é verdadeira se idade for pelo menos 18 (use >=).'),
  ],
  'if-else': [
    md('Ao terminar, seu programa escolhe um caminho: se a condição for verdadeira, faz A; senão, faz B.'),
    md('`if` lê uma pergunta de sim/não. Os parênteses guardam a pergunta. As chaves `{ }` guardam o que fazer.'),
    code(`const hora = 14
if (hora < 12) {
  console.log('Bom dia')
} else if (hora < 18) {
  console.log('Boa tarde')
} else {
  console.log('Boa noite')
}`),
    conce('condição', 'Expressão que vira verdadeiro ou falso. É o que vai dentro do if. Ex.: idade >= 18.'),
    tente('Troque hora para 9 e rode de novo (cole o bloco). Tem que aparecer Bom dia. Depois 20: Boa noite.'),
    ex('Escreva um if que imprime "pode dirigir" se idade for >= 18, e "espera um pouco" no else.'),
  ],
  loops: [
    md('Ao terminar, você manda o computador repetir uma ação um número certo de vezes, sem copiar a linha 20 vezes.'),
    md('`for` é o mais comum no começo: começa em 0, enquanto i < 5, soma 1.'),
    code(`for (let i = 0; i < 5; i = i + 1) {
  console.log('volta', i)
}

let n = 3
while (n > 0) {
  console.log(n)
  n = n - 1
}`),
    conce('loop', 'Repetição controlada. Sem a condição de parada, a página trava. Sempre pergunte: quando isso acaba?'),
    tente('Some os números de 1 a 10 com um for. Use let soma = 0 e some i dentro do loop. console.log(soma) no fim — tem que dar 55.'),
    ex('O que aconteceria se no while você esquecesse n = n - 1? Não rode isso no site — só explique.'),
  ],
  funcoes: [
    md('Ao terminar, você empacota um pedaço de código com nome, chama quando quiser, e recebe um resultado com return.'),
    md('Função é uma receita. Você define uma vez. Chama várias. Os **parâmetros** são os ingredientes.'),
    code(`function somar(a, b) {
  return a + b
}

const total = somar(2, 3)
console.log(total)

function cumprimentar(nome) {
  console.log('Olá, ' + nome)
}
cumprimentar('Ana')`),
    conce('return', 'Devolve um valor para quem chamou a função e **para** a função. Sem return, o resultado é undefined.'),
    yt('R8SjM4DKK80', 'Functions — Beau teaches JavaScript', 'freeCodeCamp.org'),
    tente('Escreva function dobro(n) { return n * 2 } e chame dobro(7). Tem que imprimir 14.'),
    ex('Qual a diferença entre console.log dentro da função e return? Quando cada um serve?'),
  ],
  arrays: [
    md('Ao terminar, você guarda vários valores numa lista e pega o terceiro item (lembre: o primeiro é o 0).'),
    md('Array é uma fila numerada. O número da posição se chama **índice**. Zero é o começo.'),
    code(`const frutas = ['açaí', 'manga', 'caju']
console.log(frutas[0])
console.log(frutas.length)
frutas.push('goiaba')
for (let i = 0; i < frutas.length; i = i + 1) {
  console.log(frutas[i])
}`),
    conce('índice', 'Posição na lista, começando em 0. frutas[1] é o segundo item. length é quantos itens existem agora.'),
    tente('Crie const notas = [7, 8, 9] e calcule a média: some no for e divida por notas.length.'),
    ex('Se a lista tem 4 itens, qual é o índice do último?'),
  ],
  objetos: [
    md('Ao terminar, você descreve uma coisa do mundo real com pares nome: valor — um aluno, uma aula, uma cidade.'),
    md('Objeto não usa índice 0, 1, 2. Usa **chaves** com nome: nome, idade, cidade.'),
    code(`const aluno = {
  nome: 'Lia',
  cidade: 'Gurupi',
  idade: 19
}
console.log(aluno.nome)
console.log(aluno['cidade'])
aluno.idade = 20`),
    conce('objeto', 'Coleção de pares chave/valor. Ponto (aluno.nome) é o jeito mais comum de ler. Colchetes servem quando o nome da chave está numa variável.'),
    img('/images/estruturaProjeto.jpg', 'Pastas e arquivos também são “objetos” na cabeça: cada um tem nome e conteúdo.', 'material do projeto'),
    tente('Modele const aula = { titulo: \'Variáveis\', minutos: 20 } e imprima aula.titulo.'),
    ex('Qual a diferença prática entre array e objeto? Pense: lista de notas vs ficha de um aluno.'),
  ],
  dom: [
    md('Ao terminar, você acha um título na página e troca o texto dele com JavaScript.'),
    md('O navegador transforma o HTML numa árvore de peças. Essa árvore se chama **DOM**. O JS pergunta: “cadê o h1?” e mexe.'),
    conce('DOM', 'Document Object Model: o mapa da página em forma de objetos. querySelector acha uma peça. textContent troca o texto.'),
    code(`// Na página precisa existir: <h1 id="titulo">Olá</h1>
const titulo = document.querySelector('#titulo')
titulo.textContent = 'Aula de DOM'
titulo.style.color = '#1F6A4A'`),
    img('/images/estruturaProjeto.jpg', 'A página como árvore de peças: o JS aponta para um galho e muda.', 'material do projeto'),
    arq('/files/hello.html', 'Página simples para testar o script'),
    tente('Crie um HTML com <p id="msg">oi</p> e um arquivo JS que faz querySelector(\'#msg\').textContent = \'funcionou\'. Abra no navegador.'),
    ex('Por que querySelector(\'#titulo\') usa a cerquilha? O que ela indica no CSS/JS?'),
  ],
  eventos: [
    md('Ao terminar, um botão na página reage ao clique e muda um texto — sem recarregar.'),
    md('**Evento** é algo que acontece: clique, tecla, envio de formulário. addEventListener fica de ouvido.'),
    code(`const botao = document.querySelector('#btn')
const saida = document.querySelector('#saida')
let cliques = 0

botao.addEventListener('click', function () {
  cliques = cliques + 1
  saida.textContent = 'Cliques: ' + cliques
})`),
    conce('addEventListener', 'Diz: quando este evento acontecer nesta peça, rode esta função. O primeiro argumento é o nome do evento, em inglês: click, input, submit.'),
    tente('Página com um botão e um parágrafo. Cada clique soma 1 e mostra o total. Se der undefined, o id do HTML não bate com o do JS — confira os dois.'),
    ex('O que a página faria se você pusesse o JS no <head> sem esperar o HTML? (Pista: querySelector acharia null.)'),
  ],
  'projeto-pedra-papel-tesoura': [
    md('Junte variáveis, função, if e um clique. O computador escolhe ao acaso; você clica numa opção; o placar sobe na tela.'),
    md('Math.random() dá um número de 0 até quase 1. Multiplique e use if para virar pedra, papel ou tesoura.'),
    code(`function jogadaComputador() {
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
}`),
    tente('Três botões: Pedra, Papel, Tesoura. Um <p id="placar">. Cada clique chama as funções, atualiza o texto. Conte vitórias com let pontos = 0.'),
    ex('Desafio extra: impedir clique duplo rápido demais não é necessário. O importante é o placar bater com as regras acima. Jogue 5 vezes e confira.'),
  ],
  'arrays-map-filter': [
    md('Ao terminar, você transforma e filtra listas com map e filter — sem for gigante.'),
    md('`map` devolve **outra** lista, do mesmo tamanho, cada item transformado. `filter` fica só com quem passa no teste.'),
    code(`const notas = [5, 7, 9, 4]
const comUm = notas.map(function (n) {
  return n + 1
})
const passu = notas.filter(function (n) {
  return n >= 6
})
console.log(comUm)
console.log(passu)`),
    conce('map / filter', 'Os dois **não** mudam a lista original. Eles devolvem lista nova. forEach só visita; não é para construir outra lista.'),
    tente('Dado const nomes = [\'ana\', \'bia\'], use map para deixar tudo maiúsculo (n.toUpperCase()).'),
    ex('Qual método você usa para ficar só com os números pares de [1,2,3,4]?'),
  ],
  'funcoes-es6': [
    md('Ao terminar, você lê uma arrow function e uma template string como código do dia a dia.'),
    code(`const dobro = (n) => n * 2
const nome = 'Lia'
const frase = \`Olá, \${nome}. O dobro de 4 é \${dobro(4)}.\`
console.log(frase)

const aluno = { nome: 'Lia', cidade: 'Gurupi' }
const { cidade } = aluno
const copias = [...[1, 2], 3]
console.log(cidade, copias)`),
    conce('arrow function', 'Forma curta de função. Se só há uma expressão, o return é implícito. Cuidado: o this dela é diferente — isso fica para o avançado.'),
    conce('template string', 'Texto entre crases. ${} encaixa valor no meio da frase. Mais legível que vários +.'),
    tente('Reescreva function soma(a,b){ return a+b } como arrow. Teste soma(1,2).'),
    ex('Por que [...] copia um array em vez de apontar para o mesmo? (Pista: se mudar a cópia, o original fica.)'),
  ],
  'escopo-e-closure': [
    md('Ao terminar, você explica por que uma variável de dentro da função não existe fora — e por que um contador “lembra”.'),
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
    conce('escopo', 'Onde o nome vale. let dentro de { } não vaza para fora. Isso evita bagunça.'),
    conce('closure', 'A função de dentro continua enxergando n mesmo depois de criarContador ter acabado. Por isso o contador lembra.'),
    tente('Crie dois contadores: const a = criarContador(); const b = criarContador(). Eles têm que ter n separado.'),
    ex('Se n fosse criado fora da função, os dois contadores brigariam pelo mesmo n. Por quê?'),
  ],
  json: [
    md('Ao terminar, você transforma objeto em texto JSON e o texto de volta em objeto — o formato das APIs.'),
    code(`const aula = { titulo: 'JSON', minutos: 20 }
const texto = JSON.stringify(aula)
console.log(texto)
const deNovo = JSON.parse(texto)
console.log(deNovo.titulo)`),
    conce('JSON', 'Texto com cara de objeto: chaves entre aspas. É o que viaja na internet. stringify vai, parse volta. JSON inválido quebra o parse — use try/catch no avançado.'),
    tente('Dê JSON.parse(\'{"ok": true}\') e leia .ok. Depois tente JSON.parse(\'nao e json\') e veja o erro no Console.'),
    ex('Por que a gente não manda o objeto JavaScript “cru” para outro programa? (Pista: texto atravessa rede.)'),
  ],
  promises: [
    md('Ao terminar, você encadeia .then e .catch: a espera termina, aí o próximo passo roda.'),
    md('JS não para a página enquanto espera a internet. Ele agenda o resto. **Promise** é essa promessa de um valor futuro.'),
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
    conce('Promise', 'Objeto que vai se resolver (deu certo) ou rejeitar (deu errado). then roda no sucesso; catch no erro. setTimeout só simula espera.'),
    tente('Troque 500 por 1000 e veja o log atrasar um segundo. A página continua clicável — essa é a graça.'),
    ex('O que seria pior: travar a página 5 segundos ou mostrar “carregando” e continuar?'),
  ],
  'async-await': [
    md('Ao terminar, você escreve espera como se fosse passo a passo, com async/await e try/catch.'),
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
    conce('await', 'Só funciona dentro de função async. Pausa **essa função** até a Promise resolver, sem travar o resto da página.'),
    tente('Chame run() duas vezes seguidas. As duas esperas andam juntas. Isso é o JS não travando.'),
    ex('Reescreva um .then simples (console.log depois de esperar) em async/await.'),
  ],
  fetch: [
    md('Ao terminar, você busca um CEP na ViaCEP e lê o JSON — sem chave de API.'),
    code(`async function buscarCep(cep) {
  const url = 'https://viacep.com.br/ws/' + cep + '/json/'
  const resp = await fetch(url)
  if (!resp.ok) {
    throw new Error('rede')
  }
  return resp.json()
}

buscarCep('77400000').then(function (dados) {
  console.log(dados.localidade, dados.uf)
})`),
    conce('fetch', 'Função do navegador que chama uma URL. A resposta não é o JSON ainda: chame .json(). ViaCEP é pública e sem senha — boa para treinar.'),
    tente('Troque o CEP para o da sua rua (só números). Veja localidade no Console. Se der erro, o CEP pode ser inválido — trate isso no mini-projeto avançado.'),
    ex('Por que não colocamos senha de API no arquivo JS que o navegador baixa?'),
  ],
  formularios: [
    md('Ao terminar, o formulário não recarrega a página: você lê o input e mostra o resultado na hora.'),
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
    conce('preventDefault', 'Cancela o comportamento padrão. No submit, o padrão é recarregar a página. Sem preventDefault, seu JS perde o estado.'),
    tente('Form com input e botão Enviar. Se estiver vazio, mostre um aviso. Se tiver texto, mostre o texto no parágrafo.'),
    ex('Por que trim() no value? Teste com espaços na frente.'),
  ],
  modulos: [
    md('Ao terminar, você parte o código em dois arquivos e importa uma função — cada arquivo uma responsabilidade.'),
    img('/images/estruturaProjeto.jpg', 'Arquivos separados: um calcula, outro fala com a página.', 'material do projeto'),
    code(`// somar.js
export function somar(a, b) {
  return a + b
}

// main.js
import { somar } from './somar.js'
console.log(somar(2, 3))

// no HTML:
// <script type="module" src="main.js"></script>`),
    conce('módulo', 'Arquivo que exporta nomes (export) e importa o que precisa (import). type="module" no script é obrigatório no navegador sem bundler.'),
    tente('Dois arquivos locais: um exporta dobro, o outro importa e loga dobro(10). Sirva com um servidor simples (ou o Live Preview). Abrir file:// às vezes bloqueia módulos.'),
    ex('Cite uma razão para não deixar 400 linhas num único main.js.'),
  ],
  'projeto-lista-de-tarefas': [
    md('App único: incluir tarefa, marcar feita, filtrar, **lembrar** no localStorage depois que a página recarrega.'),
    code(`const chave = 'techlearn-tarefas'
function ler() {
  const t = localStorage.getItem(chave)
  return t ? JSON.parse(t) : []
}
function salvar(lista) {
  localStorage.setItem(chave, JSON.stringify(lista))
}`),
    conce('localStorage', 'Gaveta de texto no navegador, por site. Só cabe string — por isso JSON.stringify. Não é banco seguro: o usuário pode limpar. Serve para rascunho na máquina dele.'),
    tente('Input + botão Adicionar. Lista em <ul>. Cada item com botão feito. Ao mudar, salvar(). No carregamento, ler() e desenhar. filter para “só pendentes”.'),
    ex('O que some se a pessoa limpar os dados do site? O app tem que nascer vazio, sem erro.'),
  ],
  this: [
    md('Ao terminar, você lê um método de objeto e sabe quem é this naquele clique — e por que a arrow é diferente.'),
    code(`const conta = {
  saldo: 10,
  mostrar: function () {
    console.log(this.saldo)
  }
}
conta.mostrar()

const solta = conta.mostrar
solta()`),
    conce('this', 'Quem “chamou” o método com o ponto. conta.mostrar() → this é conta. Se arrancar a função, this se perde. Arrow não cria this próprio: herda o de fora.'),
    tente('Rode os dois chamados. O segundo vira undefined (ou erro estrito). Depois: const mostra = () => console.log(conta.saldo) e chame mostra().'),
    ex('Em uma frase: this depende de **como** a função é chamada, não de onde foi escrita (na function clássica).'),
  ],
  classes: [
    md('Ao terminar, você descreve um molde com class e cria duas instâncias com new — sem virar um curso de Java.'),
    code(`class Conta {
  constructor(saldo) {
    this.saldo = saldo
  }
  depositar(v) {
    this.saldo = this.saldo + v
  }
}
const a = new Conta(10)
const b = new Conta(0)
a.depositar(5)
console.log(a.saldo, b.saldo)`),
    conce('class', 'Açúcar para criar objetos parecidos. constructor roda no new. Cada instância tem seu this.saldo. Não precisa herança no primeiro uso.'),
    tente('Crie class Aluno { constructor(nome) { this.nome = nome } } e dois alunos. Logue os nomes — têm que ser independentes.'),
    ex('Por que new Conta(10) e new Conta(0) não compartilham o mesmo saldo?'),
  ],
  prototipo: [
    md('Ao terminar, você explica com calma: se o objeto não tem a propriedade, o JavaScript olha no protótipo.'),
    md('Isso é o mecanismo por baixo das classes. Você quase não escreve __proto__ no dia a dia. Só precisa não se assustar quando alguém citar “prototype”.'),
    code(`const pai = { tipo: 'conta' }
const filho = Object.create(pai)
filho.saldo = 3
console.log(filho.saldo)
console.log(filho.tipo)`),
    conce('protótipo', 'Objeto reserva onde o JS procura nomes que não estão no próprio objeto. Cadeia: filho → pai → Object.prototype. Se não achar, undefined.'),
    tente('Confira Object.getPrototypeOf(filho) === pai. Depois mude pai.tipo e leia filho.tipo de novo.'),
    ex('Se esta aula estiver pesada, tudo bem voltar depois. O mini-projeto avançado **não** exige você criar cadeias na mão.'),
  ],
  'event-loop': [
    md('Ao terminar, você prevê a ordem dos logs: sincrono primeiro, depois o setTimeout 0 — e não “ao mesmo tempo”.'),
    code(`console.log('A')
setTimeout(function () {
  console.log('B')
}, 0)
console.log('C')`),
    conce('event loop', 'A fila do JavaScript: termina o que está na pilha agora; só então pega o que estava esperado (timeout, resposta de rede). Por isso B vem depois de C, mesmo com 0 ms.'),
    tente('Rode o bloco. A ordem é A, C, B. Se saísse A, B, C, o navegador travaria cada espera.'),
    ex('Encaixe um Promise.resolve().then(() => console.log(\'D\')) e descubra se D vem antes ou depois de B. Anote. Não precisa decorar o nome “microtask” agora — só a ordem que você viu.'),
  ],
  erros: [
    md('Ao terminar, um JSON ruim não derruba a aula inteira: você mostra uma frase clara para a pessoa.'),
    code(`function lerJson(texto) {
  try {
    return JSON.parse(texto)
  } catch (e) {
    console.log('Não deu para ler esse texto como JSON.')
    return null
  }
}
console.log(lerJson('{"ok":true}'))
console.log(lerJson('ops'))`),
    conce('try/catch', 'Tenta o bloco try. Se der erro, cai no catch em vez de parar tudo. Mostre mensagem humana. Evite alert na produção (o beta fazia isso — não vamos repetir).'),
    tente('Chame lerJson com um CEP JSON válido e com a palavra banana. A página continua, o segundo devolve null.'),
    ex('Por que é melhor um parágrafo “CEP não encontrado” do que um pop-up vermelho?'),
  ],
  bundler: [
    md('Ao terminar, você explica em analogia o que Vite/Nuxt fazem: juntam arquivos, traduzem o que o navegador antigo não entende, e servem o site.'),
    md('No iniciante você abria HTML + JS. Num app grande isso vira dezenas de arquivos. O **bundler** empacota. O Nuxt ainda escolhe o que vai no servidor e o que vai no navegador. Você não configura webpack nesta aula.'),
    conce('bundler', 'Ferramenta que lê seu código-fonte e gera o que o navegador baixa. Analogia: várias receitas viram um marmitex. Nuxt usa Vite por baixo.'),
    tente('Olhe o endereço desta plataforma em desenvolvimento (localhost). O Nuxt está fazendo o papel de bundler + servidor. Não precisa abrir arquivo por arquivo.'),
    ex('Cite uma vantagem de não mandar o código-fonte cru para o visitante (nome de arquivo, tamanho, import).'),
  ],
  'seguranca-front': [
    md('Ao terminar, você recusa colar HTML que veio de desconhecido na página — e nunca põe senha no JS que o navegador baixa.'),
    md('**XSS** é quando alguém injeta script na sua página. Se você fizer elemento.innerHTML = textoDoUsuario, abriu a porta. Prefira textContent. Senha de API no front é senha pública.'),
    conce('XSS', 'Cross-site scripting: código malicioso entra no site e roda no navegador da vítima. Defesa simples no começo: não transformar texto de fora em HTML.'),
    code(`const nome = '<img src=x onerror=alert(1)>'
const p = document.querySelector('#nome')
p.textContent = nome
// p.innerHTML = nome  // não faça isso com dado de fora`),
    tente('Teste textContent com o texto acima: tem que aparecer o símbolo < na tela, não um alerta. Esse é o comportamento seguro.'),
    ex('Onde a senha do banco (DATABASE_URL) deve viver? (Pista: servidor / .env, nunca num arquivo que o Chrome baixa.)'),
  ],
  'projeto-consulta-publica': [
    md('Feche o avançado com um buscador de CEP: campo, botão, estado de carregando, erro amigável, cidade e UF na tela. Use fetch + async/await + preventDefault + textContent.'),
    code(`async function mostrarCep(cep, saida) {
  saida.textContent = 'Buscando…'
  try {
    const resp = await fetch('https://viacep.com.br/ws/' + cep + '/json/')
    const dados = await resp.json()
    if (dados.erro) {
      saida.textContent = 'CEP não encontrado.'
      return
    }
    saida.textContent = dados.localidade + ' — ' + dados.uf
  } catch (e) {
    saida.textContent = 'Não deu para falar com a internet. Tente de novo.'
  }
}`),
    tente('Formulário + parágrafo de saída. Só números no CEP (8 dígitos). Loading, sucesso, CEP inexistente e falha de rede (desligue o Wi-Fi para ver o catch). Nada de innerHTML com a resposta.'),
    ex('Checklist: preventDefault, trim, mensagem para humano, textContent. Se os quatro estiverem lá, o projeto está feito.'),
  ],
}

const env = { ...envLocal(), ...process.env }
const sql = neon(env.DATABASE_URL)

const rows = await sql`SELECT id, slug FROM aulas`
const idPorSlug = Object.fromEntries(rows.map((r) => [r.slug, r.id]))

await sql`DELETE FROM blocos_aula`

let n = 0
for (const [slug, blocos] of Object.entries(aulas)) {
  const aulaId = idPorSlug[slug]
  if (!aulaId) {
    console.error('slug sem aula:', slug)
    continue
  }
  let ordem = 1
  for (const b of blocos) {
    await sql`
      INSERT INTO blocos_aula (aula_id, ordem, tipo, conteudo)
      VALUES (${aulaId}, ${ordem}, ${b.tipo}::tipo_bloco, ${JSON.stringify(b.conteudo)}::jsonb)
    `
    ordem += 1
    n += 1
  }
}

await sql`UPDATE aulas SET publicada = true, atualizado_em = now()`
await sql`UPDATE trilhas SET publicada = true`

const noticia = await sql`SELECT id FROM noticias WHERE slug = 'por-que-javascript' LIMIT 1`
if (!noticia[0]) {
  await sql`
    INSERT INTO noticias (slug, titulo, resumo, corpo, publicada, publicado_em)
    VALUES (
      'por-que-javascript',
      'Por que os sites usam JavaScript?',
      'Uma leitura curta para quem ainda não começou a trilha.',
      ${JSON.stringify({ markdown: 'Quase todo site que **reage** a você usa JavaScript no navegador. HTML estrutura, CSS veste, JS responde. Comece pela trilha iniciante — dez minutos já mostram o Console.' })}::jsonb,
      true,
      now()
    )
  `
}

console.log('blocos inseridos', n, 'aulas com mapa', Object.keys(aulas).length)
