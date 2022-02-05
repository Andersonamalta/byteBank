import { Conta } from "../contas/Conta.js";

export class ContaCorrente extends Conta {
    //Atributo estatico, que vai está presente em todas as contas criadas
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}