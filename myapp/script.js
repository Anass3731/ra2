let pi = 1;
let a = 2;
let salutacio = "Hellow word";

let flag = true;

let nada = null;

let suma = pi + a;
let multi = pi * a;
let poten = pi**a;

//alert(salutacio);


console.log(typeof flag);

let num = "10";
console.log("La variable num es " + typeof num);
console.log(a+num);

//let numero = parentInt(num);
console.log(typeof numero);

if (pi>2) {
    console.log("Pi es mayor de 2");
}
else if (pi<2) {
    console.log("Es menor que3 2");
}

let b = 1 + 8 ;
switch (b) {
    case 1:
    console.log("Es igual a 1");
    break;

    case 2:
    console.log("Es igual a 2");
    break;

    case 3:
    console.log("Es igual a 3");
    break;

    case 4:
    console.log("Es igual a 4");
    break;

    default:
        console.log("No corresponde a ninguno");
        break;
}

var vocal = (10<3)? 'a' : 'b';

console.log(vocal);

for (let k = 0; k<10; k++) {
    if (k%2 == 0 && k>0) {
        console.log(k);
    }
}

var i=50;
while (i>0) {
    console.log(i);
    i= i-5;
}

i = -2;
do {
    console.log("holaa " + i);
    i--;
} while (i>=0);