import { md, conce, code, tente, ex, proxima } from './helpers.mjs'

export const avancado = {
  this: [
    md(`## O que você vai conseguir

Ler um método de objeto e saber quem é \`this\` naquele clique — e por que a arrow é diferente.`),
    md(`## this depende de como você chama

Na \`function\` clássica, \`this\` é quem chamou com o ponto. \`conta.mostrar()\` → \`this\` é \`conta\`. Se arrancar a função (\`const solta = conta.mostrar; solta()\`), \`this\` se perde.

Arrow não cria \`this\` próprio: herda o de fora. Por isso às vezes “salva” e às vezes atrapalha.`),
    conce(
      'this',
      'Quem chamou o método com o ponto. conta.mostrar() → this é conta. Arrow não cria this próprio: herda o de fora.',
    ),
    md(`## Exemplo mínimo desta aula`),
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
      'No Console, cole o objeto conta. Rode os dois chamados. O segundo vira undefined (ou erro estrito). Depois: const mostra = () => console.log(conta.saldo) e chame mostra().',
    ),
    ex('Em uma frase: this depende de como a função é chamada, não de onde foi escrita (na function clássica).'),
    proxima(
      'Na próxima aula um molde com class: duas contas, cada uma com seu saldo.',
    ),
  ],

  classes: [
    md(`## O que você vai conseguir

Descrever um molde com \`class\` e criar duas instâncias com \`new\` — sem virar um curso de Java.`),
    md(`## Um molde, várias fichas

\`class\` é açúcar para criar objetos parecidos. \`constructor\` roda no \`new\`. Cada instância tem seu \`this.saldo\`.

Você não precisa de herança no primeiro uso. Herança profunda vira Java na cabeça — não é o objetivo.`),
    conce(
      'class',
      'Açúcar para criar objetos parecidos. constructor roda no new. Cada instância tem seu this.',
    ),
    md(`## Exemplo mínimo desta aula`),
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
    tente(
      'No Console: class Aluno { constructor(nome) { this.nome = nome } } e dois alunos. Logue os nomes — têm que ser independentes.',
    ),
    ex('Por que new Conta(10) e new Conta(0) não compartilham o mesmo saldo?'),
    proxima(
      'Na próxima aula o mecanismo por baixo das classes: se o objeto não tem a propriedade, o JS olha no protótipo.',
    ),
  ],

  prototipo: [
    md(`## O que você vai conseguir

Explicar com calma: se o objeto não tem a propriedade, o JavaScript olha no protótipo.`),
    md(`## A reserva por baixo das classes

Isso é o mecanismo. Você quase não escreve \`__proto__\` no dia a dia. Só precisa não se assustar quando alguém citar “prototype”.

Cadeia: filho → pai → Object.prototype. Se não achar, \`undefined\`.

Se esta aula estiver pesada, tudo bem voltar depois. O mini-projeto avançado **não** exige você criar cadeias na mão.`),
    conce(
      'protótipo',
      'Objeto reserva onde o JS procura nomes que não estão no próprio objeto.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(`const pai = { tipo: 'conta' }
const filho = Object.create(pai)
filho.saldo = 3
console.log(filho.saldo)
console.log(filho.tipo)`),
    tente(
      'No Console, cole o exemplo. Confira Object.getPrototypeOf(filho) === pai. Depois mude pai.tipo e leia filho.tipo de novo.',
    ),
    ex('Se o filho não tem tipo e o pai tem, de onde vem filho.tipo?'),
    proxima(
      'Na próxima aula você prevê a ordem dos logs: sincrono primeiro, depois o setTimeout 0.',
    ),
  ],

  'event-loop': [
    md(`## O que você vai conseguir

Prever a ordem dos logs: sincrono primeiro, depois o \`setTimeout 0\` — e não “ao mesmo tempo”.`),
    md(`## Não é ao mesmo tempo. É uma fila.

A pilha termina o que está agora. Só então pega o que estava esperado (timeout, resposta de rede). Por isso B vem depois de C, mesmo com 0 ms.

Se saísse A, B, C com o timeout no meio, o navegador travaria cada espera.`),
    conce(
      'event loop',
      'A fila do JavaScript: termina o que está na pilha agora; só então pega o que estava esperado.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(`console.log('A')
setTimeout(function () {
  console.log('B')
}, 0)
console.log('C')`),
    tente(
      'No Console, rode o bloco. A ordem é A, B, C (C depois, mesmo com 0). Encaixe Promise.resolve().then(() => console.log(\'D\')) e anote se D vem antes ou depois de C. Não precisa decorar “microtask” agora.',
    ),
    ex('Por que setTimeout com 0 não roda na hora, antes do próximo console.log?'),
    proxima(
      'Na próxima aula um JSON ruim não derruba a página: você mostra uma frase clara para a pessoa.',
    ),
  ],

  erros: [
    md(`## O que você vai conseguir

Um JSON ruim não derruba a aula inteira: você mostra uma frase clara para a pessoa.`),
    md(`## Tentar, pegar, seguir

\`try\` tenta. Se der erro, cai no \`catch\` em vez de parar tudo. Mostre mensagem humana.

Evite \`alert\` na produção (o beta fazia isso — não vamos repetir). Um parágrafo “CEP não encontrado” respeita mais quem está lendo.`),
    conce(
      'try/catch',
      'Tenta o bloco try. Se der erro, cai no catch em vez de parar tudo. Mostre mensagem humana.',
    ),
    md(`## Exemplo mínimo desta aula`),
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
    tente(
      'No Console, cole lerJson. Chame com JSON válido e com a palavra banana. A página continua, o segundo devolve null.',
    ),
    ex('Por que é melhor um parágrafo “CEP não encontrado” do que um pop-up vermelho?'),
    proxima(
      'Na próxima aula, em analogia: o que Vite e Nuxt fazem quando o projeto “compila”.',
    ),
  ],

  bundler: [
    md(`## O que você vai conseguir

Explicar em analogia o que Vite/Nuxt fazem: juntam arquivos, traduzem o que o navegador antigo não entende, e servem o site.`),
    md(`## Várias receitas, um marmitex

No iniciante você abria HTML + JS. Num app grande isso vira dezenas de arquivos. O **bundler** empacota. O Nuxt ainda escolhe o que vai no servidor e o que vai no navegador.

Você não configura webpack nesta aula. Só precisa da analogia: várias receitas viram um marmitex. Nuxt usa Vite por baixo.

Esta plataforma, em desenvolvimento, é o Nuxt fazendo bundler + servidor. Você não abre arquivo por arquivo.`),
    conce(
      'bundler',
      'Ferramenta que lê seu código-fonte e gera o que o navegador baixa. Analogia: várias receitas viram um marmitex.',
    ),
    tente(
      'Olhe o endereço desta plataforma em desenvolvimento (localhost) ou o site no ar. O que chega no Chrome já veio empacotado. Não precisa abrir cada .vue no navegador.',
    ),
    ex('Cite uma vantagem de não mandar o código-fonte cru para o visitante (nome de arquivo, tamanho, import).'),
    proxima(
      'Na próxima aula você recusa colar HTML que veio de desconhecido — e nunca põe senha no JS que o Chrome baixa.',
    ),
  ],

  'seguranca-front': [
    md(`## O que você vai conseguir

Recusar colar HTML que veio de desconhecido na página — e nunca pôr senha no JS que o navegador baixa.`),
    md(`## Texto de fora não vira HTML

**XSS** é quando alguém injeta script na sua página. Se você fizer \`elemento.innerHTML = textoDoUsuario\`, abriu a porta. Prefira \`textContent\`.

Senha de API no front é senha pública. \`DATABASE_URL\` vive no servidor / \`.env\`, nunca num arquivo que o Chrome baixa.`),
    conce(
      'XSS',
      'Cross-site scripting: código malicioso entra no site e roda no navegador da vítima. Defesa simples no começo: não transformar texto de fora em HTML.',
    ),
    md(`## Exemplo mínimo desta aula`),
    code(`const nome = '<img src=x onerror=alert(1)>'
const p = document.querySelector('#nome')
p.textContent = nome
// p.innerHTML = nome  // não faça isso com dado de fora`),
    tente(
      'Abra o zip no Chrome. textContent tem que mostrar o símbolo < na tela, não um alerta. Esse é o comportamento seguro. F12 se algo vermelho aparecer.',
    ),
    ex('Onde a senha do banco (DATABASE_URL) deve viver? (Pista: servidor / .env, nunca num arquivo que o Chrome baixa.)'),
    proxima(
      'Na próxima aula você fecha o avançado com um buscador de CEP: loading, erro amigável, cidade na tela.',
    ),
  ],

  'projeto-consulta-publica': [
    md(`## O que vai existir na tela no final

Campo de CEP, botão, um parágrafo de saída. Estados: carregando, cidade e UF, CEP inexistente, falha de rede. Sem recarregar. Sem \`innerHTML\` com a resposta.`),
    md(`## O que desta trilha entra

fetch + async/await + preventDefault + textContent + try/catch. O iniciante e o intermediário já deram o formulário e o JSON.`),
    md(`## Esqueleto mínimo`),
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
    tente(
      'Abra o zip da consulta. Formulário + parágrafo. CEP com 8 dígitos. Loading, sucesso, CEP inexistente e falha de rede (desligue o Wi-Fi). Nada de innerHTML com a resposta.',
    ),
    ex(
      'Checklist: preventDefault, trim, mensagem para humano, textContent. Se os quatro estiverem lá, o projeto está feito.',
    ),
  ],
}
