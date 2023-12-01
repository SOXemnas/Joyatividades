function saudação() {
    console.log('Olá! Seja bem vindo. Vamos calcular a média?');
}

saudação()

function calcularMedia (nota1, nota2) {
    return (nota1 + nota2) / 2
}

console.log(`Sua média é: ${calcularMedia (7, 8)}`)

const calcularMedia2 = (a, b) => (a + b) / 2

console.log(calcularMedia2 (10, 10));