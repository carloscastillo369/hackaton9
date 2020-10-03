//2. ALGORITMO PROMEDIO DE CUATRO NOTAS

let A = Number.parseInt(prompt('Ingrese la primera nota'));
while(Number.isNaN(A)) {
    A = Number.parseInt(prompt('Tiene que ser un número, ingrese la primera nota'));
}
while(A>20){
    A = Number.parseInt(prompt('La nota máxima es 20, ingrese la primera nota'));
}

let B = Number.parseInt(prompt('Ingrese la segunda nota'));
while(Number.isNaN(B)) {
    B = Number.parseInt(prompt('Tiene que ser un número, ingrese la segunda nota'));
}
while(B>20){
    B = Number.parseInt(prompt('La nota máxima es 20, ingrese la segunda nota'));
}

let C = Number.parseInt(prompt('Ingrese la tercera nota'));
while(Number.isNaN(C)) {
    C = Number.parseInt(prompt('Tiene que ser un número, ingrese la tercera nota'));
}
while(C>20){
    C = Number.parseInt(prompt('La nota máxima es 20, ingrese la tercera nota'));
}

let D = Number.parseInt(prompt('Ingrese la cuarta nota'));
while(Number.isNaN(D)) {
    D = Number.parseInt(prompt('Tiene que ser un número, ingrese la cuarta nota'));
}
while(D>20){
    D = Number.parseInt(prompt('La nota máxima es 20, ingrese la cuarta nota'));
}

let E=(A+B+C+D)/4;

console.log('El promedio de las cuatro notas es:',Math.round(E));