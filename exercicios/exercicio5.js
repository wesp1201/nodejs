/**
 * App do exercicio5
 */

const read = require('readline-sync')

let libras
let kilos

console.clear()
console.log('                        _      _         _____ ')
console.log('                       (_)    (_)       | ____|')
console.log('  _____  _____ _ __ ___ _  ___ _  ___   | |__  ')
console.log(' /  _ \\ \\/ / _ \\ __/ __| |/ __| |/ _ \\  |___ \\ ')
console.log('|  __/ > <  __/ | | (__| | (__| | (_) |  ___) |')
console.log(' \\___/_/\\_\\___|_|  \\___|_|\\___|_|\\___/  |____/ ')

console.log('+++++++++++++++++++++++++++++++++')
console.log('++consversao de libras em kilos++')
console.log('+++++++++++++++++++++++++++++++++')

libras =Number(read.question('qual o valor em libras?:').replace(',','.'))

kilos =(libras/2.2)

console.clear()
console.log('===============================')
console.log('resultado do calculo')
console.log('===============================')
console.log(`kilos = ${kilos.toFixed(2)} kg`)
console.log('===============================')