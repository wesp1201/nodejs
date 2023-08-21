/**
 * App do exercicio 6
 */

const read = require('readline-sync')

let custo
let lucro
let venda
let valor

console.clear()
console.log('=================')
console.log('=App exercicio 6=')
console.log('=================')

custo =Number(read.question('digite o valor do custo?:'))
lucro =Number(read.question('quanto deseja de lucro?:'))

valor =(custo*lucro) /100
venda =(custo+valor)

console.clear()
console.log('==================')
console.log('resultado final')
console.log(`valor ${valor}%`)
console.log(`venda ${venda}`)
