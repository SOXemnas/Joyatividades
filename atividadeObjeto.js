const banco = {
    conta: 543235,
    saldo: 500,
    tipoDeConta: 'cc',
    agencia: 77553,
    buscarSaldo: function buscarSaldo() {
        console.log('Buscando Saldo...');
        console.log(`Seu saldo: ${this.saldo}`);
    },
    deposito: function deposito(s) {
        this.saldo = this.saldo + s
        console.log(`foram depositados R$ ${s}`)
        console.log(this.buscarSaldo());
    },
    saque: function saque(v) {
        this.saldo = this.saldo - v
        console.log(`Saque de ${v} realizado`);
        console.log(this.buscarSaldo());
    },
    numeroConta: function conta() {
        console.log(`O número da sua conta é ${this.conta}`);
    }
}

console.log(banco.numeroConta());

console.log(banco.buscarSaldo());

console.log(banco.deposito(100));

console.log(banco.saque(20));