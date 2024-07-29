let	longitudLista = parseInt(prompt("Ingresa el Nº de Número que va a tener tu lista"));
let	i;
let	arrayNum = new Array(longitudLista);

i = 1;
j = 0;
while(i <= longitudLista){
    arrayNum[j] = parseInt(prompt("Ingresa el número " + i + " "));
    i++;
    j++;
}

function findLargestNumber(arrayNum){
    let largest;
	let i = 1;
	largest = arrayNum[0];

    while(i < arrayNum.length){
        if(largest < arrayNum[i]){
			largest = arrayNum[i];
        }
		i++;
    }
	return largest;
}

let largest = findLargestNumber(arrayNum);

alert("El número más grande es : " + largest);