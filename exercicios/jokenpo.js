/**
 * JOKEMPO
 */

const read = require ('readline-sync')
const colors = require ('colors')

let opcao , computador

console.clear()
console.log("===============================================")
console.log("====               JOKEMPO                =====")
console.log("===============================================")

console.log("1. PEDRA")
console.log("2. PAPEL")
console.log("3. TESOURA")

opcao = Number(read.question("Escolha a sua opcao, boa sorte !:    "))
read.question("Pressione a tecla [ENTER] para o computador jogar	") 
computador = Math.floor(Math.random() * 3 + 1)

switch (opcao) {
case 1:
    console.log("Jogador escolheu pedra")
	break
case 2:
	console.log("Jogador escolheu papel")
	break
case 3:
	console.log("Jogador escolheu tesoura")
}

console.clear()
switch (computador) {
	case 1:
		console.log("Computador escolheu pedra")
		break
	case 2:
		console.log("Computador escolheu papel")
		break
	case 3:
		console.log("Computador escolheu tesoura")
	}

if (opcao==computador){
    console.log("EMPATE!".yellow)
}else if(opcao == 1 && computador == 3||opcao == 2 && computador == 1||opcao == 3 && computador == 2){
    console.log("VOCE VENCEU!!".green)
}else{
    console.log("COMPUTADOR VENCE!!".red)
}
