export class Conta {

    constructor(saldoInicial, cliente, agencia) {

        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta, pois é uma classe abstrata");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }

    get saldo() {
        return this._saldo;
    }

    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }

    }

    get cliente() {
        return this._cliente;
    }

    get agencia() {
        return this._agencia;
    }

    sacar(valor) {
        throw new Error("Este método é abstrato")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            console.log("Saque realizado con sucesso \n");
            return valorSacado;
        } else {
            console.log("Seu saldo é insuficiente \n");
            return 0;
        }
    }

    depositar(valor) {
        if (valor < 0) {
            console.log("Desculpe mas você está informando um valor negativo")
        } else {
            this._saldo += valor;
        }
    }

    transferir(valor, conta) {
        const valorTransferir = this.sacar(valor);
        conta.depositar(valorTransferir);
    }



}