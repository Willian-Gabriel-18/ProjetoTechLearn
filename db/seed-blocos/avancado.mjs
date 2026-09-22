import { md, conce, code, tente, ex, proxima } from './helpers.mjs'

export const avancado = {
  this: [
    md(`Objeto com método: a ficha tem uma ação. \`conta.mostrar()\` lê o saldo **desta** conta.

A palavra \`this\` é “quem chamou com o ponto”. Na \`function\` clássica, \`this\` **não** depende de onde a função foi escrita. Depende de **como** ela é chamada.

Bancada: **Console**.`),
    md(`\`conta.mostrar()\` — o ponto está em \`conta\`. \`this\` é \`conta\`. O log mostra 10.

Se você arrancar a função: \`const solta = conta.mostrar\` e depois \`solta()\`, não há ponto. \`this\` se perde (vira \`undefined\` em modo estrito, ou o objeto global no Console solto). O saldo some.

**Arrow** \`() =>\` não cria \`this\` próprio: herda o de fora. Por isso às vezes “salva” (um clique que precisa da conta de fora) e às vezes atrapalha (método que deveria olhar o objeto da esquerda). Nesta aula o método é \`function\`, de propósito.`),
    conce(
      'this',
      'Quem chamou o método com o ponto. conta.mostrar() → this é conta. Arrow não cria this próprio: herda o de fora.',
    ),
    code(`const conta = {
  saldo: 10,
  mostrar: function () {
    console.log(this.saldo)
  }
}
conta.mostrar()

const solta = conta.mostrar
solta()`),
    tente(
      'No Console, cole o objeto conta. Rode os dois chamados. O segundo vira undefined (ou erro estrito). Depois: const mostra = () => console.log(conta.saldo) e chame mostra() — a arrow olha conta de fora, não o this.',
    ),
    ex(
      'Na function clássica, this depende de onde a função foi escrita ou de como ela é chamada? Olhe conta.mostrar() vs solta().',
      'Depende de **como é chamada**. `conta.mostrar()` — o ponto está em `conta`, `this` é `conta`. `solta()` — não há ponto, `this` se perde. O lugar onde a função foi escrita não decide. (Arrow é o caso especial: herda o this de fora, não cria o próprio.)',
    ),
    proxima(
      'Na próxima aula um molde com class: duas contas, cada uma com seu saldo.',
      '/aprender/javascript/classes',
      'Classes (OOP leve)',
    ),
  ],

  classes: [
    md(`Várias fichas parecidas: duas contas, dois alunos. Copiar o objeto na mão cansa e erra.

\`class\` é um **molde**. \`constructor\` roda no \`new\`. Cada instância ganha o seu \`this.saldo\` — a gaveta daquela conta, não de todas.

Você não precisa de herança no primeiro uso. Herança profunda vira Java na cabeça. O essencial: uma classe filha pode reaproveitar o molde da mãe com \`extends\` e \`super\`, se um dia precisar. Hoje: duas instâncias independentes.

Bancada: **Console**.`),
    conce(
      'class',
      'Açúcar para criar objetos parecidos. constructor roda no new. Cada instância tem seu this.',
    ),
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
    md(`\`a.saldo\` vira 15. \`b.saldo\` continua 0. Duas gavetas. \`new\` é o que abre cada uma.

Se um dia você quiser \`class Poupanca extends Conta\`, \`super(saldo)\` chama o constructor da mãe. Não é obrigatório neste mini-curso.`),
    tente(
      'No Console: class Aluno { constructor(nome) { this.nome = nome } } e dois alunos. Logue os nomes — têm que ser independentes. Deposite só em um se copiar o molde da Conta.',
    ),
    ex(
      'Por que new Conta(10) e new Conta(0) não compartilham o mesmo saldo?',
      'Porque `new` abre **uma instância**. Cada uma tem o próprio `this.saldo`. O molde é o mesmo; as gavetas não. Por isso `a.depositar(5)` não mexe em `b`.',
    ),
    proxima(
      'Na próxima aula o mecanismo por baixo das classes: se o objeto não tem a propriedade, o JS olha no protótipo.',
      '/aprender/javascript/prototipo',
      'Protótipo (o mecanismo por baixo)',
    ),
  ],

  prototipo: [
    md(`Por baixo da \`class\` existe um mecanismo antigo: o **protótipo**. Se o objeto não tem a propriedade, o JavaScript olha no objeto reserva (o pai). Se não achar, sobe de novo. No fim, \`undefined\`.

Você quase não escreve \`__proto__\` no dia a dia. Só precisa não se assustar quando alguém citar “prototype” num fórum.

Cadeia típica: filho → pai → \`Object.prototype\`.

O mini-projeto avançado **não** exige criar cadeias na mão. Se esta aula pesar, volte depois.

Bancada: **Console**.`),
    conce(
      'protótipo',
      'Objeto reserva onde o JS procura nomes que não estão no próprio objeto.',
    ),
    code(`const pai = { tipo: 'conta' }
const filho = Object.create(pai)
filho.saldo = 3
console.log(filho.saldo)
console.log(filho.tipo)`),
    md(`\`filho.saldo\` está no próprio filho. \`filho.tipo\` **não**: o JS olha no pai e acha \`'conta'\`.

\`Object.getPrototypeOf(filho) === pai\` confirma o elo. Se você mudar \`pai.tipo\`, \`filho.tipo\` acompanha — é a mesma reserva, não uma cópia.`),
    tente(
      'No Console, cole o exemplo. Confira Object.getPrototypeOf(filho) === pai. Depois mude pai.tipo e leia filho.tipo de novo.',
    ),
    ex(
      'Se o filho não tem tipo e o pai tem, de onde vem filho.tipo?',
      'Do **protótipo** (o pai). O JS não acha `tipo` no filho, então olha no objeto reserva. `Object.create(pai)` é o que liga os dois. Não é uma cópia: se o pai mudar `tipo`, o filho lê o valor novo.',
    ),
    proxima(
      'Na próxima aula você prevê a ordem dos logs: sincrono primeiro, depois o setTimeout 0.',
      '/aprender/javascript/event-loop',
      'A fila do JavaScript — event loop',
    ),
  ],

  'event-loop': [
    md(`JavaScript não faz mil coisas **ao mesmo tempo**. Faz uma fila.

A **pilha** termina o que está agora (código síncrono). Só então pega o que estava esperado: timeout, resposta de rede. Por isso um \`setTimeout(..., 0)\` **não** fura a fila.

Se o navegador parasse a pilha a cada espera, a página travaria.

Bancada: **Console**. Anote a ordem; não chute.`),
    conce(
      'event loop',
      'A fila do JavaScript: termina o que está na pilha agora; só então pega o que estava esperado.',
    ),
    code(`console.log('A')
setTimeout(function () {
  console.log('B')
}, 0)
console.log('C')`),
    md(`A ordem é **A, C, B**. C vem antes de B mesmo com 0 ms. O timeout só entra quando a pilha esvazia.

Tem uma fila ainda mais urgente (microtask: \`Promise.then\`). Não precisa decorar o nome agora. Se você encaixar \`Promise.resolve().then(() => console.log('D'))\`, D costuma vir **antes** do timeout B e **depois** de C. O ponto da aula: nada disso é “ao mesmo tempo”.`),
    tente(
      'No Console, rode o bloco. A ordem é A, C, B (C depois de A, B por último). Encaixe Promise.resolve().then(() => console.log(\'D\')) e anote se D vem antes ou depois de B.',
    ),
    ex(
      'Por que setTimeout com 0 não roda na hora, antes do próximo console.log?',
      'Porque 0 ms não fura a **pilha**. O JS termina o que está agora (`console.log(\'C\')`) e só então pega o que estava esperado. A ordem é A, C, B — não A, B, C. Se saísse B no meio, cada espera travaria a página.',
    ),
    proxima(
      'Na próxima aula um JSON ruim não derruba a página: você mostra uma frase clara para a pessoa.',
      '/aprender/javascript/erros',
      'Erros de verdade',
    ),
  ],

  erros: [
    md(`JSON inválido, CEP inexistente, Wi-Fi caindo. Se você não pegar o erro, a página **para** e o Console fica vermelho — a pessoa na tela não entende.

\`try\` tenta. Se der erro, cai no \`catch\` em vez de parar tudo. \`finally\` (opcional) roda **sempre**, deu certo ou não — útil para tirar o “carregando”.

\`throw new Error('rede')\` é você **avisando** que deu ruim, de propósito, para o catch (ou o caller) tratar.

Evite \`alert\` na produção. Um parágrafo “CEP não encontrado” respeita mais quem está lendo.

Bancada: **Console**.`),
    conce(
      'try/catch',
      'Tenta o bloco try. Se der erro, cai no catch em vez de parar tudo. throw avisa de propósito. finally roda sempre.',
    ),
    code(`function lerJson(texto) {
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
console.log(lerJson('ops'))`),
    tente(
      'No Console, cole lerJson. Chame com JSON válido e com a palavra banana. A página continua, o segundo devolve null. Os dois passam pelo finally.',
    ),
    ex(
      'Por que é melhor um parágrafo “CEP não encontrado” do que um pop-up vermelho?',
      'O parágrafo fica **na página**, no contexto da busca. O `alert` trava tudo, some o contexto e parece vírus. `try/catch` pega o erro; `textContent` mostra a frase humana. A pessoa continua na tela, sem um pop-up.',
    ),
    proxima(
      'Na próxima aula, em analogia: o que Vite e Nuxt fazem quando o projeto “compila”.',
      '/aprender/javascript/bundler',
      'Módulos e um bundler de relance',
    ),
  ],

  bundler: [
    md(`No básico você abria HTML + JS na pasta. Num app grande isso vira dezenas de arquivos, \`import\` que o Chrome antigo não entende, nomes longos, comentários.

O **bundler** lê o código-fonte e gera o que o visitante baixa. Analogia: várias receitas viram um **marmitex**.

Três ganhos concretos:

- **Nome** — o arquivo que chega não precisa se chamar \`escopo-e-closure.mjs\`. Pode ser um nome curto gerado.
- **Tamanho** — tira comentário, espaço, código que a página desta rota não usa.
- **import** — junta módulos num formato que o navegador da pessoa aguenta.

O Nuxt (esta plataforma) usa **Vite** por baixo. Você não configura webpack nesta aula. Só precisa da analogia: o que chega no Chrome já veio empacotado. Você não abre cada \`.vue\` no navegador.

Bancada: olhe o endereço desta plataforma (localhost ou o site publicado). Não precisa baixar zip.`),
    conce(
      'bundler',
      'Ferramenta que lê seu código-fonte e gera o que o navegador baixa. Analogia: várias receitas viram um marmitex. Vite/Nuxt fazem isso.',
    ),
    tente(
      'Olhe o endereço desta plataforma em desenvolvimento (localhost) ou o site publicado. O que chega no Chrome já veio empacotado. Não precisa abrir cada .vue no navegador.',
    ),
    ex(
      'O que o bundler faz, na analogia do marmitex — e cite um ganho (nome, tamanho ou import).',
      'Várias receitas (seus arquivos) viram um marmitex (o que o visitante baixa). Um ganho: **tamanho** (tira comentário e o que a rota não usa), ou **nome** (arquivo gerado, não o caminho cru), ou **import** (módulos viram algo que o Chrome da pessoa entende). Sem bundler, você mandaria o código-fonte cru.',
    ),
    proxima(
      'Na próxima aula você recusa colar HTML que veio de desconhecido — e nunca põe senha no JS que o Chrome baixa.',
      '/aprender/javascript/seguranca-front',
      'Segurança no front',
    ),
  ],

  'seguranca-front': [
    md(`Texto que veio de fora (campo, API, URL) **não** vira HTML na sua página.

**XSS** é quando alguém injeta script no seu site e o script roda no navegador da vítima. A porta mais boba: \`elemento.innerHTML = textoDoUsuario\`. Prefira \`textContent\`: trata o texto como texto.

Senha de API no front é senha pública — você já viu na aula de [fetch](/aprender/javascript/fetch). \`DATABASE_URL\` (senha do banco) vive no **servidor** / arquivo \`.env\`, nunca num JS que o Chrome baixa.

Bancada: **pasta + Chrome**. O zip mostra o símbolo \`<\` na tela, não um alerta.`),
    conce(
      'XSS',
      'Cross-site scripting: código malicioso entra no site e roda no navegador da vítima. Defesa simples no começo: não transformar texto de fora em HTML.',
    ),
    code(`const nome = '<img src=x onerror=alert(1)>'
const p = document.querySelector('#nome')
p.textContent = nome
// p.innerHTML = nome  // não faça isso com dado de fora`),
    tente(
      'Abra o zip no Chrome. textContent tem que mostrar o símbolo < na tela, não um alerta. Esse é o comportamento seguro. F12 se algo vermelho aparecer.',
    ),
    ex(
      'Onde a senha do banco (DATABASE_URL) deve viver?',
      'No **servidor** / arquivo `.env`. Nunca num arquivo que o Chrome baixa. O JS do front qualquer visitante lê (F12 → Sources). Senha no front é senha pública.',
    ),
    proxima(
      'Na próxima aula você fecha o avançado com um buscador de CEP: loading, erro amigável, cidade na tela.',
      '/aprender/javascript/projeto-consulta-publica',
      'Mini-projeto: consulta pública',
    ),
  ],

  'projeto-consulta-publica': [
    md(`No final existe, na tela: campo de CEP, botão, um parágrafo de saída. Estados: carregando, cidade e UF, CEP inexistente, falha de rede. Sem recarregar. Sem \`innerHTML\` com a resposta.

O que desta trilha entra: fetch + async/await + preventDefault + textContent + try/catch. O [básico](/aprender/javascript/eventos) e o [intermediário](/aprender/javascript/formularios) já deram o formulário e o JSON.

Bancada: **pasta + Chrome**, com internet. [Como abrir](/aprender/comecar/baixar-e-abrir).`),
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
    md(`O zip já monta o form e o script comentado. Leia cada função. Teste os quatro estados: CEP certo, CEP inventado, campo curto, Wi-Fi desligado.`),
    tente(
      'Abra o zip da consulta. Formulário + parágrafo. CEP com 8 dígitos. Loading, sucesso, CEP inexistente e falha de rede (desligue o Wi-Fi). Nada de innerHTML com a resposta.',
    ),
    ex(
      'Checklist: preventDefault, trim, mensagem para humano, textContent. Se os quatro estiverem lá, o projeto está feito.',
      `Os quatro no código e na tela:

1. preventDefault — a página não recarrega no submit.
2. trim (e 8 dígitos) — espaço e CEP curto não saem para a rede.
3. Mensagem para humano — “Buscando…”, “CEP não encontrado.”, “Falha de rede.”, não um erro vermelho cru.
4. textContent — a resposta da API nunca vira HTML.

try/catch pega a falha de rede. O zip comentado é a cola.`,
    ),
  ],
}
