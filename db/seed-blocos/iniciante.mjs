import { md, conce, code, yt, img, tente, ex, proxima } from './helpers.mjs'

export const iniciante = {
  'o-que-e-javascript': [
    md(`JavaScript é a linguagem que faz a página **responder**. O HTML montou o palco. O CSS vestiu. O JS é o que se mexe quando você toca.

Se o [HTML e CSS básico](/aprender/html-css) ainda não entrou, o mapa abaixo ainda vale — só fica mais claro com o palco feito. Esta aula não trava.`),
    img(
      '/images/trilhas/iniciante/tres-camadas.svg',
      'Três faixas: HTML estrutura, CSS visual, JavaScript reação',
      { legenda: 'HTML estrutura, CSS veste, JavaScript reage.' },
    ),
    md(`Quando o site avisa “e-mail inválido” antes de enviar: JavaScript.

Quando o botão soma um ponto sem recarregar a página: JavaScript.

Quando um mapa ou um like atualiza na hora: JavaScript.

Pontos fortes: roda no Chrome de graça. É a língua da web. Dá para começar com uma linha.

Pontos fracos: o nome engana — **não é Java**. É fácil escrever algo que “funciona na minha máquina” e quebra no detalhe. O erro aparece no Console, em vermelho — aula que vem.

As primeiras aulas desta trilha testam no **Console** (F12). Depois o JS mexe na página (arquivo HTML + script.js na mesma pasta).`),
    conce(
      'JavaScript',
      'Linguagem que o navegador entende para a página responder: mudar texto, somar, falar com a internet. Não é Java.',
    ),
    md(`O pedido mais simples: \`console.log('Olá')\`. O Chrome escreve Olá **na aba Console**, não no meio da página.

Como abrir o Console você viu em Antes de começar. Aqui o gesto: F12 (Mac: Cmd+Option+I) → aba **Console** → cole a linha → Enter.

Se aparecer \`undefined\` na linha de baixo, tudo bem: o log funcionou; \`undefined\` é o “essa linha não devolveu valor”.`),
    conce(
      'console.log',
      'Pedido para o Chrome escrever uma mensagem no Console. Não aparece no meio da página.',
    ),
    code(`console.log('Olá')`),
    tente(
      'Abra o Chrome, F12, aba Console. Cole console.log(\'Olá\') e Enter. Tem que aparecer Olá. O zip desta aula, se você abrir o index.html, já deixa uma mensagem no Console — é o mesmo log, vindo do arquivo.',
    ),
    ex('Em uma frase: o que o JavaScript faz que o HTML sozinho não faz?'),
    proxima('Na próxima a mesma janela com calma: onde o erro vermelho aparece e o que ele está dizendo.'),
  ],

  'console-e-devtools': [
    md(`F12 abre as **ferramentas do desenvolvedor**. Tem várias abas. No começo, uma basta: **Console**.

É lá que o \`console.log\` aparece. É lá que o JavaScript grita quando algo não existe.

A aba Elements mostra o HTML. Rede mostra pedidos à internet. Ignore-as hoje.`),
    img(
      '/images/devToolsConsole.jpg',
      'Janela das ferramentas do navegador com a aba Console visível',
      { credito: 'material do projeto', legenda: 'A aba Console é a da mensagem e do erro vermelho.' },
    ),
    conce(
      'DevTools',
      'Ferramentas do Chrome para quem programa. Console (mensagem e erro), Elements (HTML), Rede. Hoje só o Console.',
    ),
    md(`Todo mundo que programa para a web abre isso dezenas de vezes por dia. Sem o Console, você adivinha no escuro.

Digite uma conta e Enter: o Console calcula. Digite um nome que não existe (\`banana\`): aparece vermelho. A palavra **ReferenceError** quer dizer “eu não conheço esse nome”. Não é vírus. É o Chrome pedindo um nome que ninguém declarou.

\`console.error('teste')\` também fica vermelho — você mandou. Útil para marcar “aqui deu ruim” no seu código.`),
    code(`console.log('passo 1')
console.log(2 + 2)
console.error('isso é só um teste de erro')`),
    tente(
      'Chrome, F12, Console. Some 10 + 32 só digitando a conta e Enter. Depois escreva banana e leia o vermelho. Ache a palavra ReferenceError. Depois cole as três linhas do exemplo.',
    ),
    ex('Qual tecla (ou caminho de menu) você usa para abrir o Console no seu computador?'),
    proxima('Na próxima você dá nome às coisas: guarda um valor numa gaveta e troca esse valor depois.'),
  ],

  variaveis: [
    md(`Uma **variável** é um nome que aponta para um valor. Gaveta: o nome na frente; o conteúdo dentro.

No JavaScript de hoje:

- \`let\` — a gaveta **pode** trocar o que está dentro
- \`const\` — a gaveta **não** troca o valor
- \`var\` — jeito antigo. Quase não usamos. Se vir num exemplo velho, leia como “era let, mas antigo”.`),
    conce(
      'let e const',
      'let declara gaveta que pode rechear de novo. const declara gaveta que não troca o valor. Prefira const quando o valor não muda.',
    ),
    md(`Nome da pessoa no formulário: \`const\`. Quantidade no carrinho: \`let\`. Pontos num jogo: \`let\`. Título fixo: \`const\`.

O nome da variável: letra ou \`_\` no começo, sem espaço. \`idade\` sim. \`2idade\` não. \`minha idade\` não.

Esta aula testa **no Console**. O zip, se você abrir o HTML, também roda o mesmo código e já deixa o log lá — mas o exercício abaixo é colar no Console.`),
    code(`let idade = 18
const pais = 'Brasil'
idade = 19
console.log(idade)
console.log(pais)`),
    yt('le-URjBhevE', 'Variables — Beau teaches JavaScript', 'freeCodeCamp.org'),
    tente(
      'Chrome → F12 → Console. Cole let idade = 18 e Enter. Depois idade = 19 e Enter. console.log(idade). Tente pais = \'Outro\' depois de um const pais: leia o erro — você prometeu não trocar.',
    ),
    ex('Quando você usaria const em vez de let? Dê um exemplo da sua vida (nome, quantidade, cidade).'),
    proxima('Na próxima o que está dentro da gaveta: número, texto, verdadeiro ou falso.'),
  ],

  'tipos-de-dados': [
    md(`O computador trata \`42\` diferente de \`"42"\`.

O primeiro é **número** (dá para somar). O segundo é **texto** (dá para colar com outras palavras).

Os tipos que mais aparecem no começo:

- **number** — 10, 3.14, -1
- **string** — texto entre aspas: \`'Ana'\` ou \`"Ana"\`
- **boolean** — verdadeiro ou falso: \`true\` / \`false\` (sem aspas)
- **undefined** — ainda não pus nada nessa gaveta
- **null** — pus de propósito o vazio`),
    conce(
      'tipo',
      'A espécie do valor. typeof pergunta a espécie. typeof 10 dá "number". typeof \'10\' dá "string".',
    ),
    conce(
      'null e undefined',
      'undefined é “ainda não pus nada”. null é “pus de propósito o vazio”. No começo, se der undefined, quase sempre faltou atribuir.',
    ),
    md(`Campo de idade que veio como texto \`"18"\` não entra no \`if (idade >= 18)\` do jeito que você espera. Loja que soma \`"10" + 5\` e ganha \`"105"\` em vez de 15: misturou texto com número.

Aspas fazem string. \`true\` sem aspas é boolean. \`'true'\` é texto.

Teste no **Console**.`),
    code(`typeof 10
typeof '10'
typeof true
typeof undefined
let caixa = null
console.log(typeof caixa)`),
    yt('808eYu9B9Yw', 'Data Types — Beau teaches JavaScript', 'freeCodeCamp.org'),
    tente(
      'No Console (F12): typeof "Ana", typeof 2026, typeof false. As três respostas: string, number, boolean. Depois teste "3" + 1 e 3 + 1. São resultados diferentes — um cola, o outro soma.',
    ),
    ex('O que acontece se você fizer "3" + 1? Teste no Console e explique com a palavra tipo.'),
    proxima('Na próxima você combina valores: somar, colar texto, comparar do jeito que não engana.'),
  ],

  operadores: [
    md(`Operador é o símbolo da conta: \`+ - * / %\`.

O \`+\` com número **soma**. Com texto, **cola** palavras. \`'Tech' + 'Learn'\` vira \`'TechLearn'\`.

Para comparar, use **\`===\`** (três iguais): valor **e** tipo. \`10 === '10'\` é falso. \`10 == '10'\` (dois iguais) tenta converter e vira verdadeiro — isso engana.

\`>\` \`<\` \`>=\` \`<=\` comparam tamanho.

\`&&\` é “e”: os dois lados verdadeiros. \`||\` é “ou”: um dos dois basta. \`!\` inverte verdadeiro/falso.`),
    conce(
      '===',
      'Compara valor e tipo. 10 e "10" não são a mesma coisa. Use === no dia a dia. Evite == em código novo.',
    ),
    code(`console.log(10 + 5)
console.log('Tech' + 'Learn')
console.log(10 === 10)
console.log(10 === '10')
console.log(10 == '10')
console.log(7 > 3 && 7 < 10)`),
    tente(
      'No Console: 7 > 3, 7 === "7", 7 == "7". Qual deu false? Esse é o === te protegendo. Depois escreva uma conta com && que só é verdadeira se os dois lados forem verdadeiros.',
    ),
    ex('Escreva uma comparação que só é verdadeira se idade for pelo menos 18 (use >=). Cole no Console com uma idade de teste.'),
    proxima('Na próxima o programa escolhe um caminho: se a pergunta for sim, faz A; senão, faz B.'),
  ],

  'if-else': [
    md(`\`if\` lê uma pergunta. Os parênteses guardam a pergunta. As chaves \`{ }\` guardam o que fazer se a resposta for sim.

\`else\` é o “caso contrário”. \`else if\` é “senão, pergunta de novo”.

A pergunta tem que virar verdadeiro ou falso. \`idade >= 18\` é uma pergunta. \`idade = 18\` **não** é: um igual só *atribui*, não compara. Comparar é \`===\` ou \`>=\`.`),
    conce(
      'condição',
      'Expressão que vira verdadeiro ou falso. É o que vai dentro do if. Ex.: idade >= 18.',
    ),
    md(`Site que mostra “Bom dia” ou “Boa noite” conforme a hora. Formulário que só envia se o campo não está vazio. Jogo que diz quem ganhou.

Cole o bloco **inteiro** no Console. Uma linha solta de \`if\` sem as chaves vira dor de cabeça no começo — use as chaves sempre.`),
    code(`const hora = 14
if (hora < 12) {
  console.log('Bom dia')
} else if (hora < 18) {
  console.log('Boa tarde')
} else {
  console.log('Boa noite')
}`),
    tente(
      'No Console, cole o bloco com hora = 14. Tem que aparecer Boa tarde. Mude para 9, cole de novo: Bom dia. Depois 20: Boa noite. O const hora não deixa você só escrever hora = 9 na linha de baixo se já existia — recarregue o Console (limpe) ou use let.',
    ),
    ex('Escreva um if que imprime "pode dirigir" se idade for >= 18, e "espera um pouco" no else. Rode no Console com dois valores.'),
    proxima('Na próxima o computador repete uma ação um número certo de vezes, sem você copiar a linha 20 vezes.'),
  ],

  loops: [
    md(`\`for\` é o mais comum no começo: começa em 0, enquanto \`i < 5\`, soma 1 a cada volta.

Leia em voz alta: “i começa em 0; enquanto i for menor que 5; no fim de cada volta, i ganha 1”.

\`while\` repete *enquanto* a condição for verdadeira. Se você esquecer de mudar a variável da condição, o loop **não acaba**. O Chrome trava. Sempre pergunte: **quando isso acaba?**

Não rode um while infinito nesta página. Se travar, feche a aba.`),
    conce(
      'loop',
      'Repetição controlada. Sem a condição de parada, a página trava. Sempre pergunte: quando isso acaba?',
    ),
    code(`for (let i = 0; i < 5; i = i + 1) {
  console.log('volta', i)
}

let n = 3
while (n > 0) {
  console.log(n)
  n = n - 1
}`),
    tente(
      'No Console, some os números de 1 a 10 com um for. Use let soma = 0 e some i dentro do loop. console.log(soma) no fim — tem que dar 55. Se o Console “pensar” demais, você esqueceu de parar o while: feche a aba.',
    ),
    ex('O que aconteceria se no while você esquecesse n = n - 1? Não rode isso no site — só explique.'),
    proxima('Na próxima você empacota um pedaço de código com nome e chama quando quiser.'),
  ],

  funcoes: [
    md(`Função é uma receita. Você define uma vez. Chama várias. Os **parâmetros** são os ingredientes. O \`return\` devolve o prato pronto e **para** a função.

Sem \`return\`, o resultado é \`undefined\`. \`console.log\` *mostra* algo no Console. \`return\` *devolve* algo para quem chamou. São trabalhos diferentes. Um não substitui o outro.

\`function somar(a, b) { return a + b }\` — a e b são parâmetros. \`somar(2, 3)\` é a chamada. O 5 sai no return.`),
    conce(
      'return',
      'Devolve um valor para quem chamou a função e para a função. Sem return, o resultado é undefined.',
    ),
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
      'No Console: escreva function dobro(n) { return n * 2 } e chame dobro(7). Tem que imprimir 14 se você der console.log no resultado. Sem o console.log, o 14 existe mas você não vê.',
    ),
    ex('Qual a diferença entre console.log dentro da função e return? Quando cada um serve?'),
    proxima('Na próxima você guarda vários valores numa lista — e o primeiro item é o 0, não o 1.'),
  ],

  arrays: [
    md(`Array é uma fila. O número da posição se chama **índice**. Zero é o começo. \`frutas[1]\` é o *segundo* item.

Isso não é capricho: é o combinado da linguagem. Errar por um é o bug mais comum do começo.

\`length\` é quantos itens existem agora. \`push\` coloca um item no fim.

As aspas na lista de texto: \`['açaí', 'manga']\`. Sem aspas, o JS procura variáveis com esses nomes.`),
    conce(
      'índice',
      'Posição na lista, começando em 0. frutas[1] é o segundo item. length é quantos itens existem agora.',
    ),
    code(`const frutas = ['açaí', 'manga', 'caju']
console.log(frutas[0])
console.log(frutas.length)
frutas.push('goiaba')
for (let i = 0; i < frutas.length; i = i + 1) {
  console.log(frutas[i])
}`),
    tente(
      'No Console: crie const notas = [7, 8, 9] e calcule a média — some no for e divida por notas.length. console.log da média. Se der NaN, algum índice passou do fim da lista.',
    ),
    ex('Se a lista tem 4 itens, qual é o índice do último? Por que não é 4?'),
    proxima('Na próxima a coisa do mundo real ganha nome nas chaves: um aluno, uma aula — não uma fila 0, 1, 2.'),
  ],

  objetos: [
    md(`Objeto não usa índice 0, 1, 2. Usa **chaves** com nome: \`nome\`, \`idade\`, \`cidade\`.

Pense numa ficha, não numa fila.

Ponto (\`aluno.nome\`) é o jeito mais comum de ler. Colchetes (\`aluno['cidade']\`) servem quando o nome da chave está numa variável.

Lista de notas = array. Ficha de um aluno = objeto. Lista de alunos = array de objetos.`),
    conce(
      'objeto',
      'Coleção de pares chave/valor. Ponto (aluno.nome) é o jeito mais comum. Colchetes servem quando o nome da chave está numa variável.',
    ),
    code(`const aluno = {
  nome: 'Lia',
  cidade: 'Recife',
  idade: 19
}
console.log(aluno.nome)
console.log(aluno['cidade'])
aluno.idade = 20`),
    tente(
      'No Console, modele const aula = { titulo: \'Variáveis\', minutos: 20 } e imprima aula.titulo. Depois mude aula.minutos e log de novo.',
    ),
    ex('Qual a diferença prática entre array e objeto? Pense: lista de notas vs ficha de um aluno.'),
    proxima('Na próxima o JavaScript aponta para um título na *página* e troca o texto. Até agora tudo foi no Console.'),
  ],

  dom: [
    md(`Até agora o JS só falou no Console. Para mexer no que a pessoa *vê*, o Chrome transforma o HTML numa árvore de peças. Essa árvore se chama **DOM**.

A bancada muda: **pasta + Chrome**. Dois arquivos na mesma pasta.`),
    img(
      '/images/trilhas/javascript/pasta-js.svg',
      'Pasta minha-aula com index.html e script.js',
      { legenda: 'Abra o HTML. O script.js precisa estar ao lado. [Como abrir](/aprender/comecar/baixar-e-abrir).' },
    ),
    md(`Você já deu \`id\` no HTML básico. Aqui o JS usa esse gancho.

No HTML, no body: \`<h1 id="titulo">Olá</h1>\`

No JS: \`document.querySelector('#titulo')\` — “cadê o id titulo?”. A cerquilha é a mesma do CSS.

\`textContent\` troca o texto que a pessoa lê.

Se a peça não existir, o JS acha \`null\`. Aí a próxima linha quebra. Causas comuns: id diferente entre HTML e JS; script no \`head\` rodando **antes** do body existir. Coloque o \`<script src="script.js">\` no **fim do body**.`),
    conce(
      'DOM',
      'Document Object Model: o mapa da página em forma de objetos. querySelector acha uma peça. textContent troca o texto.',
    ),
    code(`const titulo = document.querySelector('#titulo')
titulo.textContent = 'Aula de DOM'`),
    md(`Cor (\`titulo.style.color\`) é o passo seguinte, não o primeiro. Primeiro: achar e trocar o texto. Se isso funcionar, a ponte HTML↔JS está de pé.`),
    tente(
      'Baixe o zip, extraia, abra a pasta no VS Code, abra index.html no Chrome. O título tem que mudar sozinho. No script.js, troque a string do textContent, Ctrl+S, F5. Se der erro de null no Console: o id do HTML não bate com o do JS, ou o script subiu antes do HTML.',
    ),
    ex('Por que querySelector(\'#titulo\') usa a cerquilha? O que ela indica?'),
    proxima('Na próxima um botão na página reage ao clique — sem recarregar.'),
  ],

  eventos: [
    md(`**Evento** é algo que acontece: clique, tecla, envio de formulário. \`addEventListener\` fica de ouvido.

Continua na pasta: \`index.html\` + \`script.js\`. O HTML desta aula já tem um botão \`id="btn"\` e um parágrafo \`id="saida"\`.`),
    img(
      '/images/trilhas/javascript/pasta-js.svg',
      'Pasta com index.html e script.js',
    ),
    conce(
      'addEventListener',
      'Diz: quando este evento acontecer nesta peça, rode esta função. O primeiro argumento é o nome do evento, em inglês: click, input, submit.',
    ),
    code(`const botao = document.querySelector('#btn')
const saida = document.querySelector('#saida')
let cliques = 0

botao.addEventListener('click', function () {
  cliques = cliques + 1
  saida.textContent = 'Cliques: ' + cliques
})`),
    md(`A função dentro do \`addEventListener\` só roda **quando** o clique vem. Não rode ela na mão no começo.

Se o script estiver no head, \`querySelector('#btn')\` acha null: o botão ainda não existe. Fim do body.`),
    tente(
      'Abra o zip no Chrome. Cada clique deve somar 1 no parágrafo. Se der null, os ids não batem. Mude o texto do botão no HTML (body) e recarregue — o JS continua ouvindo o mesmo id.',
    ),
    ex('O que a página faria se você pusesse o JS no <head> sem esperar o HTML? (Pista: querySelector acharia null.)'),
    proxima('Na próxima você junta o iniciante num joguinho: o computador escolhe, você clica, o placar sobe na tela.'),
  ],

  'projeto-pedra-papel-tesoura': [
    md(`No final existem, na tela, três botões (Pedra, Papel, Tesoura), um placar, e uma frase dizendo quem ganhou a rodada. Você joga contra o computador. Sem recarregar.

O que desta trilha entra: variáveis para os pontos, função que sorteia, \`if\` para o resultado, clique, \`textContent\` para o placar. Não é aula nova. É cola.

Pasta: \`index.html\`, \`estilos.css\`, \`script.js\`. O CSS dos três botões em fila é o flex da trilha HTML.`),
    img(
      '/images/trilhas/javascript/pasta-js.svg',
      'Pasta da aula com HTML e script (e CSS no zip)',
    ),
    code(`function jogadaComputador() {
  const n = Math.random()
  if (n < 0.33) return 'pedra'
  if (n < 0.66) return 'papel'
  return 'tesoura'
}`),
    conce(
      'Math.random',
      'Número de 0 até quase 1. Com if, vira pedra, papel ou tesoura.',
    ),
    md(`O zip já monta a página e o script comentado. Leia o \`script.js\` de cima a baixo. Cada bloco tem recado. Jogue. Se o placar não sobe, abra o Console (F12): o erro vermelho aponta a linha.`),
    tente(
      'Extraia o zip, abra index.html. Os três botões funcionam, o placar sobe, empate não soma ponto, a página não recarrega. Jogue 5 vezes. Se faltar um dos quatro, o projeto não fechou.',
    ),
    ex(
      'Checklist: três botões, placar, empate sem ponto, página quieta. Qual peça veio do HTML (id, botão) e qual veio do JS (if, função)?',
    ),
  ],
}
