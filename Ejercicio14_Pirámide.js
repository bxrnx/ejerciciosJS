function generarPiramideNumerica(filas) {
    for (let i = 1; i <= filas; i++) {
        let linea = '';
        for (let j = 1; j <= i; j++) {
            linea += j + ' ';
        }
        console.log(linea);
    }
}

let filas = 5;
generarPiramideNumerica(filas);