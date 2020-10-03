//8. ALGORITMO CONVERSION SOLES-DOLARES

let S = Number.parseFloat(prompt('Ingrese la cantidad de dinero en soles'));
while(Number.isNaN(S)) {
    S = Number.parseFloat(prompt('Tiene que ser un número, ingrese la cantidad de dinero en soles'));
}

let B = Number.parseFloat(prompt('Ingrese el tipo de cambio de dolar a soles'));
while(Number.isNaN(B)) {
    B = Number.parseFloat(prompt('Tiene que ser un número, ingrese el tipo de cambio de dolar a soles'));
}

let D=S/B;

console.log('La cantidad de dólares es:',D.toFixed(2));