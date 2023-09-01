/**
 * App do exercicio 6
 */

const read = require('readline-sync')

let custo
let lucro
let venda
let valor

console.clear()
console.log('                        _      _          __   ')
console.log('  _____  _____ _ __ ___(_) ___(_) ___    / /_  ')
console.log(' / __ \\ \\/ /  _\\ __/ __| |/ __| |/ _ \\  | _  \\ ')
console.log('|  __/>  <  __/ | | (__| | (__| | (_) | | (_) |')
console.log(' \\___/_/\\_\\___|_|  \\___|_|\\___|_|\\___/   \\___/')


console.log('+++++++++++++++++++')
console.log('+Conversor de peso+')
console.log('+   Libras > kg   +')
console.log('+++++++++++++++++++')

custo =Number(read.question('digite o valor do custo?:').replace(',','.'))
lucro =Number(read.question('quanto deseja de lucro?:').replace(',','.'))

valor =(custo*lucro) /100
venda =(custo+valor)

console.clear()
console.log('==================')
console.log('resultado final')
console.log('==================')
console.log(`valor ${valor}%`)
console.log(`venda ${venda}`)
console.log('==================')
