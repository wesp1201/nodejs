/**
 * App do exercicio 4
 */

const read = require('readline-sync')

let milhas
let km

console.clear()

console.log('======================')
console.log('== App exercicio 5 == ')
console.log('======================')

milhas =Number(read.question('digite a velocidade em milha:').replace(',','.'))
km = milhas * 1.60934

console.log(`velocidade: ${km.toFixed(2)} km/h`)
