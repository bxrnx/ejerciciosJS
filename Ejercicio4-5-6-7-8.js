//Ejercicio 4

let a = 33;

console.log(!((a > 10) && (a > 20)));
console.log(!((a > 10) || !(a < 20)));

//Son las dos operaciones falsas

//Ejercicio 5

a = 20;
let b = a;
c = 15;
d = 10;

console.log((( a == b) || (b > c)) || (c < d)) // True

//Ejercicio 6

a = 10;
b = 12;
c = 13;
d = 10;

console.log(( ( a > b ) || ( a < c ) ) && ( ( a == c) || ( a >= b ) ))
console.log(( ( a >= b ) || ( a < d ) ) && ( ( a >= d ) && (c > d ) ))
console.log(!( a = c ) && ( c > b ))

//Ejercicio 7

let m = 8;
let n = 9;
let r = 5;
let s = 5;
let t = 4;
let v = 7;

console.log(!((m > n && r > s) || (!(t < v && s > m)))); //False

//Ejercicio 8

console.log((3 * 2 ^ 2 - 4 / 2 * 1 ) > ( 3 * 2 ^ 2 * 1 ) && ( 5 > 11 % 4)); //True
console.log(((3 >= 3) || (5 != 5 )) &&  !( 15 / 5 + 2 != 5 )); //True
console.log(!(! ((3 *(- 3)) * 2 > (3 - (- 3) * 2) || (1 ^ 3 * 2 > 6)))) //True
console.log((3 >= 4 && 5 > 3 && 3 > 3) || !( 4 <= 4) || (5 > 4) || (6 >= 7))//True
