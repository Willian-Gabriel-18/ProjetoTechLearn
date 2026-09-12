// async function + await: espera sem virar escada de then.
// Só funciona dentro de função async.

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
