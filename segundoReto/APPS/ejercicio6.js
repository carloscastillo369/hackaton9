//6. ALGORITMO SUELDO SEMANAL
let A = Number.parseInt(prompt('Ingrese el total de horas trabajadas a la semana'));
while(Number.isNaN(A)) {
    A = Number.parseInt(prompt('Tiene que ser un número, ingrese el total de horas trabajadas a la semana'));
}

let B = Number.parseFloat(prompt('Ingrese el salario hora hombre'));
while(Number.isNaN(B)) {
    B = Number.parseInt(prompt('Tiene que ser un número, ingrese el salario hora hombre'));
}

let S=A*B;

console.log('El sueldo semanal es:', S,'soles');