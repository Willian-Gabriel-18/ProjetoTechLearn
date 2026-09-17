// Mesma Promise, letra de passo a passo.
// await só funciona dentro de função async. Pausa ESTA função, não a página.

function esperar(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms)
  })
}

async function run() {
  console.log('antes')
  await esperar(300)
  console.log('depois')
}

run()
