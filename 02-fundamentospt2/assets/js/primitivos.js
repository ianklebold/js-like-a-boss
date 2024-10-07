//Strings
let nombre = 'Ian Fernandez'; //Esto es un string
console.log( nombre );

nombre = 205 // Ahora nombre apunta a number, porque 205 apunta a number
console.log( nombre );

console.log ( typeof nombre ); // typeof devuelve el tipo de dato de nombre

// Booleanos
let esMarvel = true;
let noEsMarvel = false;

console.log( typeof esMarvel );

// Numbers
let edad = 33
console.log( typeof edad );

edad = 2.5
console.log( typeof edad );

// undefined
let superPoderDeSpiderMan; //Solo declaramos
console.log( typeof superPoderDeSpiderMan ); //undefined 

// null
let soyNyll = null
console.log( typeof soyNyll ); // object (enrealidad es un primitivo, pero js considera a todo como un objeto excepto los primitivos)

// Symbol
//Podemos crear identificadores unicos en js
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log( typeof symbol1 );

console.log( symbol1 === symbol2 ); // No son iguales, no son identicos

