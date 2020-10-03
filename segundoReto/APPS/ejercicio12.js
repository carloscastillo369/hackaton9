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