/**
 * Exemplo de uso da estrutura switch case
 */

const read = require('readline-sync')

let opcao

console.clear()
console.log('sistema operacional')
console.log('')
console.log('1. windows')
console.log('2. linux')
console.log('3. mac')

opcao = Number(read.question('escolha um sistema operacional: '))

switch (opcao) {
    case 1:
       console.clear() 
       console.log('Carregando o windows.................')
       break
    case 2: 
       console.clear()
       console.log('Carregando o linux...................')
       break
    case 3: 
       console.clear()
       console.log('Carregado o mac......................')
       break
    default:
       console.log('opcao invalida')
       break

}