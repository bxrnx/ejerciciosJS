let alojamiento;
let comida;
let entretenimiento;

alojamiento = parseFloat(prompt("Cuánto te vas a gastar en alojamiento?"));
comida = parseFloat(prompt("Cuánto te vas a gastar en comida?"));
entretenimiento = parseFloat(prompt("Cuánto te vas a gastar en ocio?"))

alert("Los costos totales son : " + (alojamiento + comida + entretenimiento));