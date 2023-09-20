/**
 * Exemplo de uso do laço for
 */
const read = require('readline-sync')
let valor

console.clear()
console.log('===== tabuada =====')
valor = Number (read.question('digite o valor da tabuada: '))
for (let i = 1; i < 11; i++) {
    console.log(`${valor} x ${i} = ${valor * i}`)
}
