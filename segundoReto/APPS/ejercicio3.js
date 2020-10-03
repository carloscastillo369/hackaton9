//3. ALGORITMO AREA DEL RECTANGULO

let B = Number.parseFloat(prompt('Ingrese la base del rectángulo en cm'));
while(Number.isNaN(B)) {
    B = Number.parseFloat(prompt('Tiene que ser un número, ingrese la base del rectángulo'));
}

let H = Number.parseFloat(prompt('Ingrese la altura del rectángulo en cm'));
while(Number.isNaN(H)) {
    H = Number.parseFloat(prompt('Tiene que ser un número, ingrese la altura del rectángulo'));
}

let A=B*H;

console.log('El área del rectángulo es:', A.toFixed(2), 'cm2');