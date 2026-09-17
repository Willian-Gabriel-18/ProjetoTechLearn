// Arrow = forma curta. Se o corpo é uma expressão, o return vem implícito.
const dobro = (n) => n * 2
const nome = 'Lia'
// Crase: ${ } encaixa o valor no meio da frase.
console.log(dobro(7))
console.log(`Olá, ${nome}`)

// Sem os pontinhos, b e original são A MESMA lista.
const original = [1, 2]
const mesma = original
mesma[0] = 9
console.log('mesma gaveta', original)

// Com [...], copia os itens para um array NOVO.
const copia = [...[1, 2]]
copia[0] = 9
console.log('cópia', copia)
