/**
 * exercicios de fixaçao POO
 */

class Conta {
    constructor (numero, titular, saldo) {
        this.numero = numero
        this.titular = titular
        this.saldo = saldo
    }
    exibirSaldo(){
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`)
    }
    depositar(valor) {
        this.saldo += valor
        console.log(`Credito de R$ ${valor.toFixed(2)}`)
    }
    sacar(valor) {
        if(valor <= this.saldo) {
            this.saldo -= valor
            console.log(`Debito de R$ ${valor.toFixed(2)}`)
        }else {
            console.log('Saque nao permitido')
        }
    }
}

class Poupanca extends Conta{
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo)
    }
    exibirSaldoPoupanca(){
        console.log(`Saldo de poupanca: R$ ${this.saldo.toFixed(2)}`)
    }
}



console.clear()
console.log('====================')
console.log('=====   bank   =====')
console.log('====================')

console.log('')

let cc1 = new Conta(1, 'Leandro Ramos', 10000)
console.log(`Cliente ${cc1.titular} conta: ${cc1.numero}`)
cc1.exibirSaldo()
cc1.depositar(5000)
cc1.exibirSaldo()
cc1.sacar(8000)
cc1.exibirSaldo()
cc1.sacar(10000)

console.log('')
let cc1p = new Poupanca(5001, 'Leandro Ramos', 1000)
cc1p.exibirSaldoPoupanca()



                        