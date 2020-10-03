/*
//1. ALGORITMO SUMA DE DOS NUMEROS ENTEROS

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
*/


/*
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
*/


/*
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
*/


/*
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
*/


/*
//5. ALGORITMO AREA DE LA CIRCUNFERENCIA

const Pi=3.1416; //constante Pi es el valor de Pi hasta 4 decimales.

let R = Number.parseFloat(prompt('Ingrese el radio de la circunferencia en cm'));
while(Number.isNaN(R)) {
    R = Number.parseFloat(prompt('Tiene que ser un número, ingrese el radio de la circunferencia'));
}

let A=R*R*Pi;

console.log('El área de la circunferencia es:', A.toFixed(2),'cm2');
*/


/*
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
*/


/*
//7. ALGORITMO CONVERSION METRO-PULGADA

const M=1/0.0254; //constante M es la razón entre metro/pulgada.

let A = Number.parseFloat(prompt('Ingrese la cantidad de tela requerida en metros'));
while(Number.isNaN(A)) {
    A = Number.parseFloat(prompt('Tiene que ser un número, ingrese la cantidad de tela requerida en metros'));
}

let P=A*M;

console.log('La cantidad de tela requerida en pulgudas es:',P.toFixed(2));
*/


/*
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
*/


/*
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
*/


/*
//10. ALGORITMO PERSONA DE MENOR EDAD

let persona1 = {
    nombre:'José',
    edad:30
}

let persona2 = {
    nombre:'Juan',
    edad:22
}

let persona3 = {
    nombre:'María',
    edad:18
}

console.log('Informaciónd de las tres personas:');
console.log(persona1);
console.log(persona2);
console.log(persona3);

if(persona1.edad<persona2.edad && persona1.edad<persona3.edad){
    console.log('La persona de menor edad es:',persona1.nombre, 'y tiene:',persona1.edad,'años');
}
if(persona2.edad<persona1.edad && persona2.edad<persona3.edad){
    console.log('La persona de menor edad es:',persona2.nombre, 'y tiene:',persona2.edad,'años');
}
if(persona3.edad<persona1.edad && persona3.edad<persona2.edad){
    console.log('La persona de menor edad es:',persona3.nombre, 'y tiene:',persona3.edad,'años');
}
if(persona1.edad==persona2.edad && persona1.edad<persona3.edad){
    console.log('Las personas de menor edad son:',persona1.nombre,'y',persona2.nombre,'y tienen:',persona1.edad,'años');
}
if(persona1.edad==persona3.edad && persona1.edad<persona2.edad){
    console.log('Las personas de menor edad son:',persona1.nombre,'y',persona3.nombre,'y tienen:',persona1.edad,'años');
}
if(persona2.edad==persona3.edad && persona2.edad<persona1.edad){
    console.log('Las personas de menor edad son:',persona2.nombre,'y',persona3.nombre,'y tienen:',persona2.edad,'años');
}
if(persona1.edad==persona2.edad && persona2.edad==persona3.edad){
    console.log('Las tres personas tienen la misma edad y es:',persona1.edad,'años');
}
*/


/*
//11. ALGORITMO BONO

const bono1=100;
const bono2=1000;
let B=0; //variable bono a recibir

let A = Number.parseInt(prompt('Ingrese la cantidad de años trabajados'));
while(Number.isNaN(A)) {
    A = Number.parseInt(prompt('Tiene que ser una número, ingrese un número'));
}

if(A<6){
    B=A*bono1;
}
else {
    B=A*bono2;
}

console.log('Su bono es:',B,'soles');
*/


/*
//12. ALGORITMO SALARIO CON INCREMENTO ANUAL

let S=1500; //variable sueldo inicial

let A = Number.parseInt(prompt('Ingrese el tiempo de años trabajados'));
while(Number.isNaN(A)) {
    A = Number.parseInt(prompt('Tiene que ser una número, ingrese un número'));
}

console.log('Su salario actual es:',S,'soles');

for(let i=1;i<=A;i++){
    S=S+S*0.1;
    if(i==1){
        console.log('Salario recibido al cabo de',i,'año será:',Number.parseInt(S.toFixed(2)),'soles');

    }
    else {
        console.log('Salario recibido al cabo de',i,'años será:',Number.parseFloat(S.toFixed(2)),'soles');
    }
}
*/


/*
//13. ALGORITMO DE ALUMNOS APROBADOS Y DESAPROBADOS

let N = Number.parseInt(prompt('Ingrese el número total de alumnos'));
let A = 0; //variable alumnos aprobados
let D = 0; //variable alumnos reprobados

for(let i=1; i<=N; i++){
    let M=prompt(`Ingrese nota del alumno Nº ${i}`);
    if (M>10) {
        A=A+1;
    }
    else {
        D=D+1;
    }
}

console.log(`Los alumnos aprobados son ${A}`);
console.log(`Los alumnos reprobados son ${D}`);
*/


/*
//14. ALGORITMO NUMERO DE FOCOS VERDES, BLANCOS Y ROJOS

let V=0; //variable focos verdes
let B=0; //variable focos blancos
let R=0; //variable focos rojos

let N = Number.parseInt(prompt('Ingrese el número total de focos'));

for (let i=1; i<=N; i++) {
    let C = Number.parseInt(prompt(`
    Seleccione el valor del color: 
        1. Verde
        2. Blanco
        3. Rojo`));
    while(C<1 || C>3) {
        C = Number.parseInt(prompt(`VALOR INVALIDO
        Seleccione: 
            1. Verde
            2. Blanco
            3. Rojo`));
    }
    if(C==1){
        V++;
    }
    if(C==2){
        B++;
    }
    if(C==3){
        R++;
    }
}

console.log(`El número de focos verdes son: ${V}`);
console.log(`El número de focos blancos son: ${B}`);
console.log(`El número de focos rojos son: ${R}`);
*/


/*
//15. ALGORITMO EDAD PARA VOTAR EN LAS PROXIMAS ELECCIONES

const D = 11;   //la constante D es el día de la votación
const M = 4;    //la constante M es el mes de la votación
const A = 2021; //la constante A es el año de la votación
  
let d = Number.parseInt(prompt('Ingrese día de nacimiento'));
while(Number.isNaN(d)) {
    d = Number.parseInt(prompt('Tiene que ser una número, ingrese día de nacimiento'));
}
while((d.toString()).length>2 || d>31){
    d = Number.parseInt(prompt('Valor no valido, ingrese un día válido'));
}

let m = prompt('Ingrese mes de nacimiento');
while(Number.isNaN(m)) {
    m = Number.parseInt(prompt('Tiene que ser una número, ingrese mes de nacimiento'));
}
while((m.toString()).length>2 || m>12) {
    m = Number.parseInt(prompt('Valor no valido, ingrese un mes válido'));
}

let a = prompt('Ingrese año de nacimiento');
while(Number.isNaN(a)) {
    a = Number.parseInt(prompt('Tiene que ser una número, ingrese año de nacimiento'));
}
while((a.toString()).length<4 || (a.toString()).length>4) {
    a = Number.parseInt(prompt('Tiene que ser una número de cuatro dígitos, ingrese año de nacimiento'));
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
*/