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