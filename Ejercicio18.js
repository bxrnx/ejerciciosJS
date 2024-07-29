// Hacer que la función se cargue cuando se carga la págin

window.onload = function(){
    let pos = 0;
    let direction = 1; //1 si es a la derecha, -1 si es hacia la izquierda
    let box = document.getElementById("item1");
    if(!box){
        console.error ('Elemento no encontrado')
        return;
    }
    let t = setInterval(move, 1);

    function move(){
        console.log('Move function called');
        if(pos >= 500)
            direction = -1;
        if(pos <= 0)
            direction = 1;
            pos = pos + direction;
            box.style.left = pos + 'px';
            console.log('Position', pos);
    }

    let size = 100;
    let direction2 = 1;
    let box2 = document.getElementById("item2");

    let t2 = setInterval(changeSize, 15);

    function changeSize(){
        if(size >= 100 )//Límeite máximo del tamaño
            direction2 = -1;
        if(size <= 50)
            direction2 = 1;
        size = size + direction2;
        box2.style.width = size + 'px';
        box2.style.height = size + 'px';
    }

    const box3 = document.getElementById("item3");
    function cambiarColor(){
        const colores = ["red", "green", "blue", "yellow", "orange", "purple"];
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        box3.style.backgroundColor = colorAleatorio;
    };
    setInterval(cambiarColor, 500);

let box4 = document.getElementById("item4");
let opacity = 1;
let direction4;

function changeOpacity() {
    if (opacity <= 0)
        direction4 = 0.01;
    if (opacity >= 1)
        direction4 = - 0.01;
    opacity = opacity + direction4;
    box4.style.opacity = opacity;
}

setInterval(changeOpacity, 10);

};