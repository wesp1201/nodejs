/**
 * POO estudo do encapsulamento
 */

//classe modelo
class Pessoa {
    //atributos
    constructor(nome, idade) {
        this.nome = nome //variavel publica
        let _idade = idade //variavel encapsulada
        //metodos get e set (para acessar as variaveis encapsuladas)
        this.getIdade =() => {
            return _idade
        }
        this.setIdade =(novaIdade) => {
            _idade = novaIdade
        }


    }
    //metodos(Açoes)
    apresentar() {
        console.log(`ola, meu nome é ${this.nome} e tenho ${this.getIdade()} anos`)
    }
}

//instanciar objetos
const pessoa1 = new Pessoa('Weslley', 17)
pessoa1.apresentar()
pessoa1.setIdade(44)
pessoa1.apresentar()