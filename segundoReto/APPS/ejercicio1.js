//1. ALGORITMO SUMA DE DOS NUMEROS

let A = Number.parseFloat(prompt('Ingrese el primer número'));
while(Number.isNaN(A)) {
    A = Number.parseFloat(prompt('Tiene que ser un número, ingrese un número'));
}

let B = Number.parseFloat(prompt('Ingrese el segundo número'));
while(Number.isNaN(B)) {
    B = Number.parseFloat(prompt('Tiene que ser un número, ingrese un número'));
}

let C=A+B;

console.log('La suma es:', C);