/**
 * eleitor obrigatoriedade de votar
 */

const read = require('readline-sync')
const colors = require('colors')

let idade 
console.clear()
console.log('----------eleitor------------')
console.log('')

idade = Number(read.question('digite a sua idade:'))
if (idade < 16) {
    console.log('PROIBIDO VOTAR'.red)
} else {
    if (idade > 17 && idade < 71) {
        console.log('OBRIGATORIO'.blue)
    } else {
        console.log('VOTO FACULTATIVO'.green)
    }
}