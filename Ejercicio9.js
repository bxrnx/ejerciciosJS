let num1, num2, operacion, resultado;

function calculadora(num1, num2, operacion){

    if (operacion == 'suma')
        resultado = num1 + num2;
    else if(operacion == 'resta')
        resultado = num1 - num2;
    else if(operacion == 'multiplicacion')
        resultado = num1 * num2;
    else if(operacion == 'division')
        resultado = num1 / num2;
    return resultado;
}

console.log('Suma :', calculadora(28, 9, 'suma'));
console.log('Multiplicación :', (calculadora(28, 9, 'multiplicacion')));
console.log('División :', (calculadora(28, 9, 'division')));
console.log('Resta :', (calculadora(28, 9, 'resta')));