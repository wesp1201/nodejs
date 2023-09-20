/**
 * Calculo de porcentagem
 */

const read = require ('readline-sync')

//variaveis
let x,y,valor 

console.clear()
console.log('==========================')
console.log('==calculo da porcentagem==')
console.log('==========================')

//entrada
x =Number(read.question('digite o valor de x para efetuar o calculo:'))
y =Number(read.question('digite o valor de y para efetuar o calculo:'))

//processamento
valor =(x * y) / 100

//saida
console.log('--------------------')
console.log('resultado do calculo')
console.log(` ${x}% de ${y}% = ${valor}`)
console.log('--------------------')