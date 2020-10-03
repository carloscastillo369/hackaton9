//9. ALGORITMO EDAD POR FECHA DE NACIMIENTO

let A = Number.parseInt(prompt('Ingrese el año de nacimiento'));
while(Number.isNaN(A)) {
    A = Number.parseInt(prompt('Tiene que ser un número, ingrese un número'));
}
while((A.toString()).length < 4 || (A.toString()).length> 4) {
    A = Number.parseInt(prompt('Tiene que ser una número de cuatro dígitos'));
}

let B = Number.parseInt(prompt('Ingrese el año actual'));
while(Number.isNaN(B)) {
    B = Number.parseInt(prompt('Tiene que ser un número, ingrese un número'));
}
while((B.toString()).length < 4 || (B.toString()).length > 4) {
    B = Number.parseInt(prompt('Tiene que ser una número de cuatro dígitos'));
}

let E=B-A;

console.log('Su edad es:',E,'años');