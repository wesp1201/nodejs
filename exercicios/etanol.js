/**
 *   (etanol x gasolina)
 */

const read = require('readline-sync')
const colors = require('colors')

console.clear()
console.log('----------------------')
console.log('-- etanol x gasolina--')
console.log('----------------------')

let gasolina, etanol

gasolina =Number(read.question('digite o preco da gasolina:').replace(',','.'))
etanol =Number(read.question('digite o preco do etanol:').replace(',','.'))

console.clear()
if (etanol < 0.7 * gasolina){
    console.log('etanol mais vantajoso'.green)
} else{
    console.log('gasolina mais vantajoso'.red)
}