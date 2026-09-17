// Mini-projeto: pedra, papel e tesoura. Pasta + Chrome. F5 depois de salvar.
// Tente: jogue até empatar — o placar não pode somar.
// Tente: abra o Console (F12) se o placar não subir: o vermelho aponta a linha.
//
// Mini-projeto do iniciante. Leia de cima a baixo: cada bloco é uma aula que você já fez.

// Sorteia a jogada do computador. Math.random() vai de 0 até quase 1.
function jogadaComputador() {
  const n = Math.random()
  if (n < 0.33) return 'pedra'
  if (n < 0.66) return 'papel'
  return 'tesoura'
}

// if decide o resultado. Empate devolve "empate" — não soma ponto lá embaixo.
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
}

// let: os pontos mudam a cada rodada.
let pontosVoce = 0
let pontosPc = 0

// ids do HTML. Se mudar o id lá, mude aqui.
const placar = document.querySelector('#placar')
const rodada = document.querySelector('#rodada')

// Cada botão tem data-jogada. Clique → joga, compara, atualiza o texto (sem recarregar).
document.querySelectorAll('[data-jogada]').forEach(function (botao) {
  botao.addEventListener('click', function () {
    const voce = botao.getAttribute('data-jogada')
    const pc = jogadaComputador()
    const r = resultado(voce, pc)
    if (r === 'você') pontosVoce = pontosVoce + 1
    if (r === 'computador') pontosPc = pontosPc + 1
    // textContent troca o que a pessoa lê. Empate não entra nos ifs de ponto.
    placar.textContent = 'Você ' + pontosVoce + ' × ' + pontosPc + ' Computador'
    rodada.textContent = 'Você: ' + voce + '. PC: ' + pc + '. ' + r
  })
})
