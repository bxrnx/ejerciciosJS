let num1 = 20;
let num2 = 30;

function mostrarNum(num1, num2){
    while (num1 <= num2){
        console.log("num : " + num1);
        num1++;
    }
}

mostrarNum(num1, num2);

console.log("\n-----------------------\n")

num1 = 50;
let limit = num1;
let i = 1;

function sumNat(num1){
    while (i < limit) {
        num1 += i;
        i++;
    }
    console.log(num1);
}

sumNat(num1);

console.log("\n-----------------------\n");

i = 0;

while(i <= 10)
{
    num1 = i * 8;
    console.log(i + " * 8 = " + num1);
    i++;
}

console.log("\n-----------------------\n");

let array = [1, 3, true, false, "Anthony"];

function mostrarElementos(array) {
    console.log(array);
}

mostrarElementos(array);

console.log("\n-----------------------\n")

let n = 9;
i = 0; //recorre la altura; //recorre imprime los caracteres
let alt = 1;
let linea;
let j;
while(i < n){
    j = 0;
    linea = ""
    while(j < n - i){
        linea = linea + " ";
        j++;
    }
    j = 0;
    while( j < (2*alt-1)){
        linea = linea + "*";
        j++;
    }
    console.log(linea);
    i++;
    alt++;
}
console.log("\n-----------------------\n");

num1 = 50;
limit = num1;
i = 1;
function sumPar(num1){
    while (i < limit) {
        if(i % 2 == 0){
            num1 += i;
            i++;
        }
        else
            i++;
    }
    console.log(num1);
}

sumPar(num1);

console.log("\n-----------------------\n");

num1 = 30;
num2 = 20;

i = 30

while (num1 >= num2){
    console.log("num = " + num1);
    num1--;
}

console.log("\n-----------------------\n");

let promedio;
j = 0;
arrayNum = [1, 2, 4, 23, 6];

sumaTotal = arrayNum[j] + arrayNum[j + 1] + arrayNum[j + 2] + arrayNum[j + 3] + arrayNum[j + 4];
promedio = sumaTotal / arrayNum.length;

console.log("Su array es : " + arrayNum);
console.log("Su promedio es : " + promedio);
