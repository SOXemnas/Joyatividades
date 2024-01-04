import { log } from "console";
import { ReadLine } from "readline";
const readline = require('readline-sync')

interface Operacao {
    calculo(): number;
}

class Soma implements Operacao {

    numero1: number;
    numero2: number;

    constructor (num1: number, num2: number) {
        this.numero1 = num1;
        this.numero2 = num2;
    }

    calculo() {
        return this.numero1 + this.numero2
    }
}

class Subtracao implements Operacao {

    numero1: number;
    numero2: number;

    constructor (num1: number, num2: number) {
        this.numero1 = num1;
        this.numero2 = num2;
    }

    calculo(): number {
        return this.numero1 - this.numero2
    }
}


class Multiplicacao implements Operacao {

    numero1: number;
    numero2: number;

    constructor (num1: number, num2: number) {
        this.numero1 = num1;
        this.numero2 = num2;
    }

    calculo() {
        return this.numero1 * this.numero2
    }
}

class Divisao implements Operacao {

    numero1: number;
    numero2: number;

    constructor (num1: number, num2: number) {
        this.numero1 = num1;
        this.numero2 = num2;
    }

    calculo() {
        return this.numero1 / this.numero2
    }
}


class Main {
    iniciar() {
        console.log('Inicando Calculadora: ');
        const num1 = readline.questionInt ('insira o 1º numero: ')
        const num2 = readline.questionInt ('insira o 2º numero: ')
        const opr = readline.question ('insira a opraçao (+, -, * ou /): ');
        switch (opr) {
            
            case '+':
                console.log(`Resultado: ${new Soma (num1, num2).calculo()}`);
            break;
            
            case '-':
                let sub = new Subtracao (num1, num2)
                console.log(`Resultado: ${sub.calculo()}`);

            break;

            case '*':
                console.log(`Resultado: ${new Multiplicacao (num1, num2).calculo()}`);
            break;

            case '/':
                console.log(`Resultado: ${new Divisao (num1, num2).calculo()}`);
            break
        }
    }
}

new Main().iniciar()