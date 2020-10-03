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