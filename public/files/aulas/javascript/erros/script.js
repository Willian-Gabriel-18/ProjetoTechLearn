// try/catch segura o erro. A página continua. Evite alert na cara do aluno.

function lerJson(texto) {
  try {
    return JSON.parse(texto)
  } catch (e) {
    console.log('JSON inválido')
    return null
  }
}

console.log(lerJson('{"ok":true}'))
console.log(lerJson('ops'))
