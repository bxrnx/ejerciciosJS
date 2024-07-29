function fibonacciSerie(terminos) {
    let fibonacci = [0, 1];

    for (let i = 2; i < terminos; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}

let terminos = 10;
let serieFibonacci = fibonacciSerie(terminos);
console.log('Serie de Fibonacci hasta el décimo término:', serieFibonacci);