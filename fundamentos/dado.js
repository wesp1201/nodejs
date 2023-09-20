/**
 * jogo do dado
 */

const read = require('readline-sync')

let face
let tecla

console.clear()
console.log('------------- Jogo do dado --------------')
read.question('Pressione a tecla [Enter] para jogar o dado:')

face = Math.floor(Math.random() * 6 + 1)
console.log(`face do dado: ${face}`)
