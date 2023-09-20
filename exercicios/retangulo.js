/**
 * calculo da area e perimetro de um retangulo
 */

const read = require('readline-sync')
const colors = require('colors')

let base, altura, area, perimetro

console.clear()
console.log('retangulo')
console.log('')
console.log(' _____________________')
console.log('|                    |')
console.log('|                    | altura')
console.log('|____________________|')
console.log('        base')

altura =Number(read.question('digite o valor da altura:').replace(',','.'))
base =Number(read.question('digite o valor da base:').replace(',','.'))

area = base*altura
perimetro = base + altura + base + altura

console.log(`area do perimetro: ${area.toFixed(2)}`)
