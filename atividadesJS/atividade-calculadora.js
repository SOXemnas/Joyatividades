const readline = require ('readline-sync')

var num1 = readline.questionInt ('Insira o primeiro número: ');
var op = readline.question ('Insira o operador aritimético : ');
var num2 = readline.questionInt ('Insira o segundo número: ');
let result

switch (op) {
    case '+': result = num1 + num2;
    break
    case '-': result = num1 - num2;
    break
    case '/': result = num1 / num2;
    break
    case '*': result = num1 * num2;
    break;
}

console.log (`O resultado da operação é ${result}`);