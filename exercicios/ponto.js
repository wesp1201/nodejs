/**
 * PDV - ponto de vendas
 */

const read = require('readline-sync')

//variaveis
let total
let desconto
let valor
let dinheiro
let troco

console.clear()
console.log('==================')
console.log('=======PDV========')
console.log('==================')

//entrada
valor =Number(read.question('digite o valor total da compra:'))
desconto =Number(read.question('digite o valor do desconto em %:'))

//preocessamento
total = valor - (desconto * valor) / 100

//saida1
console.log(`total: R$ ${total.toFixed(2)}`)
console.log('')
console.log('_____________________________')

//entrada 2
dinheiro =Number(read.question('digite o valor pago em dinheiro:'))

//processamento 2
troco = (dinheiro - total)

//saida
console.log(`troco R$ ${troco.toFixed(2)}`)