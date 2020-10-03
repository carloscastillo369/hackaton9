//7. ALGORITMO CONVERSION METRO-PULGADA

const M=1/0.0254; //constante M es la razón entre metro/pulgada.

let A = Number.parseFloat(prompt('Ingrese la cantidad de tela requerida en metros'));
while(Number.isNaN(A)) {
    A = Number.parseFloat(prompt('Tiene que ser un número, ingrese la cantidad de tela requerida en metros'));
}

let P=A*M;

console.log('La cantidad de tela requerida en pulgudas es:',P.toFixed(2));