/**
 * Hora Tecnica
 */

const read = require('readline-sync')

console.clear()
const reserva = 30
let rem 
let custo
let inv
let horasTec

//
rem = Number(read.question("Digite a remuneracao mensal pretendida: ").replace(",","."))
custo = Number(read.question("Digite o custo operacional: ").replace(",","."))
inv = Number(read.question("Digite o Investimento: ").replace(",","."))
horasTec = Number(read.question("Digite a horas trabalhadas por mes: "))

horasTec = (rem+(rem*reserva)/100+custo+(inv*rem)/100)/horasTec

console.clear()
console.log('=======================')
console.log('Resultado do calculo')
console.log(`horasTec: ${horasTec}`)
console.log('=======================')