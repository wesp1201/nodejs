/**
 * App de conversao de Real para Euro
 */

const read = require('readline-sync')
const colors = require('colors')

let real
let euro
let cota

console.clear()
console.log('+++++++++++++++++++++++++++++++++')
console.log('++ consversao de Real em Euros ++')
console.log('+++++++++++++++++++++++++++++++++')

real =Number(read.question('qual o valor em Real?:').replace(',','.'))
cota =Number(read.question('digite a cota:').replace(',','.'))

euro =(real * cota)

console.clear()
console.log('===============================')
console.log('resultado da conversao')
console.log('===============================')
console.log(`euro = ${euro.toFixed(2)} `)
console.log('===============================')