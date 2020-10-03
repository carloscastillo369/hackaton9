//5. ALGORITMO AREA DE LA CIRCUNFERENCIA

const Pi=3.1416; //constante Pi es el valor de Pi hasta 4 decimales.

let R = Number.parseFloat(prompt('Ingrese el radio de la circunferencia en cm'));
while(Number.isNaN(R)) {
    R = Number.parseFloat(prompt('Tiene que ser un número, ingrese el radio de la circunferencia'));
}

let A=R*R*Pi;

console.log('El área de la circunferencia es:', A.toFixed(2),'cm2');