document.addEventListener("DOMContentLoaded", function() {
    // Definimos un array de frases frikis de informática
    const frasesFrikisInformatica = [
        "¡En la informática, nada se pierde, todo se copia!",
        "El hardware es lo que hace a una máquina rápida; el software es lo que hace que una máquina rápida se vuelva lenta.",
        "Los programadores no crean errores, solo desarrollan características inesperadas.",
        "No hay lugar como 127.0.0.1",
        "¿Cuál es el lenguaje de programación favorito de los oceanógrafos? C."
    ];

    // Definimos un array de colores en formato hexadecimal
    const colores = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFC733"];

    // Capturamos el botón y el párrafo por su ID
    const boton = document.getElementById("texto-informatica");
    const frase = document.getElementById("frase");

    // Añadimos un evento de clic al botón
    boton.addEventListener("click", function() {
        // Seleccionamos una frase aleatoria del array
        const indiceFrase = Math.floor(Math.random() * frasesFrikisInformatica.length);
        frase.textContent = frasesFrikisInformatica[indiceFrase];

        // Seleccionamos un color aleatorio del array de colores
        const indiceColor = Math.floor(Math.random() * colores.length);
        const colorAleatorio = colores[indiceColor];

        // Cambiamos el color del texto de la frase y el fondo del botón
        frase.style.color = colorAleatorio;
        boton.style.backgroundColor = colorAleatorio;
    });
});