// Três botões. O computador sorteia. if decide quem ganhou. textContent atualiza o placar.

function jogadaComputador() {
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
}

let pontosVoce = 0
let pontosPc = 0
const placar = document.querySelector('#placar')
const rodada = document.querySelector('#rodada')

document.querySelectorAll('[data-jogada]').forEach(function (botao) {
  botao.addEventListener('click', function () {
    const voce = botao.getAttribute('data-jogada')
    const pc = jogadaComputador()
    const r = resultado(voce, pc)
    if (r === 'você') pontosVoce = pontosVoce + 1
    if (r === 'computador') pontosPc = pontosPc + 1
    placar.textContent = 'Você ' + pontosVoce + ' × ' + pontosPc + ' Computador'
    rodada.textContent = 'Você: ' + voce + '. PC: ' + pc + '. ' + r
  })
})
