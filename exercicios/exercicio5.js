/**
 * App do exercicio5
 */

const read = require('readline-sync')

let libras
let kilos

console.clear()
console.log('====================')
console.log('=App do exercicio 5=')
console.log('====================')

libras =Number(read.question('qual o valor em libras?:'))

kilos =(libras/2.2)

console.clear()
console.log('resultado do calculo')
console.log(`kilos ${kilos.toFixed(3)}`)