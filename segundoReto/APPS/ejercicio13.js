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