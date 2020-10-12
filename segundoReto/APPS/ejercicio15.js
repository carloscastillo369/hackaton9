//15. ALGORITMO EDAD PARA VOTAR EN LAS PROXIMAS ELECCIONES

const D = 11;   //la constante D es el día de la votación
const M = 4;    //la constante M es el mes de la votación
const A = 2021; //la constante A es el año de la votación
  
let d = Number.parseInt(prompt('Ingrese día de nacimiento'));
while(Number.isNaN(d)) {
    d = Number.parseInt(prompt('Tiene que ser un número, ingrese día de nacimiento'));
}
while((d.toString()).length>2 || d>31){
    d = Number.parseInt(prompt('Valor no valido, ingrese un día válido'));
}

let m = prompt('Ingrese mes de nacimiento');
while(Number.isNaN(m)) {
    m = Number.parseInt(prompt('Tiene que ser un número, ingrese mes de nacimiento'));
}
while((m.toString()).length>2 || m>12) {
    m = Number.parseInt(prompt('Valor no valido, ingrese un mes válido'));
}

let a = prompt('Ingrese año de nacimiento');
while(Number.isNaN(a)) {
    a = Number.parseInt(prompt('Tiene que ser un número, ingrese año de nacimiento'));
}
while((a.toString()).length<4 || (a.toString()).length>4) {
    a = Number.parseInt(prompt('Tiene que ser un número de cuatro dígitos, ingrese año de nacimiento'));
}

let R = A-a;

if(R<18){
    console.log('Esta persona NO es apta para votar')
}

if(R>18){
    console.log('Esta persona SI es apta para votar')
}

if(R==18 && M<m){
    console.log('Esta persona NO es apta para votar')
}

if(R==18 && M==m && D<d){
    console.log('Esta persona NO es apta para votar')
}

if(R==18 && M==m && D>d){
    console.log('Esta persona SI es apta para votar')
}

if(R==18 && M>m){
    console.log('Esta persona SI es apta para votar')
}
