//4. ALGORITMO AREA DEL TRIANGULO

let B = Number.parseFloat(prompt('Ingrese la base del triángulo en cm'));
while(Number.isNaN(B)) {
    B = Number.parseFloat(prompt('Tiene que ser un número, ingrese la base del triángulo'));
}

let H = Number.parseFloat(prompt('Ingrese la altura del triángulo en cm'));
while(Number.isNaN(H)) {
    H = Number.parseFloat(prompt('Tiene que ser un número, ingrese la altura del triángulo'));
}

let A=(B*H)/2;

console.log('El área del triángulo es:', A.toFixed(2), 'cm2');