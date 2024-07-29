let pesokg, alturam, imc;

pesokg = parseFloat(prompt("Dime tu peso en kilogramos"));
alturam = parseFloat(prompt("Dame tu altura en metros"));

imc = pesokg / alturam **2;
 alert("IMC : " + imc.toFixed(2));