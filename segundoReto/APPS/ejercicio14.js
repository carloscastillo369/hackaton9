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