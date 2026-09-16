import { md, conce, code, img, tente, ex, proxima } from './helpers.mjs'

export const comecar = {
  'arquivo-pasta-extensao': [
    md(`O computador guarda o trabalho em **arquivos**. Um arquivo é um pacote com nome: uma foto, um texto, uma página.

Uma **pasta** (também chamada de diretório) é uma gaveta. Dentro dela cabem vários arquivos — e outras pastas.

Nas aulas daqui para a frente você vai ouvir “deixe na mesma pasta”. Quer dizer: os arquivos daquela aula precisam estar na **mesma gaveta**. Se o HTML está em Downloads e o CSS ficou na Área de trabalho, um não acha o outro.`),
    img(
      '/images/trilhas/comecar/arquivo-pasta-extensao.svg',
      'Três desenhos: um arquivo, uma pasta com arquivos, e o nome pagina.html com a extensão .html destacada',
      { legenda: 'Arquivo é a folha. Pasta é a gaveta. A extensão (.html) diz o tipo.' },
    ),
    md(`A parte do nome depois do ponto é a **extensão**. Ela diz ao computador o tipo:

- \`.html\` — página para o Chrome
- \`.css\` — roupa da página
- \`.js\` — JavaScript

\`pagina.html\` e \`pagina.css\` não são o mesmo arquivo. O nome antes do ponto pode até ser igual; a extensão muda o tipo.

No Windows, a extensão às vezes **fica escondida**. Aí você vê só \`pagina\` e não sabe se é HTML. Ligue a visualização: Explorador de Arquivos → Exibir → Extensões de nome de arquivo (Windows 11) ou Exibir → Extensões de arquivo (Windows 10).

No Mac, Finder → Ajustes → Avançado → mostrar todas as extensões.`),
    conce(
      'extensão',
      'O pedaço do nome depois do ponto (.html, .css, .js). Diz o tipo do arquivo. Sem ela visível, é fácil salvar “pagina” e o Chrome não tratar como página.',
    ),
    md(`Nomeie simples. Evite espaço e acento no começo da vida: \`minha-aula\` é mais seguro que \`Minha Aula 1\`. Maiúscula e minúscula importam em alguns sistemas: \`Index.html\` e \`index.html\` podem ser dois arquivos.

Na próxima aula o Chrome entra. Antes: confira se você vê \`.html\` no nome de um arquivo qualquer da pasta Downloads.`),
    tente(
      'No seu computador, abra a pasta Downloads. Se os nomes não mostram .zip, .pdf, .html, ligue a opção de extensões (Windows ou Mac, texto acima). Só passe daqui quando você vir o ponto e a extensão.',
    ),
    ex('O que a extensão .html está dizendo ao computador que a extensão .jpg não diz?'),
    proxima('Na próxima: o Chrome é o programa da janela. Google é busca — um site, dentro do Chrome.'),
  ],

  'chrome-nao-e-google': [
    md(`Muita gente diz “abre no Google”. Quase sempre quer dizer **abre no Chrome**.

**Chrome** é o programa: a janela com abas, o endereço em cima, os três pontinhos. Você instala o Chrome. Ele abre arquivos da sua pasta e também sites da internet.

**Google** é um site de busca. Você chega nele *pelo* Chrome (ou por outro navegador). Google não abre o seu \`index.html\` que está no computador.`),
    img(
      '/images/trilhas/comecar/chrome-nao-google.svg',
      'Janela do Chrome ao lado de um campo de busca do Google',
      { legenda: 'Chrome = a janela. Google = a busca, que mora numa aba do Chrome.' },
    ),
    img(
      '/images/trilhas/comecar/computador.jpg',
      'Notebook aberto ao lado de um celular fechado numa mesa',
      { legenda: 'As aulas pedem um computador para editar arquivo. O celular lê o site; o exercício é no computador.' },
    ),
    md(`Para abrir um arquivo seu no Chrome:

1. Deixe o Chrome aberto.
2. Arraste o \`.html\` para dentro da janela, **ou** no Chrome: Arquivo → Abrir arquivo.
3. Dois cliques no \`.html\` também funcionam, se o Windows/Mac associou HTML ao Chrome.

O endereço em cima fica parecido com \`file:///...\` — é arquivo local. Não precisa de internet para essa página.

Você mudou o arquivo no editor. O Chrome **não lê a mudança sozinho**. Salve no editor, volte na aba, aperte **F5** (ou o ícone de recarregar). Sem F5, você está olhando a versão antiga.`),
    conce(
      'arquivo local',
      'Página que está no seu computador, não num site. O endereço começa com file://. Internet desligada, ela continua abrindo.',
    ),
    md(`Firefox e Edge também abrem HTML. Nestas aulas o padrão é **Chrome**, para todo mundo ver a mesma tecla (F12) e a mesma aba Console.

Celular abre o TechLearn. Escrever arquivo, salvar e recarregar é trabalho de **computador**.`),
    tente(
      'Crie no Bloco de Notas ou no VS Code um arquivo chamado teste.html com o texto Olá, salve numa pasta, arraste para o Chrome. Tem que aparecer Olá. Mude o texto, salve, F5. O Chrome tem que mostrar o texto novo.',
    ),
    ex('Por que “abrir no Google” não funciona para um arquivo que está na sua pasta Downloads?'),
    proxima('Na próxima o editor: o programa em que você escreve o código. Não é Word.'),
  ],

  'editor-vscode': [
    md(`Código é texto. Mas não é texto de carta.

**Word**, Google Docs e WhatsApp colocam formatação escondida (negrito, fonte, marca d’água). O Chrome lê isso como lixo. A página quebra e você não vê o porquê.

**Bloco de Notas** até salva texto puro, mas não ajuda: não colora o código, não formata, não abre a pasta inteira.

**Editor** é o programa feito para código. Mostra o arquivo como ele é. O padrão destas aulas é o **Visual Studio Code** (VS Code). Grátis, Windows, Mac e Linux.`),
    img(
      '/images/trilhas/comecar/vscode.svg',
      'Janela do VS Code com a lista de arquivos à esquerda e o texto do HTML no meio',
      { legenda: 'Esquerda: a pasta. Meio: o arquivo aberto. Abra a pasta, não um arquivo solto.' },
    ),
    md(`Instale pelo site oficial do VS Code (code.visualstudio.com). Na primeira abertura, pode escolher português.

O gesto que as aulas vão pedir:

1. **Arquivo → Abrir pasta** (não “Abrir arquivo”).
2. Escolha a pasta da aula (depois de extrair o zip, essa pasta).
3. À esquerda aparece a lista: \`index.html\`, às vezes \`estilos.css\`, às vezes \`script.js\`.
4. Clique num nome: o texto abre no meio.
5. Mexa, **Ctrl+S** (no Mac, **Cmd+S**), volte no Chrome, **F5**.

Se você abrir só um arquivo solto, o VS Code não “enxerga” o vizinho. Aí o HTML não acha o CSS. Abrir a **pasta** resolve.`),
    conce(
      'VS Code',
      'Editor de código. Padrão destas aulas. Abre a pasta do projeto, mostra os arquivos à esquerda, deixa salvar e formatar.',
    ),
    md(`Não precisa de extensão extra no começo. Não precisa de conta. Se o instalador oferecer “Add to PATH” no Windows, pode marcar — ajuda depois, não é obrigatório hoje.`),
    tente(
      'Instale o VS Code se ainda não tem. Crie uma pasta minha-primeira-pasta no computador. No VS Code: Abrir pasta → essa pasta. Arquivo → Novo arquivo → salve como ola.html dentro dela. Escreva Olá e salve. Confira: o nome aparece à esquerda, na pasta.',
    ),
    ex('Por que colar o código no Word e salvar como .html costuma dar página quebrada no Chrome?'),
    proxima('Na próxima os atalhos do VS Code que as outras aulas vão citar: salvar, formatar, comentar.'),
  ],

  'atalhos-vscode': [
    md(`Atalho é tecla que faz o trabalho sem caçar o menu. Nestas aulas só estes importam. Windows primeiro; Mac entre parênteses.`),
    img(
      '/images/trilhas/comecar/atalhos.svg',
      'Quatro teclas: Ctrl+S salvar, Shift+Alt+F formatar, Ctrl+/ comentar, Ctrl+Z desfazer',
    ),
    md(`**Salvar — Ctrl+S (Cmd+S).** Se o nome da aba no VS Code tem um pontinho, o arquivo ainda não foi gravado no disco. O Chrome lê o disco. Sem salvar, F5 mostra a versão velha.

**Formatar documento — Shift+Alt+F (Shift+Option+F).** O VS Code alinha o código (indentação). HTML torto funciona; HTML alinhado você lê. Na primeira vez o VS Code pode perguntar “formatador”. Para HTML, o padrão dele basta.

**Comentar — Ctrl+/ (Cmd+/).** Vira a linha em recado que o Chrome ignora. No HTML fica \`<!-- ... -->\`. No CSS e no JS fica \`/* ... */\` ou \`//\`. Serve para desligar um pedaço sem apagar.

**Desfazer — Ctrl+Z (Cmd+Z).** Volta o último passo. Fez besteira, desfaz. Não feche o arquivo sem salvar se quiser desfazer.

**Paleta — Ctrl+Shift+P (Cmd+Shift+P).** Uma caixa no topo. Digite “Format” ou “Open Folder” se esqueceu o menu.

Crie arquivo novo: clique com o botão direito na pasta à esquerda → New File → nome com extensão (\`pagina.html\`, não \`pagina\`).`),
    conce(
      'Ctrl+S',
      'Salva o arquivo no disco. Sem isso, o Chrome (F5) continua mostrando o que estava gravado antes.',
    ),
    tente(
      'No VS Code, abra a pasta da aula anterior (ou crie uma). Escreva três linhas tortas num .html, Shift+Alt+F. O texto deve alinhar. Ctrl+S. Depois Ctrl+/ numa linha: ela vira comentário.',
    ),
    ex('Você mudou o HTML, apertou F5 no Chrome e nada mudou. Qual atalho provavelmente faltou no VS Code?'),
    proxima('Na próxima o botão de baixar deste site: zip, mesma pasta, abrir o HTML — para HTML+CSS e para JavaScript.'),
  ],

  'baixar-e-abrir': [
    md(`No fim de quase toda aula com código tem um botão **Baixar**. Esta aula é só o gesto. O código do zip **não** ensina HTML, CSS nem JavaScript. Ele existe para você treinar: baixar, extrair, deixar junto, abrir o HTML.

Às vezes o botão manda **um arquivo só** (\`.html\`). Aí não tem zip: salve e abra.

Às vezes manda um **.zip**. Zip é pacote. Dentro vêm dois ou três arquivos que precisam ficar na **mesma pasta**.`),
    conce(
      'zip',
      'Pacote compactado. Você extrai (descompacta) e só então abre o HTML. Não dê dois cliques no zip esperando ver a página.',
    ),
    md(`Onde o arquivo cai: pasta **Downloads**, salvo se o Chrome perguntar o lugar.

Se for zip:

1. Botão direito → Extrair tudo (Windows), dois cliques (Mac), Extrair aqui (Linux).
2. Entre na pasta que saiu.
3. Abra o \`index.html\` **no Chrome**.

Não abra \`estilos.css\` nem \`script.js\` como se fossem a página. O HTML é a cara. Os outros são companheiros na mesma gaveta.

Dois jeitos que as trilhas vão usar — a regra é a mesma:`),
    img(
      '/images/trilhas/comecar/pasta-html-css.svg',
      'Pasta minha-aula com index.html e estilos.css',
      { legenda: 'Trilha HTML e CSS: a página e a roupa, juntos.' },
    ),
    img(
      '/images/trilhas/comecar/pasta-html-js.svg',
      'Pasta minha-aula com index.html e script.js',
      { legenda: 'Trilha JavaScript: a página e o script, juntos.' },
    ),
    md(`O zip desta aula traz **os dois jeitos**, em duas pastas (\`html-css\` e \`javascript\`). Abra cada \`index.html\`. Se a pasta html-css abrir sem cor, o CSS não está junto. Se a pasta javascript abrir sem a frase extra, o JS não está junto.

No VS Code: **Abrir pasta** na pasta extraída (ou em cada subpasta). Edite, Ctrl+S, F5 no Chrome.

Esqueceu este gesto no meio de outra aula? O botão de baixar tem o link de volta para cá.`),
    tente(
      'Baixe o zip desta aula. Extraia. Abra html-css/index.html no Chrome — deve ter um título verde. Abra javascript/index.html — a frase na página deve mudar. Se não mudar / não pintar, os dois arquivos daquela pasta não estão juntos.',
    ),
    ex('Por que abrir só o arquivo script.js no Chrome não mostra a página da aula?'),
    proxima('Na próxima as duas bancadas: quando o teste é a página no Chrome, e quando o teste é o Console (F12).'),
  ],

  'duas-bancadas': [
    md(`“Onde eu testo isso?” muda de aula para aula. São dois lugares. Não misture.`),
    img(
      '/images/trilhas/comecar/duas-bancadas.svg',
      'Dois quadros: pasta com arquivos aberta no Chrome, e a aba Console do Chrome',
      { legenda: 'A — você vê a página. B — você fala com o JavaScript no Console.' },
    ),
    md(`**A — Pasta + Chrome.** Tem arquivo HTML (e às vezes CSS, às vezes JS). Você abre o \`index.html\`. O resultado é o que aparece **no meio da página**. Aulas de HTML e CSS vivem aqui. Aulas de JavaScript que mexem em botão, título, formulário também.

**B — Console.** Tecla **F12** (no Mac, Cmd+Option+I). Aba **Console**. Uma linha preta onde você escreve JavaScript e aperta Enter. O resultado aparece **nessa aba**, não no meio da página. As primeiras aulas de JavaScript (variável, tipo, if, lista…) vivem aqui.

F12 no Mac às vezes não abre. Menu: Exibir → Opções do desenvolvedor → Console, ou o atalho Cmd+Option+I.

Cada aula vai dizer, na hora do exercício, qual das duas. Se pedir \`let idade = 18\`, é Console. Se pedir “abra o index.html e mude o título”, é pasta.`),
    conce(
      'Console',
      'Aba das ferramentas do Chrome (F12) onde o JavaScript escreve mensagem e erro. Não é o meio da página. Não é o terminal do Windows.',
    ),
    md(`O pacote de uma aula de Console ainda traz um HTML + JS para você **ver o script já rodando** se quiser. O exercício escrito “cole no Console” é na aba Console.

Esqueceu de baixar e extrair? [Baixar e abrir o pacote](/aprender/comecar/baixar-e-abrir).`),
    tente(
      'Abra o Chrome. F12. Aba Console. Digite 1 + 1 e Enter. Tem que aparecer 2. Depois abra qualquer index.html de uma pasta sua: isso é a bancada A. Os dois lugares existem no mesmo Chrome.',
    ),
    ex('Você vai testar let cidade = "Recife" e console.log(cidade). Qual bancada: pasta+Chrome ou Console?'),
    proxima('Acabou o ponto de partida. A próxima trilha é HTML e CSS: o palco. JavaScript usa esse palco.'),
  ],
}
