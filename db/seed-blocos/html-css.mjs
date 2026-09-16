import { md, conce, code, img, tente, ex, proxima } from './helpers.mjs'

export const htmlCss = {
  'o-que-e-uma-pagina': [
    md(`Uma página que você abre no Chrome é, na prática, três linguagens. Cada uma faz um trabalho. As três podem viver em arquivos separados na mesma pasta.

**HTML** é a estrutura. Título, parágrafo, botão, campo. Sem HTML não há página — a janela fica vazia.

**CSS** é o visual. Cor, tamanho da letra, espaço. Sem CSS a página existe, mas parece um documento cru.

**JavaScript** é a reação. Clique, conta, troca um texto sem recarregar. Sem JS a página só *está lá*.

Esta trilha é o palco: HTML e CSS. JavaScript tem trilha própria depois.`),
    img(
      '/images/trilhas/iniciante/tres-camadas.svg',
      'Três faixas: HTML estrutura, CSS visual, JavaScript reação',
      { legenda: 'HTML estrutura, CSS veste, JavaScript reage.' },
    ),
    conce(
      'HTML',
      'Linguagem da estrutura: o que é título, o que é parágrafo, o que é botão. É um arquivo de texto com extensão .html.',
    ),
    md(`HTML vive num arquivo \`.html\`. Você já abriu arquivo no Chrome na trilha Antes de começar: arrastar para a janela, ou Arquivo → Abrir. Não precisa de internet para uma página só sua.

O arquivo desta aula é uma página mínima. Você ainda **não** precisa entender cada linha do começo (DOCTYPE, head, body). Isso é a aula do esqueleto. Hoje o que importa: existe um arquivo, o Chrome desenha o texto que está nele.

No VS Code: abra a **pasta** da aula, abra o \`.html\`, mude a frase, Ctrl+S, F5 no Chrome.

[Não lembra de baixar e abrir?](/aprender/comecar/baixar-e-abrir)`),
    code(
      `<p>Olá. Isto é uma página.</p>`,
      'html',
    ),
    tente(
      'Baixe o arquivo, abra no Chrome. Tem que aparecer a frase. No VS Code, mude o texto entre as letras p, salve, F5. A frase nova tem que aparecer. Se o Chrome não mudar, faltou salvar ou faltou F5.',
    ),
    ex('Em uma frase: o que o HTML faz que o CSS sozinho não faz?'),
    proxima('Na próxima a peça de que o HTML é feito: a tag — abertura, conteúdo, fechamento.'),
  ],

  'anatomia-da-tag': [
    md(`HTML não é um texto corrido. Ele marca pedaços com **tags**.

Uma tag tem nome. O nome vai entre \`<\` e \`>\`.

Quase toda tag vem em **par**:

- abertura: \`<p>\`
- conteúdo: o que a pessoa lê
- fechamento: \`</p>\` — a barra diz “aqui acaba”.

Junto: \`<p>Olá</p>\`.

O \`p\` é parágrafo. O nome na abertura e no fechamento é o **mesmo**. Se você abre \`p\` e fecha \`h1\`, o HTML fica errado.`),
    img(
      '/images/trilhas/html-css/anatomia-tag.svg',
      'A frase <p>Olá</p> decomposta em abertura, conteúdo e fechamento',
      { legenda: 'Abertura, conteúdo, fechamento. A barra só no fechamento.' },
    ),
    md(`**Atributo** é uma informação extra na abertura, não no conteúdo. Formato: nome, igual, valor entre aspas.

Exemplo: \`<html lang="pt-BR">\`. \`lang\` é o atributo. \`"pt-BR"\` é o valor. Isso avisa: o texto está em português. Não aparece no meio da página. Mora na tag de abertura.

Ainda não vamos montar a página inteira. Só a peça.

Mais na frente você vai ver tags que **não fecham** (\`img\`, \`meta\`, \`input\`). São exceção. Hoje: par de abertura e fechamento.`),
    conce(
      'tag',
      'Marca com nome. Abertura <p>, conteúdo, fechamento </p>. Atributo (lang="pt-BR") vai na abertura.',
    ),
    code(
      `<p>Um parágrafo.</p>
<p lang="pt-BR">Outro parágrafo, com atributo na abertura.</p>`,
      'html',
    ),
    md(`No arquivo baixado essas tags já estão no lugar certo da página (você vai aprender o nome desse lugar na próxima aula). Hoje: ache o \`<p>\` e o \`</p>\`. Troque só o conteúdo.`),
    tente(
      'Baixe o arquivo, abra no VS Code. Troque o texto entre <p> e </p>. Salve, abra no Chrome. O texto novo tem que aparecer. Depois escreva um segundo par <p>…</p> embaixo. Recarregue. Dois parágrafos.',
    ),
    ex('O que a barra em </p> está dizendo, que <p> sozinho não diz?'),
    proxima('Na próxima o esqueleto da página: onde essas tags visíveis entram (body) e o que fica escondido (head).'),
  ],

  esqueleto: [
    md(`Uma página HTML completa tem um esqueleto. Sem ele o Chrome “adivinha” e às vezes acento, aba e celular saem errados.

Peça por peça.`),
    md(`\`<!DOCTYPE html>\` na primeira linha. Avisa: isto é HTML de verdade, não um documento antigo. Não é tag de conteúdo. Não fecha.

\`<html lang="pt-BR">\` … \`</html>\` é a raiz. Tudo o mais fica **dentro**. O \`lang\` você já viu: atributo na abertura.

Dentro do \`html\` existem **dois** filhos, com trabalhos diferentes.`),
    img(
      '/images/trilhas/html-css/head-body.svg',
      'Janela do Chrome: a aba vem do title no head; o meio da página vem do body',
      { legenda: 'Aba = head (title). Meio da página = body.' },
    ),
    md(`**head** — o que a pessoa *não* vê no meio da página.

- \`<title>…</title>\` — texto da **aba** do Chrome, não o título enorme no meio.
- \`<meta charset="utf-8" />\` — acento (você, coração) aparece certo. Sem isso, “você” pode virar símbolo.
- \`<meta name="viewport" … />\` — pede ao celular para usar a largura da tela, não um pôster minúsculo.
- Mais tarde: o \`<link>\` do CSS também mora no head.

**body** — o que aparece no meio da tela. Parágrafo, título, imagem, botão: **aqui**.

A tag \`<p>\` da aula passada não fica solta no arquivo. Ela vai **dentro do body**.

\`meta\` é da família que **não tem fechamento**. Por isso a barra no fim da tag, às vezes. Você não escreve \`</meta>\`.` ),
    conce(
      'body',
      'Onde vai o que a pessoa vê. Título visível, parágrafo, lista, botão. Se a tag é conteúdo da página, ela mora no body.',
    ),
    conce(
      'head',
      'Informações da página: aba (title), acento (charset), celular (viewport), mais tarde o CSS. Não é o texto do meio da tela.',
    ),
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
    md(`Leia o arquivo baixado de cima a baixo. Cada comentário no HTML diz o que aquele pedaço faz. O \`<p>\` está no body de propósito.`),
    tente(
      'Abra o arquivo no Chrome. Olhe a aba: tem que estar escrito Esqueleto. No VS Code, troque o <title>, salve, F5. A aba muda. Troque o texto do <p> no body: o meio da página muda. Title não é o parágrafo.',
    ),
    ex('O título da aba vai no head ou no body? E o parágrafo que a pessoa lê?'),
    proxima('Na próxima o body ganha texto de verdade: h1, h2, parágrafo — e duas tags que parecem iguais mas não são.'),
  ],

  'texto-e-titulos': [
    md(`Tudo desta aula vai **dentro do body**. O esqueleto (DOCTYPE, html, head) já está no arquivo. Você trabalha no meio.

**\`<h1>\`** é o título da página. Um por página. Não use três h1 “para ficar grande”: tamanho é CSS, depois. **\`<h2>\`** e **\`<h3>\`** são seções, como capítulos.

**\`<p>\`** é um parágrafo. Cada ideia, um p. Não junte dois assuntos no mesmo p só para economizar tag.

Agora duas tags que o Chrome desenha parecido com “negrito” e “itálico” — e **não são a mesma coisa**.`),
    img(
      '/images/trilhas/html-css/strong-em.svg',
      'Dois cartões: strong é importância; em é ênfase no tom',
      { legenda: 'Mesmo que o visual lembre negrito e itálico, o motivo de cada tag é o sentido.' },
    ),
    md(`**\`<strong>\`** marca **importância**. “Isso pesa.” Leitor de tela trata como importante. Use quando a palavra é crítica (um aviso, um ingrediente que não pode faltar).

**\`<em>\`** marca **ênfase no tom**, como se você mudasse a voz. “O cheiro *importa*.” Não é o mesmo que strong. Trocar uma pela outra muda o significado, mesmo que uma fique mais gordinha e a outra inclinada.

O Chrome, por padrão, desenha strong em negrito e em em itálico. Isso é **visual**. O motivo da tag é o sentido. Depois o CSS pode até mudar o visual; o sentido continua.

Existem \`<b>\` e \`<i>\`: só visual, quase sem esse significado. Nestas aulas não use. Quer importância → strong. Quer ênfase → em.`),
    conce(
      'strong e em',
      'strong = importância. em = ênfase no tom. Não são a mesma tag. Negrito e itálico são o desenho padrão, não o motivo.',
    ),
    code(
      `<h1>Bolo de fubá</h1>
<p>Receita curta para um lanche.</p>
<h2>Ingredientes</h2>
<p>Fubá, ovos, leite e um pouco de <strong>paciência</strong>.</p>
<p>O cheiro <em>importa</em> mais que o relógio.</p>`,
      'html',
    ),
    md(`No arquivo, esse bloco está dentro do body. Se você colar fora do body (por exemplo depois de \`</html>\`), o Chrome pode até mostrar, mas está no lugar errado.`),
    tente(
      'No arquivo, deixe um único h1. Acrescente um h2 “Modo de fazer” e um p seu, ainda dentro do body. Recarregue. Depois troque o strong por em (só para ver): o sentido da frase muda, o visual também — não é a mesma tag.',
    ),
    ex('Por que não colocar três h1 numa página só para “ficar grande”? Onde o tamanho da letra vai ser resolvido?'),
    proxima('Na próxima: link, imagem (esta tag não fecha) e lista — sempre no body.'),
  ],

  'links-imagens-listas': [
    md(`Continua no **body**. Três tags do dia a dia, uma de cada vez.`),
    md(`**Link.** \`<a href="https://...">texto visível</a>\`.

- \`a\` abre e fecha.
- \`href\` é atributo na abertura: o destino.
- O que a pessoa lê é o conteúdo, entre \`<a>\` e \`</a>\`. Não coloque o endereço cru como texto se puder evitar — coloque um nome (“Documentação na MDN”).`),
    md(`**Imagem.** \`<img src="foto.jpg" alt="descrição curta">\`.

Esta **não fecha**. Não existe \`</img>\`. É tag void: a abertura já é o recado inteiro.

- \`src\` — o arquivo da figura (na mesma pasta, ou um endereço).
- \`alt\` — texto para quem não vê a imagem (leitor de tela, imagem que falhou). Curto e honesto. Se a imagem é só enfeite, \`alt=""\`.

Não use o nome do arquivo como alt (\`img1.jpg\` não descreve nada).`),
    conce(
      'tag void',
      'Tag sem fechamento. img, meta, input. Você não escreve </img>. Tudo que ela precisa vai em atributo na abertura.',
    ),
    md(`**Lista.** Itens soltos não viram lista. Você envolve:

- \`<ul>\` — marcador (bolinha)
- \`<ol>\` — número
- cada item: \`<li>…</li>\` **dentro** do ul ou do ol

O \`li\` não fica órfão no body. Ele mora dentro da lista.`),
    code(
      `<p><a href="https://developer.mozilla.org/pt-BR/">Documentação na MDN</a></p>
<img src="foto.jpg" alt="Desenho simples de um caderno verde" />
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
      'No arquivo (body), troque o href do link para um site que você usa. Acrescente um <li> na lista. Recarregue. Ctrl+clique no link abre outra aba. O alt da imagem deve descrever o desenho, não o nome do arquivo.',
    ),
    ex('O alt de um bolo de chocolate deve ser “imagem1.jpg” ou “Bolo de chocolate fatiado”? Por quê?'),
    proxima('Na próxima cada peça ganha um nome: id (único) e class (repetível). O JavaScript vai perguntar esses nomes.'),
  ],

  'nomear-pecas': [
    md(`Ainda no **body**. Agora a tag ganha um nome no atributo da **abertura** — o mesmo lugar do \`href\` e do \`lang\`.

O JavaScript, na outra trilha, não “enxerga” a página como você. Ele pergunta: “cadê a peça chamada titulo?”. Esse nome é o \`id\` ou a \`class\`.` ),
    md(`**\`id\`** — nome **único** na página. Ninguém mais pode ter o mesmo. Um título, um aviso, um botão especial.

No HTML: \`<h1 id="titulo">\`. Na abertura. Sem espaço no valor. Sem acento no começo.

**\`class\`** — nome que **várias** peças podem compartilhar. Três cartões iguais, a mesma class \`card\`. O CSS veste todos de uma vez. O JS pode achar o grupo.

No HTML: \`<div class="card">\`.

id e class não são a mesma coisa. id = um. class = muitos.`),
    conce(
      'id',
      'Nome único de uma peça. Atributo na abertura. No CSS e no JS, #titulo significa “o id chamado titulo”.',
    ),
    conce(
      'class',
      'Nome compartilhado. Várias peças, a mesma class. No CSS, o ponto (.card) significa “quem tem a classe card”.',
    ),
    md(`**\`div\`** é uma caixa genérica. Não significa título, nem parágrafo, nem lista. Use quando precisa agrupar e **não** existe uma tag com sentido. Não embrulhe tudo em div por costume: um \`<p>\` já é parágrafo; não precisa de div em volta só para existir.

O arquivo desta aula tem um h1 com id e dois blocos com a mesma class. Leia os comentários no HTML.`),
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
      'No body, ponha id="aviso" num parágrafo — e confira: só existe um id aviso na página. Dê class="card" em dois blocos. Se você repetir o mesmo id em dois lugares, está errado: id não se repete.',
    ),
    ex('Três botões iguais num joguinho: id ou class? E o título único da página?'),
    proxima('Na próxima: botão, campo, rótulo e formulário — ainda sem JavaScript.'),
  ],

  'botao-e-formulario': [
    md(`Peças que a pessoa toca. Continuam no **body**. Ainda sem JavaScript: o formulário, ao enviar, recarrega a página. Isso é o padrão do HTML. Na trilha JS você cancela isso.`),
    md(`**\`<button type="button">\`** — botão que **não** envia formulário. O JS (outra trilha) vai ouvir o clique. Se você esquecer o \`type\`, alguns botões dentro de form se comportam como enviar.

**\`<button type="submit">\`** — envia o form.

**\`<input>\`** — campo. Tag void (não fecha). \`type="text"\` é linha de texto. \`type="checkbox"\` é caixinha.

**\`<label>\`** — o texto do campo. O atributo \`for\` aponta para o **id** do input (o id da aula passada). Clique na palavra = foco no campo. Melhor no celular e para leitor de tela.

**\`<form>\`** — agrupa campos. Enviar sem JS recarrega.`),
    conce(
      'label',
      'Rótulo do campo. for="nome" tem que ser o mesmo valor do id do input. Clique no texto = clique no campo.',
    ),
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
      'Abra o arquivo no Chrome. Clique na palavra Nome: o cursor tem que ir para o campo (label+for+id). Aperte Enviar: a página recarrega — é o HTML, não um erro. O botão “Só um botão” não envia.',
    ),
    ex('Qual a diferença entre type="submit" e type="button"? Quando cada um serve?'),
    proxima('Na próxima o CSS: arquivo separado na mesma pasta, ligado no head, cor e letra.'),
  ],

  'css-ligar-e-vestir': [
    md(`Até agora a página estava nua. CSS é a roupa. Mora noutro arquivo, **na mesma pasta** do HTML.`),
    img(
      '/images/trilhas/comecar/pasta-html-css.svg',
      'Pasta minha-aula com index.html e estilos.css',
      { legenda: 'Os dois juntos. Se o CSS estiver em outra pasta, o HTML não veste.' },
    ),
    md(`No **head** (não no body):

\`<link rel="stylesheet" href="estilos.css" />\`

\`href\` é o nome do arquivo vizinho. Tag void.

No CSS, cada regra tem um **seletor** (quem vestir) e um bloco \`{ }\` com propriedades.

- \`h1\` — todas as tags h1
- \`.card\` — quem tem \`class="card"\` (o **ponto** é a class da aula de nomes)
- \`#titulo\` — o \`id="titulo"\` (a **cerquilha** é o id)

\`color\` — cor do texto. \`font-size\` — tamanho. \`font-family\` — tipo da letra.

Dá para pôr CSS dentro de \`<style>\` no HTML. Arquivo separado escala melhor: uma roupa, várias páginas.`),
    conce(
      'seletor',
      'O começo da regra CSS: quem vai ser vestido. h1 (tag), .card (class), #titulo (id).',
    ),
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
    md(`O zip tem \`index.html\` + \`estilos.css\`. No VS Code, abra a **pasta**. [Como baixar e abrir](/aprender/comecar/baixar-e-abrir).`),
    tente(
      'Extraia, abra index.html no Chrome. O título deve estar verde. No estilos.css, troque a cor do h1, Ctrl+S, F5. Se nada mudar: ou não salvou, ou o link no head não acha o arquivo — os dois na mesma pasta.',
    ),
    ex('No CSS, qual sinal usa class e qual usa id: ponto ou cerquilha?'),
    proxima('Na próxima a caixa: margin, padding, border — e três botões na mesma linha.'),
  ],

  'caixa-e-lado-a-lado': [
    md(`No CSS, toda peça é uma caixa. Três espaços, de fora para dentro.`),
    img(
      '/images/trilhas/html-css/caixa.svg',
      'Três retângulos: margin por fora, border a linha, padding entre a linha e o texto',
      { legenda: 'margin = fora. border = a linha. padding = entre a linha e o texto.' },
    ),
    md(`**padding** — espaço *dentro*, entre a borda e o texto. O botão “respira”.

**border** — a linha da caixa.

**margin** — espaço *fora*, entre esta caixa e a vizinha.

Para **lado a lado**, o jeito simples no começo: o **pai** ganha flex.

\`display: flex;\` + \`gap\` (espaço entre os filhos). Os três botões do joguinho de JavaScript vão viver assim.

O HTML desta aula já tem um \`div class="botoes"\` no body com três \`button\`. O CSS veste o pai e os botões.`),
    conce(
      'flex',
      'Jeito de alinhar filhos em linha (ou coluna). O pai ganha display: flex; os filhos se organizam. gap é o espaço entre eles.',
    ),
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
      'No zip, abra a página. Os três botões devem estar em fila. No CSS, aumente o gap. Ponha padding maior num botão e veja o texto respirar. Margin empurra o vizinho; padding não.',
    ),
    ex('padding é dentro ou fora da borda? E margin?'),
    proxima('Na próxima você junta o básico numa página sua. A porta seguinte é o JavaScript.'),
  ],

  'projeto-pagina-sua': [
    md(`Não é aula nova. É cola do que você já fechou.

No final existe, no Chrome, uma página com:

- esqueleto (DOCTYPE, head com charset, viewport, title, link do CSS)
- um \`h1\` (um só) e pelo menos um \`p\` no **body**
- uma imagem com \`alt\` honesto
- uma lista (\`ul\` ou \`ol\`)
- um botão
- CSS **num arquivo à parte** (cor, letra, um pouco de caixa)

O botão ainda não “faz” nada. Está tudo bem. Reagir é JavaScript.`),
    img(
      '/images/trilhas/comecar/pasta-html-css.svg',
      'Pasta do projeto com index.html e estilos.css',
    ),
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
    md(`O zip já traz um esqueleto comentado. Troque o texto por algo seu. A imagem pode continuar o desenho de exemplo.

Checklist de pronto: abre no Chrome; tem h1, lista, imagem com alt, botão; o visual vem do CSS (não de style no meio do HTML). Se os cinco estiverem lá, o projeto está feito.

A porta **agora** é o [JavaScript básico](/aprender/javascript/o-que-e-javascript). Mais HTML e CSS (layout, hover, página no celular) entram depois nesta trilha — o básico já abre o palco.`),
    tente(
      'Baixe o zip, abra a pasta no VS Code, troque o conteúdo por algo seu, F5 no Chrome. Confira o checklist. [Como abrir o zip](/aprender/comecar/baixar-e-abrir).',
    ),
    ex(
      'Checklist: a página abre, tem h1, lista, imagem com alt, botão, CSS separado. Falta algum? Qual, e em que aula você viu essa peça?',
    ),
  ],
}
