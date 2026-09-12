// Objeto JS não viaja na rede. JSON é o texto combinado.
// stringify vai. parse volta.

const aula = { titulo: 'JSON', minutos: 20 }
const texto = JSON.stringify(aula)
console.log(texto)
console.log(JSON.parse(texto).titulo)
