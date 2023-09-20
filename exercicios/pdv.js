/**
 *  PDV (Ponto de Vendas)
 */

const read = require('readline-sync')

let total
let desconto
let valor
let troco
let tcd

console.clear()
console.log('===================')
console.log('==Ponto de Vendas==')
console.log('===================')


valor =Number(read.question('qual o valor pago em dinheiro?:'))
total =Number(read.question('qual o valor total?'))
desconto =Number(read.question('qual o valor do desconto?:'))

tcd =(desconto*valor) /100
troco =(total-tcd)



console.clear()
console.log('==========================')
console.log(`total: ${total}`)
console.log(`desconto: ${desconto}`)
console.log(`valor: ${valor}`)
console.log('==========================')
console.log('resultado do calculo')
console.log(` ${tcd}`)
console.log('==========================')
console.log('troco')
console.log(` ${troco}`)
