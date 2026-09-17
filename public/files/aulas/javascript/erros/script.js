// Aula: Erros. Bancada: Console.
// Tente: lerJson('{"ok":true}') e lerJson('banana').
// Tente: os dois passam pelo finally.
//
// try tenta. catch pega o erro. finally roda sempre.
// A página continua. Evite alert na cara de quem lê.

function lerJson(texto) {
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
console.log(lerJson('ops'))
