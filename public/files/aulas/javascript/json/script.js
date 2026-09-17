// Aula: JSON. Bancada: Console.
// Tente: JSON.parse('{"ok": true}') e leia .ok.
// Tente: JSON.parse('nao e json') e leia o erro vermelho.
//
// Objeto JS não viaja na rede. JSON é o texto combinado.
// stringify vai (objeto → texto). parse volta (texto → objeto).

const aula = { titulo: 'JSON', minutos: 20 }
const texto = JSON.stringify(aula)
console.log('texto que viaja', texto)
console.log('de volta', JSON.parse(texto).titulo)
