// Objeto JS não viaja na rede. JSON é o texto combinado.
// stringify vai (objeto → texto). parse volta (texto → objeto).

const aula = { titulo: 'JSON', minutos: 20 }
const texto = JSON.stringify(aula)
console.log('texto que viaja', texto)
console.log('de volta', JSON.parse(texto).titulo)
