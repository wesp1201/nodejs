/**
 * temperatura
 */

const read = require ('readline-sync')
//variaves
let c
let f

console.clear()
console.log('============================')
console.log('==conversor de temperatura==')
console.log('============================')
//entrada
f = Number(read.question('qual e a temperatura em fahrenheit?:'))

//processamento
c =(f - 32) /1.8

//saida
console.clear()
console.log('-------------------------')
console.log('conversao da temperatura')
console.log(`celsius ${c.toFixed(0)}`)
console.log('-------------------------')
