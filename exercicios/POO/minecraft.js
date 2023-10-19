/**
 * POO - fundamentos da programaçao orientada a objetos
 * Exemplo: Minecraft
 */

//Classe Modelo
class Bloco {
    //Atributos
    constructor(resistencia, textura) {
        this.resistencia = resistencia
        this.textura = textura
    }
    //Açoes (Métodos)
    criarBloco() {
        console.log('-------------------------------------')
        console.log(' ___')
        console.log('|   |')
        console.log('|___|')
        console.log('')
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistencia ${this.resistencia}`)
    }

    construir() {
        console.log(`Bloco de ${this.textura} colocado.`)
    }

    minerar() {
        console.log(' ▖ ▖ ▖ Recursos obtidos')
        
    }
}

//Classe modelo com herança
class Enxada extends Bloco {
    //atributos
    constructor(resistencia, textura, conquista) {
        super(resistencia, textura)
        this.conquista = conquista
    }
    //metodos
    criarEnxada() {
        console.log('----------------------------')
        console.log('__')
        console.log(' /')
        console.log('/')
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistencia ${this.resistencia}`)
    }

    arar() {
        console.log('._._._. Terra arada!')
        if (this.conquista === true) {
            console.log(' conquista obtida!')
        }
    }

    //polimorfismo
    minerar() {
        console.log('✟ dano atribuido')
    }
}

//Criaçao de objetos (mundo)
console.clear()

                                                       
console.log(' _____ _____ _____ _____ _____ _____ _____ _____ _____ ')
console.log('|     |     |   | |   __|     | __  |  _  |   __|_   _|')
console.log('| | | |-   -| | | |   __|   --|    -|     |   __| | |  ')
console.log('|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|  ')
console.log('')

//criando um bloco de terra
const bloco1 = new Bloco(1, 'terra')
bloco1.criarBloco()

//criando um bloco de madeira
const bloco2 = new Bloco(2, 'madeira')
bloco2.criarBloco()
bloco2.construir()

//criando um bloco de pedra
const bloco3 = new Bloco(5, 'pedra')
bloco3.criarBloco()
bloco3.minerar()
                                                       
//criando um bloco de diamante
const bloco4 = new Bloco(10, 'diamante')
bloco4.criarBloco()

//criando uma enxada de madeira
const enxada1 = new Enxada(2, 'madeira', false)
enxada1.criarEnxada()
enxada1.arar()

//criando uma enxada de ferro
const enxada2 = new Enxada(7, 'ferro', true)
enxada2.criarEnxada()
enxada2.arar()

//criando uma enxada de diamante
const enxada3 = new Enxada(10, 'diamante', false)
enxada3.criarEnxada()
enxada3.minerar()


