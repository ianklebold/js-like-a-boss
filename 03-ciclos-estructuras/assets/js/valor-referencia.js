let a = 10;
let b = 10;


console.log( {a, b} );

let juan = { nombre: 'Juan' };
let ana = juan;
ana.nombre = 'Ana';

console.log({ juan, ana });

let peter = { nombre : 'Peter' };

const cambiarNombre = ( persona ) => {
    persona.nombre = 'Tony';
    return persona;
}

tony = cambiarNombre( peter );

console.log(
    {
        peter,
        tony
    }
);

//Arreglos

const frutas = ['Manzana', 'Pera', 'Melon'];
const otrasFrutas = frutas;

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });

//Resolucion

let juan2 = { nombre: 'Juan' };
let ana2 = { ...juan2 };
ana2.nombre = 'Ana';

console.log({ juan2, ana2 });

let peter2 = { nombre : 'Peter' };

const cambiarNombre2 = ( { ...persona } ) => {
    persona.nombre = 'Tony';
    return persona;
}

tony2 = cambiarNombre2( peter2 );

console.log(
    {
        peter2,
        tony2
    }
);

const frutas2 = ['Manzana', 'Pera', 'Melon'];
const otrasFrutas2 = [...frutas2];

otrasFrutas2.push('Mango');

console.table({ frutas2, otrasFrutas2 });