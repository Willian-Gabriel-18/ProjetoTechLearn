export const noticias = [
  {
    slug: 'backend-so-com-js',
    titulo: 'Dá para fazer o servidor inteiro em JavaScript?',
    resumo: 'Sim. A mesma língua do navegador também roda no servidor — com outro nome de casa.',
    imagem_capa: '/images/novidades/salao-cozinha.jpg',
    markdown: `A pergunta parece maluca se você só viu JavaScript no Chrome. O navegador lê a página, o JS mexe no botão, fim. “Servidor” soa como outra profissão, outra língua.

Não é.

## O que é um servidor, em uma frase

Servidor é o computador que guarda dados e responde pedidos. Você pede “me dá o CEP 01001000”; ele responde com a cidade. O navegador é o salão: mostra, recebe clique, desenha. O servidor é a cozinha: busca no banco, calcula, devolve.

Durante anos a cozinha falava PHP, Java, Python. A sala falava JavaScript. Duas equipes, duas gramáticas.

## Aí o JavaScript foi para a cozinha

Em 2009 apareceu o **Node.js**: o mesmo JavaScript, fora do Chrome, no computador que atende a internet. Depois vieram Deno e Bun — a ideia é a mesma. Você escreve a gramática que já conhece (\`const\`, \`if\`, função) para receber um pedido e devolver JSON.

**Backend**, então, é o nome chique da cozinha. **API** é o balcão: o combinado de como pedir e como a resposta chega. Dá para montar os dois em JavaScript. Empresas grandes fazem isso. Startups fazem isso. Não é gambiarra de hobby.

## O que muda em relação ao navegador

No Chrome, o JS vê o DOM, o clique, o \`localStorage\`. Não vê a senha do banco — e não deve ver.

No servidor, o JS vê o pedido que chegou, fala com o banco, guarda a senha no \`.env\`. Não vê o botão da página — a menos que você mande HTML de volta.

Mesma gramática. Casa diferente. Ferramentas diferentes. O \`fetch\` que você usa no front *chama* o servidor. O código do servidor *responde* ao fetch.

## Precisa de Express? De Nuxt?

Não nesta leitura. Express, Fastify, o próprio Nuxt (esta plataforma) são *jeitos* de organizar o servidor em JS. O fato importante é anterior: a língua alcança a cozinha.

Curso de Express é outra conversa. O que esta pergunta pedia era: “JS serve para backend completo?” A resposta honesta é sim. Completo o bastante para API, login, arquivo, fila, o que o produto precisar — com as mesmas responsabilidades de qualquer backend: senha fora do cliente, erro tratado, dado validado.

## O que levar daqui

Se alguém disser “JavaScript é só para pintar botão”, essa pessoa parou no tempo. O botão continua. A cozinha também pode falar JS.`,
  },
  {
    slug: 'o-que-e-uma-api',
    titulo: 'O que é uma API — e por que seu site precisa falar com alguém?',
    resumo: 'O site na sua tela quase nunca tem todos os dados. Ele pede. Alguém responde. Esse combinado tem nome.',
    imagem_capa: '/images/novidades/api-balcao.jpg',
    markdown: `Você abre um app de banco. O saldo aparece. O dinheiro não está no seu celular — está no banco. O app **pediu** o saldo e **recebeu** um número.

Esse pedido e essa resposta, feitos de um jeito combinado, são uma **API**.

## Sem a palavra difícil

API significa Application Programming Interface. Esqueça a sigla por um minuto.

Pense num balcão. Você não entra na cozinha. Você diz o número da mesa (ou o CEP, ou o usuário). A cozinha devolve o prato (ou a cidade, ou o saldo). O cardápio diz o que se pode pedir e como a resposta vem.

A API é o cardápio + o balcão. Não é o banco de dados inteiro aberto. Não é “entrar no computador de alguém”.

## Por que o site precisa disso

Porque o HTML que o Chrome baixou não carrega o universo. Preço muda. Estoque muda. Seu saldo muda. Se tudo viesse colado no arquivo da página, cada alteração exigiria republicar o site.

Então a página nasce “oca” no dado vivo e pergunta: “qual o saldo desta conta?”. A API responde. O JavaScript coloca o número na tela.

O contrário também vale: você preenche um formulário. O site não “adivinha” o cadastro. Ele **manda** os campos para a API. A API grava.

## Como um pedido se parece (sem jargão de rede)

Na prática, quase sempre:

1. Um endereço (URL) — “qual balcão”.
2. Um verbo — GET é “me dá”, POST é “toma isso e guarda”.
3. Às vezes um corpo — o JSON com os campos.
4. Uma resposta — de novo JSON, ou um erro.

Você já viu o formato da resposta se estudou JSON. Se ainda não: é texto com chaves e aspas que o programa transforma em objeto.

## O que uma API não é

Não é um aplicativo. Não é um vírus. Não é “a internet”. É o combinado entre dois programas.

Quando o app do banco pede o saldo, ele não entra no seu computador pessoal. Ele fala com o servidor do banco, que já tem regra de quem pode ver o quê (login, senha, token). API sem proteção é balcão sem segurança — aí sim vira problema. API bem feita é o contrário: só entrega o que aquele pedido tem direito de ver.

## O que levar daqui

Toda vez que a tela mostra um dado que não estava no arquivo HTML, alguém perguntou a uma API. Seu site precisa falar com alguém quando o dado vive em outro lugar. O nome disso é API. O balcão, não a cozinha inteira.`,
  },
  {
    slug: 'ia-e-aprender-js',
    titulo: 'A IA já programa. Então para que eu vou aprender?',
    resumo: 'Ela escreve código rápido. Ela também escreve código errado com cara de certo. Quem lê ainda manda.',
    imagem_capa: '/images/novidades/estudar.jpg',
    markdown: `A pergunta é honesta. Você viu o ChatGPT, o Copilot, o Grok, o Claude gerar uma função em três segundos. Por que sofrer no Console?

Porque o que a IA faz bem e o que você precisa saber não são a mesma lista.

## O que a IA faz com código

Ela imita texto que já viu. Código é texto. Então ela monta funções plausíveis: nomes bonitos, \`if\`, \`return\`, comentário em inglês.

Às vezes acerta. Às vezes inventa uma função que não existe. Às vezes usa uma biblioteca velha. Às vezes esquece o caso vazio. A frase vem confiante nos quatro casos. A confiança não é prova.

## O que quebra se você não lê

Você cola. Roda. Dá erro vermelho. Se você não sabe o que é \`ReferenceError\`, o vermelho é só um susto. Se você não sabe o que \`===\` compara, a IA pode ter usado \`==\` e o bug só aparece na terça-feira, com o cliente.

A IA acelera quem já sabe o que está olhando. Para quem não sabe, ela acelera o caminho até um bug elegante.

Há outro risco: você pede “faça meu trabalho de JavaScript”. Ela faz. Você entrega. Na entrevista, alguém pede para explicar o \`return\`. Aí não tem modelo do lado.

## Aprender não é competir com a máquina na velocidade de digitar

É saber:

- o que o Console está dizendo
- se aquele \`fetch\` vai expor uma senha
- se o JSON veio quebrado
- se o loop nunca acaba
- se o botão não faz nada porque o \`id\` não bate

Essas coisas cabem em aulas curtas. Não cabem num palpite gerado.

## Um jeito adulto de usar IA no estudo

Peça para ela explicar um erro que *você* gerou. Peça um exemplo menor, não o projeto inteiro. Depois apague o código dela e reescreva do seu jeito. Se você não consegue reescrever, você ainda não aprendeu — a IA só emprestou a resposta.

Peça também: “o que este código faz de errado?”. Modelos são razoáveis em revisar. São piores em ser a única fonte.

## O que levar daqui

A IA já programa. Você ainda precisa aprender a ler, a duvidar e a consertar. O Console não ficou obsoleto. Ficou mais importante: é o lugar onde a frase confiante encontra o vermelho.`,
  },
  {
    slug: 'js-navegador-e-servidor',
    titulo: 'Se é o mesmo JavaScript, por que tem um no Chrome e outro no servidor?',
    resumo: 'Mesma gramática. Casas diferentes. O que cada um pode ver muda tudo.',
    imagem_capa: '/images/novidades/duas-casas.jpg',
    markdown: `JavaScript nasceu no navegador, em 1995, para a página reagir. Décadas depois, a mesma língua saiu de casa e foi morar no servidor.

As pessoas então perguntam: é a *mesma* coisa? Quase. A gramática é a mesma. A casa não.

## Gramática = as palavras que você já viu

\`let\`, \`const\`, \`if\`, função, array, objeto, \`JSON.parse\`. Isso vale nos dois lugares. Por isso quem aprende no Console não recomeça do zero para fazer uma API.

## Casa = o que existe à volta

No **navegador** existem:

- a página (DOM)
- o clique
- \`fetch\` para *pedir* coisa a um servidor
- \`localStorage\` (gaveta no Chrome, por site)

Não existe (de propósito): a senha do banco, o arquivo \`.env\`, o disco do servidor.

No **servidor** (Node, Deno, Bun) existem:

- o pedido que chegou (URL, corpo, cookie)
- o banco
- arquivos no disco
- a senha no ambiente

Não existe o botão da sua tela. Não existe \`document.querySelector\`, a menos que você instale uma biblioteca para fingir um documento — e mesmo assim não é o Chrome do aluno.

## Por que essa divisão importa

Se o JavaScript do navegador pudesse ler \`DATABASE_URL\`, qualquer visitante leria também: o Chrome baixa o arquivo. Segredo no front é segredo público.

Se o JavaScript do servidor pudesse clicar no botão da aluna, ele estaria no computador dela. Não está. Ele só vê o que o navegador *mandou* no pedido.

Por isso o TechLearn começa no navegador: é onde você está, é de graça, é visível. Backend em JS é a mesma língua noutra casa. Vale uma novidade. Vale um curso depois. Não vale misturar as duas casas num arquivo só e torcer.

## “Então o site que eu uso já é os dois?”

Muitas vezes sim. O HTML e o JS que pintam o botão vieram de um servidor. O clique manda um pedido. Outro JS, no servidor, responde. Você, no começo, só escreve o lado da tela. Saber que o outro lado *pode* ser JS já desfaz a ideia de que “programar de verdade” é automaticamente outra língua.

## O que levar daqui

Mesma gramática. Casa diferente. O navegador vê a página; o servidor vê o pedido. Não coloque na casa errada o que a outra casa não deve ver.`,
  },
  {
    slug: 'o-que-e-json',
    titulo: 'O que é JSON — e por que a internet não manda o objeto direto?',
    resumo: 'Programa pensa em objeto. Fio de internet pensa em texto. JSON é o combinado entre os dois.',
    imagem_capa: '/images/novidades/json.svg',
    markdown: `No JavaScript, um aluno pode ser isto:

\`{ nome: 'Lia', idade: 19 }\`

Isso é um **objeto**: pares de nome e valor na memória do programa. O problema: a internet não manda “memória de programa”. Manda texto. Bytes. Letras.

Se cada linguagem mandasse seu objeto do jeito dela, Python não entenderia JavaScript, que não entenderia Go. Precisava de um combinado.

O combinado que ganhou se chama **JSON**.

## O que JSON é, com calma

JSON significa JavaScript Object Notation — “notação de objeto do JavaScript”. O nome denuncia a origem. O uso passou do JS: Python, Java, PHP, tudo lê JSON.

Na prática, é texto com regras:

- chaves entre aspas duplas: \`"nome"\`
- strings entre aspas duplas
- números sem aspas
- \`true\`, \`false\`, \`null\`
- listas entre colchetes
- objetos entre chaves

Exemplo:

\`{ "nome": "Lia", "idade": 19, "ok": true }\`

Parece objeto JS. Não é. É um pedaço de texto. Por isso as aspas nas chaves são obrigatórias. Por isso não pode ter comentário. Por isso não pode ter função no meio.

## Por que não mandar o objeto “cru”

Porque o objeto cru só existe *dentro* daquele programa, naquela língua, naquela hora. O fio entre o seu celular e o servidor do banco não carrega a gaveta \`let aluno\`. Carrega uma sequência de caracteres.

Texto atravessa rede, arquivo, copiar-e-colar, qualquer língua. Objeto de JavaScript, não.

## Como o JS vai e volta

\`JSON.stringify(aluno)\` transforma o objeto em texto. É o que você manda.

\`JSON.parse(texto)\` transforma o texto em objeto. É o que você lê.

Se o texto estiver quebrado (vírgula a mais, aspas simples, um “oi” no meio), o parse explode. Por isso, em código de verdade, o parse vai num \`try\`/\`catch\` e a pessoa vê “não deu para ler”, não um crash.

## JSON não é arquivo obrigatório

Pode viver num \`.json\` sim. Pode viver no corpo de uma resposta de API, sem arquivo nenhum. O formato é o mesmo.

## O que levar daqui

A internet não fala objeto. Fala texto. JSON é o texto combinado, com cara de objeto, que quase todo programa no planeta aceitou ler. Stringify vai. Parse volta. Aspas duplas nas chaves. Sem função no meio.`,
  },
  {
    slug: 'javascript-nao-e-java',
    titulo: 'Por que todo mundo confunde JavaScript com Java?',
    resumo: 'O nome foi marketing. As linguagens não são parentes. A confusão é velha e ainda pega quem está começando.',
    imagem_capa: '/images/novidades/java-nao-js.svg',
    markdown: `Você conta que está aprendendo JavaScript. Alguém responde: “ah, Java”. Você hesita. São a mesma coisa? Uma é a versão web da outra?

Não.

## De onde veio o nome

JavaScript nasceu em 1995, no navegador Netscape, criada por Brendan Eich em poucas semanas. O nome de trabalho era Mocha, depois LiveScript. Na hora de lançar, Java era a moda da indústria. A Netscape fez um acordo de marketing com a Sun e colou “Java” no nome.

Não foi adoção técnica. Foi vitrine. A língua não herdou a gramática da Java. Não herdou a máquina virtual da Java. Herdou o prefixo.

Java é outra história: linguagem de 1995 também, da Sun, feita para programas grandes, tipos explícitos, rodar em máquina virtual em qualquer sistema. Android antigo, bancos, sistemas internos. Ponto e vírgula obrigatório, classe em tudo, compilação.

## O que cada uma faz hoje (mapa grosso)

**JavaScript:** a língua da web no navegador. Também no servidor (Node e parentes). Tipagem flexível. Você começa com uma linha no Console.

**Java:** sistemas, Android (ainda), backend clássico. Tipagem rígida. Você começa com uma classe e um \`main\`.

Dá para as duas falarem com a internet. Dá para as duas no currículo de faculdade. Não dá para copiar um trecho de uma e colar na outra e esperar que rode.

## Por que a confusão não é boba

Porque o nome *foi feito* para confundir, no sentido de “pegar carona”. Quem nunca programou ouve Java e JavaScript como quem ouve “micro-ondas” e “microscópio”: a primeira metade é igual, o objeto não.

Em entrevista, em grupo de família, em post, a correção educada cabe numa frase: “JavaScript é a da página. Java é outra língua. O nome foi marketing nos anos 90.”

## O que levar daqui

JavaScript não é Java. Não é “Java para iniciante”. Não é “Java leve”. É uma língua com história própria, dona da web no navegador, e um nome que a indústria escolheu por moda. Agora você pode explicar isso sem se desculpar.`,
  },
]
