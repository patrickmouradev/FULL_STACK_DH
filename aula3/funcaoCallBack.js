function calcular(numero1, numero2, operacao) {
    operacao(numero1, numero2)
    console.log("A operacao foi realizada com sucesso")
}


function soma(num1, num2) {
    console.log(num1 + num2);
}

function subtrai(num1, num2) {
    console.log(num1 - num2);
}

function multiplica(num1, num2) {
    console.log(num1 * num2);
}

function divide(num1, num2) {
    console.log(num1 / num2);
}



calcular(10, 20, soma)
calcular(20, 10, subtrai)
calcular(10, 20, multiplica)
calcular(20, 10, divide)
