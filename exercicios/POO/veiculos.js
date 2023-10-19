/**
 * atividade-POO
 */

class Carro {
    
    constructor(ano, cor) {
        this.ano = ano
        this.cor = cor
    }
    
    criarCarro() {
        console.log('------------------------')
        console.log('Carro criado')
        console.log(`Carro do ano ${this.ano}`)
        console.log(`Carro de cor ${this.cor}`)
        
    }

    ligarCarro() {
        console.log(`Carro ligado.`)
    }

    desligarCarro() {
        console.log('Carro desligado')
        
    }

    acelerar() {
        console.log('Acelerando carro...')
    }
}

class Aviao extends Carro{
    constructor(ano, cor, envergadura) {
        super(ano, cor)
        this.envergadura = envergadura
    }

    criarAviao(){
        console.log('-----------------------------')
        console.log('Aviao criado...')
        console.log(`Aviao do ano ${this.ano}`)
        console.log(`Aviao de cor ${this.cor}`)   
    }

    envergar() {
        console.log('envergadura de 19m')
        if (this.envergadura === true) {
            console.log('')
        }
    }

    aterrizarAviao(){
        console.log('Aterrizando aviao...')
    }

    acelerar(){
        console.log('Decolando...')
    }
}

console.clear()

console.log('-----------------------')
console.log('---     veiculos    ---')
console.log('-----------------------')

const carro1 = new Carro(2000, 'preto')
carro1.criarCarro()

const carro2 = new Carro(2013, 'vermelho')
carro2.criarCarro()
carro2.ligarCarro()
carro2.acelerar()
carro2.desligarCarro()

const aviao1 = new Aviao(2016, 'branco' )
aviao1.criarAviao()
aviao1.acelerar()
aviao1.aterrizarAviao()
aviao1.envergar()




