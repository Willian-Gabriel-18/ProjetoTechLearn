import { md, conce, code, img, tente, ex, proxima } from './helpers.mjs'

export const htmlCss = {
  'o-que-e-uma-pagina': [
    md(`## O que você vai conseguir

Abrir um arquivo \`.html\` no Chrome e ver uma página. Saber o que HTML, CSS e JavaScript fazem — cada um o seu trabalho.`),
    md(`## Três camadas, um site

Um site que você abre no navegador é, na prática, três linguagens juntas.

**HTML** é a estrutura. Títulos, parágrafos, botões, campos. Sem HTML não há página — só tela vazia.

**CSS** é o visual. Cor, tamanho da letra, espaço. Sem CSS a página existe, mas parece um documento cru.

**JavaScript** é a reação. Clique, conta, troca um texto sem recarregar. Sem JS a página só *está lá*.

Esta trilha é o palco: HTML e CSS. JavaScript tem trilha própria, depois.`),
    img(
      '/images/trilhas/iniciante/tres-camadas.svg',
      'Três faixas: HTML estrutura, CSS visual, JavaScript reação',
      { legenda: 'De cima para baixo: HTML estrutura, CSS veste, JavaScript reage.' },
    ),
    conce(
      'HTML',
      'Linguagem que descreve a estrutura da página: o que é título, o que é parágrafo, o que é botão.',
    ),
    md(`## Um arquivo, um duplo clique

HTML vive num arquivo de texto com extensão \`.html\`. Você escreve no editor, salva, e abre no Chrome (arrastar o arquivo para a janela, ou Arquivo → Abrir).

Não precisa de internet para uma página só sua. O navegador lê o arquivo e desenha.`),
    md(`## Exemplo mínimo desta aula`),
    code(
      `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Minha primeira página</title>
  </head>
  <body>
    <p>Olá. Isto é uma página.</p>
  </body>
</html>`,
      'html',
    ),
    tente(
      'Baixe o arquivo desta aula, salve numa pasta e abra no Chrome. Tem que aparecer a frase. Depois mude o texto entre <p> e </p>, salve, e recarregue (F5).',
    ),
    ex('Em uma frase: o que o HTML faz que o CSS sozinho não faz?'),
    proxima(
      'Na próxima aula o botão de baixar deixa de ser mistério: extrair o zip, abrir no Chrome e ver o JavaScript no Console.',
    ),
  ],

  'abrir-o-arquivo': [
    md(`## O que você vai conseguir

Baixar o pacote da aula, extrair se for zip, abrir no Chrome e conferir o JavaScript no Console. Sem isso, o botão de baixar não serve.`),
    md(`## O botão no fim da aula

Toda aula que trabalha com código tem um botão **Baixar**. Às vezes é um arquivo só (\`.html\`). Às vezes é um \`.zip\` com dois ou três arquivos que precisam ficar **na mesma pasta**.

O navegador guarda o download na pasta Downloads (ou Perguntar onde salvar, se você configurou).`),
    conce(
      'zip',
      'Pacote compactado. Dentro vêm os arquivos da aula. Você extrai e só então abre o HTML. Não abra o zip como se fosse a página.',
    ),
    md(`## Se for um arquivo só

Dois cliques no \`.html\`, ou arraste para a janela do Chrome (Arquivo → Abrir também vale). A página aparece. Não precisa de internet.

Mude o texto no editor (Bloco de Notas, VS Code, o que você tiver), salve, volte no Chrome e aperte F5.`),
    md(`## Se for um zip

1. Botão direito no zip → Extrair / Extract / Descompactar. No Windows, “Extrair tudo”. No Mac, dois cliques. No Linux, “Extrair aqui”.
2. Entre na pasta que saiu. Tem que existir um \`index.html\` (e, nesta aula, um \`script.js\`).
3. Abra o \`index.html\` no Chrome. Se o HTML não achar o JS, os dois não estão na mesma pasta.

Não abra o \`script.js\` no Chrome esperando ver a página. O JS é o cérebro; o HTML é a cara.`),
    md(`## O JavaScript já rodou. O Console mostra.

Este pacote tem HTML **e** JS. A página mostra uma frase. O script escreve outra no **Console**.

F12 (no Mac, Cmd+Option+I) abre as ferramentas. Aba **Console**. Tem que aparecer a mensagem do \`script.js\`.

Se a página abriu e o Console está vazio: o \`<script src="script.js">\` não achou o arquivo. Volte na pasta e confira os dois nomes.`),
    conce(
      'Console',
      'Aba das ferramentas do navegador (F12) onde o JavaScript escreve mensagem e erro. Não é o meio da página.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(
      `<!-- index.html: a cara. O script no fim do body já chama o JS. -->
<p id="frase">Se você lê isto no Chrome, o HTML abriu.</p>
<script src="script.js"></script>`,
      'html',
    ),
    code(
      `// script.js: o cérebro. Roda sozinho quando a página abre.
console.log('O JavaScript também rodou.')
document.querySelector('#frase').textContent =
  'HTML aberto. JS também — olhe o Console (F12).'`,
      'javascript',
    ),
    tente(
      'Baixe o zip desta aula. Extraia. Abra index.html no Chrome. A frase na página tem que mudar. F12 → Console: a mensagem do script tem que estar lá. Se a frase não mudar, HTML e JS não estão na mesma pasta.',
    ),
    ex('Por que abrir só o script.js no Chrome não mostra a página?'),
    proxima(
      'Na próxima aula o esqueleto da página: cabeça, corpo, acentuação e celular.',
    ),
  ],

  esqueleto: [
    md(`## O que você vai conseguir

Montar o esqueleto de toda página: doctype, html, head, body, charset, title e viewport.`),
    md(`## Cada peça tem um lugar

\`<!DOCTYPE html>\` avisa o navegador: isto é HTML de verdade, não um documento antigo.

\`<html lang="pt-BR">\` é a raiz. O \`lang\` ajuda o leitor de tela e o corretor.

**head** é o que a pessoa *não* vê no meio da página: título da aba, letras, links para CSS.

**body** é o que aparece.

\`charset="utf-8"\` faz acento não virar símbolo estranho. Sem isso, “você” pode aparecer quebrado.

\`viewport\` pede ao celular para não encolher a página como se fosse um pôster minúsculo.`),
    conce(
      'head e body',
      'head = informações da página (aba, letras). body = o que aparece na tela.',
    ),
    conce(
      'viewport',
      'Instrução para o celular desenhar na largura da tela, não numa tela de computador reduzida.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(
      `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Esqueleto</title>
  </head>
  <body>
    <p>O esqueleto está no lugar.</p>
  </body>
</html>`,
      'html',
    ),
    tente(
      'Abra o arquivo baixado. Olhe a aba do Chrome: o título tem que ser Esqueleto. Troque o <title> e recarregue. No celular (ou no modo celular do F12), a página não deve ficar minúscula.',
    ),
    ex('Onde vai o título da aba: no head ou no body?'),
    proxima('Na próxima aula o body ganha texto de verdade: títulos e parágrafos.'),
  ],

  'texto-e-titulos': [
    md(`## O que você vai conseguir

Escrever um título principal, subtítulos e parágrafos — e marcar ênfase sem gritar a página inteira.`),
    md(`## Hierarquia, não tamanho

\`<h1>\` é o título da página. Um por página. \`<h2>\` e \`<h3>\` são seções. Não use h1 só porque “fica grande”: o tamanho vem depois, no CSS.

\`<p>\` é um parágrafo. Cada ideia, um p.

\`<strong>\` é importância. \`<em>\` é ênfase. No visual costumam virar negrito e itálico — o sentido é o que importa.`),
    conce(
      'h1',
      'Título principal da página. Um só. h2 e h3 organizam o que vem abaixo, como capítulos.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(
      `<h1>Bolo de fubá</h1>
<p>Receita curta para um lanche.</p>
<h2>Ingredientes</h2>
<p>Fubá, ovos, leite e um pouco de <strong>paciência</strong>.</p>
<p>O cheiro <em>importa</em> mais que o relógio.</p>`,
      'html',
    ),
    tente(
      'No arquivo baixado, acrescente um h2 “Modo de fazer” e um parágrafo seu. Recarregue. O h1 continua um só.',
    ),
    ex('Por que não colocar três h1 numa página só para “ficar grande”?'),
    proxima('Na próxima aula: links, imagens com texto alternativo, e listas.'),
  ],

  'links-imagens-listas': [
    md(`## O que você vai conseguir

Fazer um link que abre outra página, uma imagem com \`alt\`, e uma lista com marcador ou número.`),
    md(`## Três tags do dia a dia

Link: \`<a href="https://...">texto visível</a>\`. O \`href\` é o destino. O texto entre as tags é o que a pessoa lê.

Imagem: \`<img src="arquivo.jpg" alt="descrição curta">\`. Não tem tag de fechamento. O \`alt\` descreve a imagem para quem não a vê (leitor de tela, imagem que falhou).

Lista com marcador: \`<ul>\` com \`<li>\` dentro. Lista numerada: \`<ol>\` com \`<li>\`.` ),
    conce(
      'alt',
      'Texto alternativo da imagem. Curto e honesto. Se a imagem é só enfeite, alt pode ser vazio: alt="".',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(
      `<p><a href="https://developer.mozilla.org/pt-BR/">Documentação na MDN</a></p>
<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='120'%3E%3Crect fill='%231F6A4A' width='240' height='120'/%3E%3Ctext x='120' y='68' fill='white' text-anchor='middle' font-size='18'%3Ecaderno%3C/text%3E%3C/svg%3E" alt="Desenho simples de um caderno verde" />
<ul>
  <li>Farinha</li>
  <li>Ovo</li>
</ul>
<ol>
  <li>Misturar</li>
  <li>Assar</li>
</ol>`,
      'html',
    ),
    tente(
      'Troque o href do link para um site que você usa. Acrescente um item na lista. Recarregue e clique no link (Ctrl+clique abre em outra aba).',
    ),
    ex('O que o alt deve dizer se a imagem é um bolo de chocolate: “imagem1.jpg” ou “Bolo de chocolate fatiado”?'),
    proxima('Na próxima aula cada peça ganha um nome: id e class. O JavaScript vai precisar disso.'),
  ],

  'nomear-pecas': [
    md(`## O que você vai conseguir

Dar um \`id\` único e uma \`class\` reutilizável. Agrupar um pedaço com \`div\` sem inventar significado.`),
    md(`## Nome na peça

\`id="titulo"\` é um nome **único** na página. Ninguém mais pode ter o mesmo id. O JavaScript pergunta: “cadê o id titulo?” e acha.

\`class="card"\` pode se repetir. Vários cards, a mesma classe. O CSS veste todos de uma vez.

\`div\` é uma caixa genérica. Use quando precisa agrupar e **não** existe uma tag com sentido (título, parágrafo, lista). Não embrulhe tudo em div por costume.`),
    conce(
      'id',
      'Nome único de uma peça. No CSS e no JS, #titulo significa “o id chamado titulo”.',
    ),
    conce(
      'class',
      'Nome que várias peças podem compartilhar. No CSS, .card significa “quem tem a classe card”.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(
      `<h1 id="titulo">Minha página</h1>
<div class="card">
  <p class="destaque">Um recado.</p>
</div>
<div class="card">
  <p>Outro recado, mesma classe.</p>
</div>`,
      'html',
    ),
    tente(
      'No arquivo, ponha id="aviso" num parágrafo. Confira: só existe um id aviso. Dê class="card" em dois blocos.',
    ),
    ex('Quando você usaria class em vez de id? Pense em três botões iguais versus um título único.'),
    proxima('Na próxima aula: botão, campo, rótulo e formulário — ainda sem JavaScript.'),
  ],

  'botao-e-formulario': [
    md(`## O que você vai conseguir

Montar um botão, um campo de texto, um checkbox e um formulário com rótulo. Sem JavaScript: o form ainda recarrega, e está tudo bem.`),
    md(`## Peças que a pessoa toca

\`<button type="button">\` é um botão que **não** envia formulário. O JavaScript (outra trilha) vai ouvir o clique.

\`<input>\` é um campo. \`type="text"\` é linha de texto. \`type="checkbox"\` é caixinha de marcar.

\`<label>\` liga o texto ao campo. Clique na palavra também foca o campo — melhor no celular e para quem usa leitor de tela. O \`for\` do label tem que ser o \`id\` do input.

\`<form>\` agrupa campos. Sem JavaScript, enviar recarrega a página. Isso é o padrão do HTML. Na trilha JS você cancela isso com \`preventDefault\`.` ),
    conce(
      'label',
      'Rótulo do campo. O atributo for aponta para o id do input. Clique no texto = clique no campo.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(
      `<form>
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
</form>`,
      'html',
    ),
    tente(
      'Abra o arquivo. Clique na palavra Nome: o cursor tem que ir para o campo. Aperte Enviar: a página recarrega (é o padrão). O botão “Só um botão” não envia.',
    ),
    ex('Qual a diferença entre type="submit" e type="button"?'),
    proxima('Na próxima aula o CSS entra: arquivo separado, seletor, cor e letra.'),
  ],

  'css-ligar-e-vestir': [
    md(`## O que você vai conseguir

Ligar um arquivo CSS à página e mudar cor e letra de um título, de uma classe e de um id.`),
    md(`## O HTML aponta, o CSS veste

No \`head\`:

\`<link rel="stylesheet" href="estilos.css" />\`

Três seletores no começo:

- \`h1\` — todas as tags h1
- \`.card\` — quem tem class="card" (o ponto é a classe)
- \`#titulo\` — o id titulo (a cerquilha é o id)

\`color\` é a cor do texto. \`font-size\` é o tamanho da letra. \`font-family\` é o tipo da letra.

Dá para pôr CSS dentro de \`<style>\` no HTML. Arquivo separado escala melhor: uma roupa, várias páginas.`),
    conce(
      'seletor',
      'O começo da regra CSS: quem vai ser vestido. h1, .card, #titulo.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(
      `h1 {
  color: #1F6A4A;
  font-size: 2rem;
}

.card {
  color: #241c15;
}

#aviso {
  color: #C24E1D;
}`,
      'css',
    ),
    tente(
      'Baixe o zip, extraia, abra o index.html. O título deve estar verde. No estilos.css, troque a cor do h1 e recarregue. Se nada mudar, o link no head não está achando o arquivo — os dois precisam estar na mesma pasta.',
    ),
    ex('No CSS, qual sinal usa class e qual usa id: ponto ou cerquilha?'),
    proxima('Na próxima aula a caixa ganha margem, padding, borda — e três botões ficam lado a lado.'),
  ],

  'caixa-e-lado-a-lado': [
    md(`## O que você vai conseguir

Controlar o espaço em volta de uma peça (margin, padding, border) e colocar três botões na mesma linha com flex.`),
    md(`## Toda peça é uma caixa

**padding** é o espaço *dentro*, entre a borda e o texto.

**border** é a linha da caixa.

**margin** é o espaço *fora*, entre esta caixa e a vizinha.

Para lado a lado, o jeito simples no começo é **flex** no pai:

\`display: flex;\` + \`gap\` (espaço entre os filhos). Os três botões do joguinho de JavaScript vão viver assim.`),
    conce(
      'flex',
      'Jeito de alinhar filhos em linha (ou coluna). O pai ganha display: flex; os filhos se organizam.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(
      `.botoes {
  display: flex;
  gap: 0.75rem;
}

button {
  padding: 0.6rem 1rem;
  border: 2px solid #1F6A4A;
  margin: 0;
}`,
      'css',
    ),
    tente(
      'No zip, abra a página. Os três botões devem estar em fila. Aumente o gap no CSS. Ponha padding maior num botão e veja o texto “respirar”.',
    ),
    ex('padding é dentro ou fora da borda? E margin?'),
    proxima(
      'Na próxima aula você junta tudo numa página sua — e escolhe a porta: JavaScript ou HTML intermediário (em breve).',
    ),
  ],

  'projeto-pagina-sua': [
    md(`## O que vai existir na tela no final

Uma página com título, um parágrafo, uma imagem com alt, uma lista, e um botão visível. Vestida com CSS (cor, letra, caixa). Sem JavaScript — o botão ainda não “faz” nada, e tudo bem.`),
    md(`## O que desta trilha entra

- Esqueleto com viewport
- h1 e p
- img + alt e uma lista
- id ou class nas peças
- botão
- CSS num arquivo: cor, letra, um pouco de caixa

Não é aula nova. É cola.`),
    md(`## Esqueleto mínimo`),
    code(
      `<h1 id="titulo">Sobre mim</h1>
<p>Um parágrafo verdadeiro, não um lorem.</p>
<ul>
  <li>Uma coisa que você sabe fazer</li>
  <li>Outra</li>
</ul>
<button type="button">Oi</button>`,
      'html',
    ),
    tente(
      'Baixe o zip. Troque o texto por algo seu. A imagem pode continuar o desenho de exemplo ou você aponta o src para uma foto na mesma pasta. Checklist: título, parágrafo, lista, imagem com alt, botão, CSS separado.',
    ),
    ex(
      'Checklist de pronto: a página abre no Chrome, tem h1, lista, imagem com alt, botão, e o visual vem do CSS (não de style no meio do HTML). Se os cinco estiverem lá, o projeto está feito.',
    ),
    md(`## Duas portas

Você tem palco.

**JavaScript básico** — a página passa a reagir (Console, depois botão de verdade, um joguinho). É o caminho se o objetivo é programar.

**HTML e CSS intermediário** — mais layout, hover, página no celular. **Em breve.** Quando abrir, você volta nesta trilha.

Recomendado agora: [começar o JavaScript](/aprender/javascript/o-que-e-javascript).`),
  ],
}
