// Comentarios
    // Lineas de codigo para que el interprete de JS ignorara a la hora de ejecutarlo

//Variables
let a = 10;
var b = 10;

a = 30;
b = 50;

//No deberias usar var, solo Let

let x = a + b;
console.log(x);

//Definir en una sola linea

let d= 100, e = 100;
let f = 10,
    g = 90;

console.log(d + e * f + g);

//Constantes
const c = 10;


//Depuracion

console.log( 'x', x );
console.info( 'x', x );
console.warn( 'x', x );
console.error( 'x', x );

console.log("Otra manera");

console.log({x} );
console.info({x} );
console.warn({x} );
console.error({x} );

a = 'Spiderman';
b = 'Buen amigo';
x = "Hola";
