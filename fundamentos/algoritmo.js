/**
 * app para calcular a media de duas notas
 */
//variaveis

//importaçao do pacote readline-sync
const read = require('readline-sync')

let nome, disciplina
let nota1, nota2, media

console.clear()

console.log('(  ___ \\ (  ___  )( \\      (  ____ \\__   __/\\__   __/(       )')
console.log('| (   ) )| (   ) || (      | (    \\/   ) (      ) (   | () () |')
console.log('| (__/ / | |   | || |      | (__       | |      | |   | || || |')
console.log('|  __ (  | |   | || |      |  __)      | |      | |   | |(_)| |')
console.log('| (  \\ \\ | |   | || |      | (         | |      | |   | |   | |')
console.log('| )___) )| (___) || (____/\\| (____/\\   | |   ___) (___| )   ( |')
console.log('|/ \\___/ (_______)(_______/(_______/   )_(   \\_______/|/     \\|')
                                                               


//entrada
nome = read.question('Digite o seu nome:')
disciplina = read.question('digite a disciplina:')
nota1 = Number(read.question('digite a nota1:'))
nota2 = number(read.question('digite a nota2:'))

//processamento
media =(nota1 + nota2) /2

//saida
console.clear()
console.log('---------------------------')
console.log('ficha do aluno')
console.log(`nome: ${nome}`)
console.log(`disciplina: ${disciplina}`)
console.log(`nota1: ${nota1}`)
console.log(`nota2: ${nota2}`)
console.log(`media : ${media}`)
console.log('---------------------------')