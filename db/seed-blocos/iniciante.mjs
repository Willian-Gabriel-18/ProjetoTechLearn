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

O ponto no meio (\`console.log\`) é o jeito do JavaScript de pedir uma **ferramenta** de um valor. \`console\` é a peça; \`log\` é a ação. Isso vai voltar nas aulas de texto, lista e ficha.

Como abrir o Console você viu em [Duas bancadas](/aprender/comecar/duas-bancadas). Aqui o gesto: F12 (Mac: Cmd+Option+I) → aba **Console** → cole a linha → Enter.

Se aparecer \`undefined\` na linha de baixo, tudo bem: o log funcionou; \`undefined\` é o “essa linha não devolveu valor”.

Recado para você, não para o Chrome: comece a linha com \`//\`. É **comentário**. O Chrome ignora. Serve para lembrar o que a linha faz.`),
    conce(
      'console.log',
      'Pedido para o Chrome escrever uma mensagem no Console. O ponto liga a peça (console) à ação (log). Não aparece no meio da página.',
    ),
    conce(
      'comentário',
      'Linha que começa com // . O Chrome não executa. É recado para quem lê o código (você).',
    ),
    code(`// Isto não aparece no Console. É recado para você.
console.log('Olá')`),
    tente(
      'Abra o Chrome, F12, aba Console. Cole console.log(\'Olá\') e Enter. Tem que aparecer Olá. O zip desta aula, se você abrir o index.html, já deixa uma mensagem no Console — é o mesmo log, vindo do arquivo.',
    ),
    ex(
      'Em uma frase: o que o JavaScript faz que o HTML sozinho não faz?',
      'JavaScript faz a página **responder**: mudar texto, somar, avisar e-mail inválido, sem recarregar. HTML só monta o palco. Sem JS a página só *está lá*.',
    ),
    proxima(
      'Na próxima a mesma janela com calma: onde o erro vermelho aparece e o que ele está dizendo.',
      '/aprender/javascript/console-e-devtools',
      'O Console e as ferramentas do navegador',
    ),
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
    ex(
      'Qual tecla (ou caminho de menu) você usa para abrir o Console no seu computador?',
      'No Windows: **F12**, depois a aba Console. No Mac: **Cmd+Option+I** (F12 às vezes não abre). Pelo menu: Exibir → Opções do desenvolvedor → Console. O resultado do `console.log` aparece nessa aba, não no meio da página.',
    ),
    proxima(
      'Na próxima você dá nome às coisas: guarda um valor numa gaveta e troca esse valor depois.',
      '/aprender/javascript/variaveis',
      'Guardar valores — variáveis',
    ),
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

O nome da variável: letra ou \`_\` no começo, sem espaço. \`idade\` sim. \`2idade\` não. \`minha idade\` não. No JavaScript o combinado é **camelCase**: \`minhaIdade\`, não \`minha_idade\`.

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
    ex(
      'Quando você usaria const em vez de let? Dê um exemplo da sua vida (nome, quantidade, cidade).',
      '`const` quando o valor **não troca**: seu nome, o título da página, o país. `let` quando troca: quantidade no carrinho, pontos do jogo, idade que você atualiza. Prefira const; use let só se for rechear de novo.',
    ),
    proxima(
      'Na próxima o que está dentro da gaveta: número, texto, verdadeiro ou falso.',
      '/aprender/javascript/tipos-de-dados',
      'Tipos de dados',
    ),
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
    conce(
      'propriedade e método',
      'Propriedade é um dado grudado no valor: \'Ana\'.length. Método é uma ação grudada: \'Ana\'.toUpperCase(). O ponto liga; o método leva parênteses.',
    ),
    md(`Campo de idade que veio como texto \`"18"\` não entra no \`if (idade >= 18)\` do jeito que você espera. Loja que soma \`"10" + 5\` e ganha \`"105"\` em vez de 15: misturou texto com número.

Aspas fazem string. \`true\` sem aspas é boolean. \`'true'\` é texto.

Texto e número vêm com **ferramentas no ponto** — o mesmo ponto de \`console.log\`.

- \`'Ana'.length\` — quantas letras. Isso é uma **propriedade** (um dado grudado).
- \`'Ana'.toUpperCase()\` — vira \`'ANA'\`. Isso é um **método** (uma ação grudada). Os parênteses chamam a ação.

\`2 * 'a'\` não é número. O Console mostra \`NaN\`: “não é um número”. Não é um tipo para guardar de propósito; é o recado de uma conta que não deu.

Teste no **Console**.`),
    code(`typeof 10
typeof '10'
typeof true
console.log('Ana'.length)
console.log('Ana'.toUpperCase())
console.log(2 * 'a')
let caixa = null
console.log(typeof caixa)`),
    yt('808eYu9B9Yw', 'Data Types — Beau teaches JavaScript', 'freeCodeCamp.org'),
    tente(
      'No Console (F12): typeof "Ana", typeof 2026, typeof false. As três respostas: string, number, boolean. Depois "Ana".length e "Ana".toUpperCase(). Por fim teste "3" + 1 e 3 + 1 — um cola, o outro soma.',
    ),
    ex(
      'O que acontece se você fizer "3" + 1? Teste no Console e explique com a palavra tipo.',
      'Vira `"31"`, não 4. `"3"` é **string** (texto). O `+` com texto **cola**. `3 + 1` (número) soma e dá 4. `typeof "3"` é `"string"`; `typeof 3` é `"number"`.',
    ),
    proxima(
      'Na próxima você combina valores: somar, colar texto, comparar do jeito que não engana.',
      '/aprender/javascript/operadores',
      'Contas e comparações — operadores',
    ),
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
    ex(
      'Escreva uma comparação que só é verdadeira se idade for pelo menos 18 (use >=). Cole no Console com uma idade de teste.',
      '`idade >= 18`. Com `let idade = 18` dá `true`. Com `17` dá `false`. `>=` é “pelo menos”. Não use um `=` só (isso atribui, não compara) nem `==` (engana no tipo).',
    ),
    proxima(
      'Na próxima o programa escolhe um caminho: se a pergunta for sim, faz A; senão, faz B.',
      '/aprender/javascript/if-else',
      'Decidir — if e else',
    ),
  ],

  'if-else': [
    md(`\`if\` lê uma pergunta. Os parênteses guardam a pergunta. As chaves \`{ }\` guardam o que fazer se a resposta for sim.

\`else\` é o “caso contrário”. \`else if\` é “senão, pergunta de novo”.

A pergunta tem que virar verdadeiro ou falso. \`idade >= 18\` é uma pergunta. \`idade = 18\` **não** é: um igual só *atribui*, não compara. Comparar é \`===\` ou \`>=\`.

O \`if\` também trata alguns valores como “não”: \`''\` (texto vazio) e \`0\`. \`if ('') { ... }\` não entra. Não precisa decorar uma lista; se o campo veio vazio, o if vê isso como não.`),
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
    ex(
      'Escreva um if que imprime "pode dirigir" se idade for >= 18, e "espera um pouco" no else. Rode no Console com dois valores.',
      'No Console: `const idade = 18` e depois `if (idade >= 18) { console.log(\'pode dirigir\') } else { console.log(\'espera um pouco\') }`. Com 18 aparece “pode dirigir”. Troque para 16 e rode de novo: cai no `else`. A pergunta mora nos parênteses; o que fazer, nas chaves.',
    ),
    proxima(
      'Na próxima o computador repete uma ação um número certo de vezes, sem você copiar a linha 20 vezes.',
      '/aprender/javascript/loops',
      'Repetir — loops',
    ),
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
    ex(
      'O que aconteceria se no while você esquecesse n = n - 1? Não rode isso no site — só explique.',
      '`n` nunca muda. A condição `n > 0` continua verdadeira para sempre. O loop **não acaba** e o Chrome trava. Sempre pergunte: quando isso acaba? No `for`, o `i = i + 1` no fim de cada volta faz o mesmo papel.',
    ),
    proxima(
      'Na próxima você empacota um pedaço de código com nome e chama quando quiser.',
      '/aprender/javascript/funcoes',
      'Funções — um bloco com nome',
    ),
  ],

  funcoes: [
    md(`Sem função, você copia a mesma conta em quatro lugares. Muda um, esquece os outros. Função é o nome desse pedaço: você **declara** uma vez e **chama** quando quiser.

Dois momentos, não misture:

1. **Declarar** — escrever a receita. \`function somar(a, b) { return a + b }\`. Ainda não somou nada.
2. **Chamar** — usar a receita. \`somar(2, 3)\`. Agora sim: entra 2 e 3, sai 5.

**Parâmetro** é o nome na receita (\`a\`, \`b\`). **Argumento** é o valor na chamada (\`2\`, \`3\`). O primeiro parâmetro recebe o primeiro argumento.

O \`return\` devolve o prato e **para** a função. Sem \`return\`, o resultado é \`undefined\`.

\`console.log\` *mostra* no Console. \`return\` *devolve* para quem chamou, para você guardar numa variável. Um não substitui o outro. \`cumprimentar\` só fala; \`somar\` precisa devolver o número.`),
    conce(
      'função',
      'Pedaço de código com nome. Declara uma vez (function …), chama quando quiser (nome()). Parâmetro = nome na receita. Argumento = valor na chamada.',
    ),
    conce(
      'return',
      'Devolve um valor para quem chamou e para a função. Sem return, o resultado é undefined.',
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
      'No Console: escreva function dobro(n) { return n * 2 } — isso é declarar. Depois chame dobro(7) e dê console.log no resultado: 14. Sem o log, o 14 existe mas você não vê. Troque o argumento 7 por 10.',
    ),
    ex(
      'Qual a diferença entre declarar a função e chamá-la? E, na chamada, o que é parâmetro e o que é argumento?',
      'Declarar é escrever `function somar(a, b) { … }` — a receita ainda não rodou. Chamar é `somar(2, 3)` — agora entra valor. `a` e `b` são **parâmetros** (nomes). `2` e `3` são **argumentos** (valores). `return` devolve o resultado; `console.log` só mostra.',
    ),
    proxima(
      'Na próxima você guarda vários valores numa lista — e o primeiro item é o 0, não o 1.',
      '/aprender/javascript/arrays',
      'Listas — arrays',
    ),
  ],

  arrays: [
    md(`Array é uma fila. O número da posição se chama **índice**. Zero é o começo. \`frutas[1]\` é o *segundo* item.

Isso não é capricho: é o combinado da linguagem. Errar por um é o bug mais comum do começo.

\`length\` é quantos itens existem agora — uma **propriedade**, como \`'Ana'.length\`. \`push\` coloca um item no fim — um **método**, por isso leva parênteses: \`frutas.push('goiaba')\`. A lista é um valor com ferramentas no ponto, o mesmo da aula de tipos.

As aspas na lista de texto: \`['açaí', 'manga']\`. Sem aspas, o JS procura variáveis com esses nomes.`),
    conce(
      'índice',
      'Posição na lista, começando em 0. frutas[1] é o segundo item. length (propriedade) é quantos itens. push (método) coloca no fim.',
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
    ex(
      'Se a lista tem 4 itens, qual é o índice do último? Por que não é 4?',
      'O último é o índice **3**. A lista começa em 0: 0, 1, 2, 3. Quatro itens, o 4 não existe — `lista[4]` é `undefined`. `length` é 4 (quantos itens); o último índice é `length - 1`.',
    ),
    proxima(
      'Na próxima a coisa do mundo real ganha nome nas chaves: um aluno, uma aula — não uma fila 0, 1, 2.',
      '/aprender/javascript/objetos',
      'Fichas — objetos simples',
    ),
  ],

  objetos: [
    md(`Objeto não usa índice 0, 1, 2. Usa **chaves** com nome: \`nome\`, \`idade\`, \`cidade\`.

Pense numa ficha, não numa fila. Cada chave é uma **propriedade** da ficha.

Ponto (\`aluno.nome\`) é o jeito mais comum de ler. Colchetes (\`aluno['cidade']\`) servem quando o nome da chave está numa variável.

A chave também pode guardar uma **função**. Aí o nome muda: é um **método** da ficha. Chama com ponto e parênteses: \`conta.mostrar()\`. Nesta aula o método usa o nome da ficha (\`conta.saldo\`), sem a palavra \`this\` — isso fica no [avançado](/aprender/javascript/this).

Lista de notas = array. Ficha de um aluno = objeto. Lista de alunos = array de objetos.`),
    conce(
      'objeto',
      'Ficha de pares chave/valor. Cada chave é uma propriedade. Se o valor for uma função, essa chave é um método (conta.mostrar()).',
    ),
    code(`const aluno = {
  nome: 'Lia',
  cidade: 'Recife',
  idade: 19
}
console.log(aluno.nome)
console.log(aluno['cidade'])
aluno.idade = 20

const conta = {
  saldo: 10,
  mostrar: function () {
    console.log(conta.saldo)
  }
}
conta.mostrar()

const turma = [
  { nome: 'Lia', cidade: 'Recife' },
  { nome: 'Bia', cidade: 'Manaus' }
]
console.log(turma[0].nome)`),
    tente(
      'No Console, modele const aula = { titulo: \'Variáveis\', minutos: 20 } e imprima aula.titulo. Depois mude aula.minutos e log de novo. Em seguida cole o objeto conta e chame conta.mostrar().',
    ),
    ex(
      'Qual a diferença prática entre array e objeto? E o que é um método da ficha?',
      '**Array** é fila: índice 0, 1, 2. Lista de notas. **Objeto** é ficha: chaves com nome (`nome`, `idade`). Um aluno. Lista de alunos = array de objetos. **Método** é uma função guardada numa chave: `conta.mostrar()` — ponto e parênteses. Propriedade é o dado (`conta.saldo`).',
    ),
    proxima(
      'Na próxima o JavaScript aponta para um título na *página* e troca o texto. Até agora tudo foi no Console.',
      '/aprender/javascript/dom',
      'A página é uma árvore — DOM',
    ),
  ],

  dom: [
    md(`Até agora o JS só falou no Console. Para mexer no que a pessoa *vê*, o Chrome transforma o HTML numa árvore de peças. Essa árvore se chama **DOM**.

A bancada muda: **pasta + Chrome**. Dois arquivos na mesma pasta. [Como baixar e abrir](/aprender/comecar/baixar-e-abrir).`),
    img(
      '/images/trilhas/javascript/pasta-js.svg',
      'Pasta minha-aula com index.html e script.js',
      { legenda: 'Abra o HTML. O script.js precisa estar ao lado, na mesma pasta.' },
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
    ex(
      'Por que querySelector(\'#titulo\') usa a cerquilha? O que ela indica?',
      'A cerquilha é o **id**, o mesmo sinal do CSS. `querySelector(\'#titulo\')` pergunta: cadê a peça com `id="titulo"`? Ponto seria class (`.card`). Sem sinal, seria o nome da tag.',
    ),
    proxima(
      'Na próxima um botão na página reage ao clique — sem recarregar.',
      '/aprender/javascript/eventos',
      'Clique e outros eventos',
    ),
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
    ex(
      'O que a página faria se você pusesse o JS no <head> sem esperar o HTML? (Pista: querySelector acharia null.)',
      'O script no head roda **antes** do body existir. `querySelector(\'#btn\')` acha `null`. A próxima linha que usa o botão quebra. Por isso o `<script src="script.js">` vai no **fim do body**.',
    ),
    proxima(
      'Na próxima você junta o iniciante num joguinho: o computador escolhe, você clica, o placar sobe na tela.',
      '/aprender/javascript/projeto-pedra-papel-tesoura',
      'Mini-projeto: Pedra, papel e tesoura',
    ),
  ],

  'projeto-pedra-papel-tesoura': [
    md(`No final existem, na tela, três botões (Pedra, Papel, Tesoura), um placar, e uma frase dizendo quem ganhou a rodada. Você joga contra o computador. Sem recarregar.

O que desta trilha entra: variáveis para os pontos, função que sorteia, \`if\` para o resultado, clique, \`textContent\` para o placar. Não é aula nova. É cola.

Pasta: \`index.html\`, \`estilos.css\`, \`script.js\`. O CSS dos três botões em fila é o [flex da trilha HTML](/aprender/html-css/caixa-e-lado-a-lado).`),
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
      `Na tela, os quatro pontos do checklist têm que estar lá.

Do **HTML**: os três \`button\`, os ids (\`placar\`, \`rodada\`), o \`div\` dos botões. Do **CSS**: a fila (\`display: flex\`), da aula de caixa. Do **JS**: a função que sorteia, o \`if\` de quem ganhou, o \`addEventListener\` no clique, o \`textContent\` do placar.

Empate não soma ponto. A página não recarrega. Se o placar não sobe, o Console (F12) aponta a linha. O zip comentado é a cola.`,
    ),
    proxima(
      'O iniciante fechou. A próxima é o intermediário: map, filter e listas sem um for gigante.',
      '/aprender/javascript/arrays-map-filter',
      'Arrays com superpoderes',
    ),
  ],
}
