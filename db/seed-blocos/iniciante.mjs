import { md, conce, code, yt, img, tente, ex, proxima } from './helpers.mjs'

export const iniciante = {
  'o-que-e-javascript': [
    md(`## O que você vai conseguir

Ao terminar esta aula, você abre o Console do navegador e vê uma mensagem que **você** mandou o computador escrever.

Se o HTML e CSS básico ainda não entrou, vale passar lá primeiro — o mapa abaixo fica mais claro. Esta aula é o JavaScript: a página reage.`),
    md(`## As três camadas de um site

Um site que você abre no Chrome é, na prática, três linguagens trabalhando juntas.

**HTML** é a estrutura. Títulos, parágrafos, botões, campos de formulário. Sem HTML, não há “página” — só uma tela vazia.

**CSS** é o visual. Cor, tamanho da letra, espaço entre as coisas, se o botão é redondo ou quadrado. Sem CSS, a página existe, mas parece um documento cru.

**JavaScript** é a reação. Clique, conta, busca um CEP, troca um texto sem recarregar. Sem JavaScript, a página só *está lá*. Ela não responde a você.

HTML e CSS têm trilha própria (o palco). Aqui você escreve a reação. As primeiras aulas são no Console; depois o JS mexe na página que você já sabe montar.`),
    img(
      '/images/trilhas/iniciante/tres-camadas.svg',
      'Três faixas: HTML estrutura, CSS visual, JavaScript reação',
      { legenda: 'De cima para baixo: HTML estrutura, CSS veste, JavaScript reage.' },
    ),
    conce(
      'JavaScript',
      'Linguagem que o navegador entende para a página responder a você: mudar texto, somar números, falar com a internet.',
    ),
    md(`## Onde isso aparece no dia a dia

Quando você clica em “enviar” e a página não recarrega inteira: JavaScript.

Quando o site avisa “e-mail inválido” antes de você mandar o formulário: JavaScript.

Quando um mapa, um chat ou um botão de like atualiza na hora: JavaScript.

O HTML e o CSS montaram o palco. O JS é o que se mexeu quando você tocou.`),
    md(`## Pontos fortes e fracos do JavaScript

Pontos fortes: roda no navegador de graça, sem instalar nada. É a língua da web — quase todo site usa. Dá para começar com uma linha. A mesma gramática também existe no servidor (isso é assunto de novidade, não desta aula).

Pontos fracos: é fácil escrever código que “funciona na minha máquina” e quebra no detalhe (tipo de dado, acento, um clique duplo). O nome engana: **não é Java**. E não é a única língua do mundo — Python, Go, Rust existem; o TechLearn começa por JS porque é o que o navegador já entende.

Honesto: no começo você vai errar. O Console (aula que vem) é o lugar onde o erro aparece em vermelho, não um pop-up de terror.`),
    md(`## Exemplo mínimo desta aula

Você fala com o JavaScript no **Console** do navegador. F12 (ou botão direito → Inspecionar) abre as ferramentas. A aba Console é uma linha de comando: você escreve, aperta Enter, o navegador responde.`),
    conce(
      'console.log',
      'Pedido para o navegador escrever uma mensagem no Console. Não aparece no meio da página — aparece nessa janela de ferramenta.',
    ),
    code(`console.log('Olá')`),
    tente(
      'Dois jeitos. 1) Extraia o zip desta aula, abra o index.html no Chrome, F12 → Console: a mensagem do script.js já está lá. 2) No Console, cole console.log(\'Olá\') e Enter. Se aparecer undefined na linha de baixo, tudo bem: o log funcionou.',
    ),
    ex('Em uma frase: o que o JavaScript faz que o HTML sozinho não faz?'),
    proxima(
      'Na próxima aula você abre a mesma janela com mais calma: onde o erro vermelho aparece e como ler o que ele está dizendo.',
    ),
  ],

  'console-e-devtools': [
    md(`## O que você vai conseguir

Achar sozinho um erro vermelho no Console e entender a mensagem o bastante para corrigir o nome de uma variável.`),
    md(`## A janela que o navegador esconde

F12 (no Mac, às vezes Cmd+Option+I) abre as **ferramentas do desenvolvedor**. Tem várias abas. No começo, uma basta: **Console**.

É lá que o \`console.log\` aparece. É lá que o JavaScript grita quando algo não existe.

A aba Elements mostra o HTML. Rede mostra pedidos à internet. Ignore-as hoje. O Console é a sala de aula.`),
    img(
      '/images/devToolsConsole.jpg',
      'Janela das ferramentas do navegador com a aba Console visível',
      { credito: 'material do projeto', legenda: 'A aba Console é a da mensagem e do erro vermelho. As outras abas esperam.' },
    ),
    conce(
      'DevTools',
      'Conjunto de ferramentas do navegador para quem programa. Console, Elements (HTML), Rede. Você não precisa de todas no primeiro dia.',
    ),
    md(`## Onde isso aparece no dia a dia

Todo mundo que programa para a web abre isso dezenas de vezes por dia. Não é “coisa avançada”. É a lanterna: sem ela, você adivinha no escuro.`),
    md(`## Exemplo mínimo desta aula`),
    code(`console.log('passo 1')
console.log(2 + 2)
console.error('isso é só um teste de erro')`),
    tente(
      'No Console, some 10 + 32 só digitando a conta e Enter. O Console calcula na hora. Depois escreva um nome que não existe, tipo banana, e veja o vermelho. Leia a palavra ReferenceError — ela só diz “eu não conheço esse nome”.',
    ),
    ex('Qual tecla (ou caminho de menu) você usa para abrir o Console no seu computador?'),
    proxima(
      'Na próxima aula você dá nome às coisas: guarda um valor numa caixinha e troca esse valor depois.',
    ),
  ],

  variaveis: [
    md(`## O que você vai conseguir

Guardar um valor numa caixinha com nome, ler esse valor e trocá-lo quando fizer sentido.`),
    md(`## Uma gaveta com etiqueta

Uma **variável** é um nome que aponta para um valor. Pense numa gaveta: o nome está na frente; dentro vai o conteúdo.

Em JavaScript moderno usamos \`let\` (pode mudar o que está dentro) e \`const\` (não troca o valor). Quase não usamos \`var\`: é o jeito antigo, com regras mais confusas.`),
    conce(
      'let e const',
      '`let` declara uma gaveta que você pode rechear de novo. `const` declara uma gaveta que não troca o que está dentro. Prefira const quando o valor não muda.',
    ),
    conce(
      'var',
      'Jeito antigo. Quase não usamos em código novo. Se vir `var` num exemplo velho, leia como “era let, mas antigo”.',
    ),
    md(`## Onde isso aparece no dia a dia

Seu nome não muda no meio do formulário: \`const\`. A quantidade de itens no carrinho muda: \`let\`. Pontos num jogo: \`let\`. O título fixo da página: \`const\`.`),
    md(`## Exemplo mínimo desta aula`),
    code(`let idade = 18
const pais = 'Brasil'
idade = 19
console.log(idade)
console.log(pais)`),
    yt('le-URjBhevE', 'Variables — Beau teaches JavaScript', 'freeCodeCamp.org'),
    tente(
      'No Console, crie let idade = 18 e depois idade = 19. Dê console.log(idade). Tente mudar um const (pais = \'Outro\') e leia o erro — ele está te avisando que você prometeu não trocar.',
    ),
    ex('Quando você usaria const em vez de let? Dê um exemplo da sua vida (nome, quantidade, cidade).'),
    proxima(
      'Na próxima aula você olha o que *está* dentro da gaveta: número, texto, verdadeiro ou falso.',
    ),
  ],

  'tipos-de-dados': [
    md(`## O que você vai conseguir

Olhar um valor e dizer se é número, texto ou verdadeiro/falso — e por que \`"42"\` não é a mesma coisa que \`42\`.`),
    md(`## O computador trata 42 diferente de "42"

O primeiro é número (dá para somar). O segundo é texto (dá para colar com outras palavras).

Os tipos que mais aparecem no começo:

- **number** — 10, 3.14, -1
- **string** — texto entre aspas: \`'Ana'\` ou \`"Ana"\`
- **boolean** — verdadeiro ou falso: \`true\` / \`false\`
- **undefined** — ainda não pus nada nessa gaveta
- **null** — pus de propósito o vazio`),
    conce(
      'tipo',
      'A espécie do valor. `typeof` pergunta a espécie. `typeof 10` dá "number". `typeof \'10\'` dá "string".',
    ),
    conce(
      'null e undefined',
      '`undefined` é “ainda não pus nada”. `null` é “pus de propósito o vazio”. No começo, se der undefined, quase sempre faltou atribuir valor.',
    ),
    md(`## Onde isso aparece no dia a dia

Campo de idade que veio como texto \`"18"\` não deixa entrar no \`if (idade >= 18)\` do jeito que você espera, se você comparar errado. Loja que soma \`"10" + 5\` e ganha \`"105"\` em vez de 15: misturou texto com número.`),
    md(`## Exemplo mínimo desta aula`),
    code(`typeof 10
typeof '10'
typeof true
typeof undefined
let caixa = null
console.log(typeof caixa)`),
    yt('808eYu9B9Yw', 'Data Types — Beau teaches JavaScript', 'freeCodeCamp.org'),
    tente(
      'No Console: typeof "Ana", typeof 2026, typeof false. Anote as três respostas. Elas têm que ser string, number, boolean. Depois teste "3" + 1 e 3 + 1. São resultados diferentes.',
    ),
    ex('O que acontece se você fizer "3" + 1? Teste no Console e explique com a palavra tipo.'),
    proxima(
      'Na próxima aula você combina valores: somar, colar texto, comparar do jeito que não engana.',
    ),
  ],

  operadores: [
    md(`## O que você vai conseguir

Comparar dois valores com \`===\` e saber a diferença para o \`+\` de texto.`),
    md(`## Símbolos que fazem conta — ou colam palavras

Operador é o símbolo da conta: \`+ - * / %\`.

O \`+\` com número **soma**. Com texto, **cola** palavras. Por isso \`'Tech' + 'Learn'\` vira \`'TechLearn'\`.

Para comparar, use \`===\` (três iguais): valor **e** tipo. \`10 === '10'\` é falso. \`10 == '10'\` (dois iguais) tenta converter e vira verdadeiro — isso engana gente iniciante.`),
    conce(
      '===',
      'Compara valor e tipo. 10 e "10" não são a mesma coisa. Use === no dia a dia.',
    ),
    conce(
      '&& e ||',
      '\`&&\` é “e”: os dois lados verdadeiros. \`||\` é “ou”: um dos dois basta. \`!\` inverte verdadeiro/falso.',
    ),
    md(`## Pontos fortes e fracos

\`===\` é o hábito saudável. \`==\` ainda existe por história da linguagem. Trate \`==\` como um atalho que você *não* quer no código novo.`),
    md(`## Exemplo mínimo desta aula`),
    code(`console.log(10 + 5)
console.log('Tech' + 'Learn')
console.log(10 === 10)
console.log(10 === '10')
console.log(10 == '10')
console.log(7 > 3 && 7 < 10)`),
    tente(
      'No Console: 7 > 3, 7 === "7", 7 == "7". Qual deu false? Esse é o === te protegendo.',
    ),
    ex('Escreva uma comparação que só é verdadeira se idade for pelo menos 18 (use >=).'),
    proxima(
      'Na próxima aula o programa escolhe um caminho: se a pergunta for sim, faz A; senão, faz B.',
    ),
  ],

  'if-else': [
    md(`## O que você vai conseguir

Escrever um programa que escolhe um caminho: se a condição for verdadeira, faz A; senão, faz B.`),
    md(`## Uma pergunta de sim ou não

\`if\` lê uma pergunta. Os parênteses guardam a pergunta. As chaves \`{ }\` guardam o que fazer se a resposta for sim.

\`else\` é o “caso contrário”. \`else if\` é “senão, pergunta de novo”.`),
    conce(
      'condição',
      'Expressão que vira verdadeiro ou falso. É o que vai dentro do if. Ex.: idade >= 18.',
    ),
    md(`## Onde isso aparece no dia a dia

Site que mostra “Bom dia” ou “Boa noite” conforme a hora. Formulário que só envia se o campo não está vazio. Jogo que diz quem ganhou.`),
    md(`## Exemplo mínimo desta aula`),
    code(`const hora = 14
if (hora < 12) {
  console.log('Bom dia')
} else if (hora < 18) {
  console.log('Boa tarde')
} else {
  console.log('Boa noite')
}`),
    tente(
      'Troque hora para 9 e rode de novo (cole o bloco). Tem que aparecer Bom dia. Depois 20: Boa noite.',
    ),
    ex('Escreva um if que imprime "pode dirigir" se idade for >= 18, e "espera um pouco" no else.'),
    proxima(
      'Na próxima aula o computador repete uma ação um número certo de vezes, sem você copiar a linha 20 vezes.',
    ),
  ],

  loops: [
    md(`## O que você vai conseguir

Mandar o computador repetir uma ação um número certo de vezes — e saber quando parar, para a página não travar.`),
    md(`## Repetir com controle

\`for\` é o mais comum no começo: começa em 0, enquanto \`i < 5\`, soma 1.

\`while\` repete *enquanto* a condição for verdadeira. Se você esquecer de mudar a variável da condição, o loop não acaba. O navegador trava. Sempre pergunte: **quando isso acaba?**`),
    conce(
      'loop',
      'Repetição controlada. Sem a condição de parada, a página trava. Sempre pergunte: quando isso acaba?',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(`for (let i = 0; i < 5; i = i + 1) {
  console.log('volta', i)
}

let n = 3
while (n > 0) {
  console.log(n)
  n = n - 1
}`),
    tente(
      'Some os números de 1 a 10 com um for. Use let soma = 0 e some i dentro do loop. console.log(soma) no fim — tem que dar 55.',
    ),
    ex('O que aconteceria se no while você esquecesse n = n - 1? Não rode isso no site — só explique.'),
    proxima(
      'Na próxima aula você empacota um pedaço de código com nome e chama quando quiser.',
    ),
  ],

  funcoes: [
    md(`## O que você vai conseguir

Empacotar um pedaço de código com nome, chamar quando quiser, e receber um resultado com \`return\`.`),
    md(`## Uma receita com nome

Função é uma receita. Você define uma vez. Chama várias. Os **parâmetros** são os ingredientes. O \`return\` devolve o prato pronto e **para** a função.

Sem \`return\`, o resultado é \`undefined\`. \`console.log\` *mostra* algo; \`return\` *devolve* algo para quem chamou. São trabalhos diferentes.`),
    conce(
      'return',
      'Devolve um valor para quem chamou a função e para a função. Sem return, o resultado é undefined.',
    ),
    md(`## Onde isso aparece no dia a dia

Calcular frete. Validar e-mail. Sortear um número. Qualquer “faça isso de novo, com outros números” pede função.`),
    md(`## Exemplo mínimo desta aula`),
    code(`function somar(a, b) {
  return a + b
}

const total = somar(2, 3)
console.log(total)

function cumprimentar(nome) {
  console.log('Olá, ' + nome)
}
cumprimentar('Ana')`),
    yt('R8SjM4DKK80', 'Functions — Beau teaches JavaScript', 'freeCodeCamp.org'),
    tente(
      'Escreva function dobro(n) { return n * 2 } e chame dobro(7). Tem que imprimir 14 se você der console.log no resultado.',
    ),
    ex('Qual a diferença entre console.log dentro da função e return? Quando cada um serve?'),
    proxima(
      'Na próxima aula você guarda vários valores numa lista — e o primeiro item é o 0, não o 1.',
    ),
  ],

  arrays: [
    md(`## O que você vai conseguir

Guardar vários valores numa lista e pegar o terceiro item (lembrando: o primeiro é o 0).`),
    md(`## Uma fila numerada

Array é uma fila. O número da posição se chama **índice**. Zero é o começo. \`frutas[1]\` é o *segundo* item.

\`length\` é quantos itens existem agora. \`push\` coloca um item no fim.`),
    conce(
      'índice',
      'Posição na lista, começando em 0. frutas[1] é o segundo item. length é quantos itens existem agora.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(`const frutas = ['açaí', 'manga', 'caju']
console.log(frutas[0])
console.log(frutas.length)
frutas.push('goiaba')
for (let i = 0; i < frutas.length; i = i + 1) {
  console.log(frutas[i])
}`),
    tente(
      'Crie const notas = [7, 8, 9] e calcule a média: some no for e divida por notas.length.',
    ),
    ex('Se a lista tem 4 itens, qual é o índice do último?'),
    proxima(
      'Na próxima aula a coisa do mundo real ganha nome nas chaves: um aluno, uma aula, um produto — não uma fila 0, 1, 2.',
    ),
  ],

  objetos: [
    md(`## O que você vai conseguir

Descrever uma coisa do mundo real com pares nome: valor — um aluno, uma aula, um produto.`),
    md(`## Não é fila. É ficha.

Objeto não usa índice 0, 1, 2. Usa **chaves** com nome: \`nome\`, \`idade\`, \`cidade\`.

Ponto (\`aluno.nome\`) é o jeito mais comum de ler. Colchetes (\`aluno['cidade']\`) servem quando o nome da chave está numa variável.`),
    conce(
      'objeto',
      'Coleção de pares chave/valor. Ponto (aluno.nome) é o jeito mais comum. Colchetes servem quando o nome da chave está numa variável.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(`const aluno = {
  nome: 'Lia',
  cidade: 'Recife',
  idade: 19
}
console.log(aluno.nome)
console.log(aluno['cidade'])
aluno.idade = 20`),
    tente(
      'Modele const aula = { titulo: \'Variáveis\', minutos: 20 } e imprima aula.titulo.',
    ),
    ex('Qual a diferença prática entre array e objeto? Pense: lista de notas vs ficha de um aluno.'),
    proxima(
      'Na próxima aula o JavaScript aponta para um título na *página* e troca o texto. Até agora tudo foi no Console.',
    ),
  ],

  dom: [
    md(`## O que você vai conseguir

Achar um título na página e trocar o texto dele com JavaScript.`),
    md(`## A página vira uma árvore

Até agora o JS só falou no Console. Para mexer no que a pessoa *vê*, o navegador transforma o HTML numa árvore de peças. Essa árvore se chama **DOM**.

Você já viu tag e \`id\` no HTML básico. Aqui o JS usa esse gancho.

Um arquivo HTML mínimo:

\`<h1 id="titulo">Olá</h1>\`

O JS pergunta: “cadê o que tem id titulo?” e troca o texto.

O \`id\` é o gancho. Se a peça não existir no HTML, o JS acha \`null\`.`),
    conce(
      'DOM',
      'Document Object Model: o mapa da página em forma de objetos. querySelector acha uma peça. textContent troca o texto.',
    ),
    conce(
      'id',
      'Nome único de uma peça no HTML. No CSS e no JS, a cerquilha (#titulo) significa “o id chamado titulo”.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(`// Na página precisa existir: <h1 id="titulo">Olá</h1>
const titulo = document.querySelector('#titulo')
titulo.textContent = 'Aula de DOM'
titulo.style.color = '#1F6A4A'`),
    tente(
      'Crie um HTML com <p id="msg">oi</p> e um arquivo JS (ou um <script> no fim da página) que faz querySelector(\'#msg\').textContent = \'funcionou\'. Abra no navegador. Se der erro de null, o JS rodou antes do HTML existir — coloque o script no fim do body.',
    ),
    ex('Por que querySelector(\'#titulo\') usa a cerquilha? O que ela indica?'),
    proxima(
      'Na próxima aula um botão na página reage ao clique — sem recarregar.',
    ),
  ],

  eventos: [
    md(`## O que você vai conseguir

Um botão na página reage ao clique e muda um texto, sem recarregar.`),
    md(`## Ficar de ouvido

**Evento** é algo que acontece: clique, tecla, envio de formulário. \`addEventListener\` fica de ouvido.

O HTML desta aula: um botão com \`id="btn"\` e um parágrafo com \`id="saida"\` — as mesmas peças do HTML básico. O zip já traz a página montada.`),
    conce(
      'addEventListener',
      'Diz: quando este evento acontecer nesta peça, rode esta função. O primeiro argumento é o nome do evento, em inglês: click, input, submit.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(`const botao = document.querySelector('#btn')
const saida = document.querySelector('#saida')
let cliques = 0

botao.addEventListener('click', function () {
  cliques = cliques + 1
  saida.textContent = 'Cliques: ' + cliques
})`),
    tente(
      'Página com um botão e um parágrafo. Cada clique soma 1 e mostra o total. Se der undefined ou erro de null, o id do HTML não bate com o do JS — confira os dois.',
    ),
    ex('O que a página faria se você pusesse o JS no <head> sem esperar o HTML? (Pista: querySelector acharia null.)'),
    proxima(
      'Na próxima aula você junta o iniciante num joguinho: o computador escolhe, você clica, o placar sobe na tela.',
    ),
  ],

  'projeto-pedra-papel-tesoura': [
    md(`## O que vai existir na tela no final

Três botões (Pedra, Papel, Tesoura), um placar, e uma frase dizendo quem ganhou a rodada. Você joga contra o computador. Sem recarregar a página.`),
    md(`## O que desta trilha entra

- Variáveis para os pontos
- Função que sorteia a jogada do computador
- \`if\` para decidir quem ganhou
- Clique nos botões
- \`textContent\` para mostrar o placar

Não é aula nova. É cola.`),
    md(`## Esqueleto mínimo`),
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
    conce(
      'Math.random',
      'Número de 0 até quase 1. Multiplique e use if para virar pedra, papel ou tesoura.',
    ),
    tente(
      'Três botões e um <p id="placar">. Cada clique chama as funções, atualiza o texto. Conte vitórias com let pontos = 0. Jogue 5 vezes e confira se as regras batem.',
    ),
    ex(
      'Checklist de pronto: os três botões funcionam, o placar sobe, empate não soma ponto para ninguém, a página não recarrega. Se os quatro estiverem lá, o projeto está feito.',
    ),
  ],
}
