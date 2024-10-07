// Forma 1 para crear arreglos
const arr = new Array(10); //Nueva instancia de arreglos con 10 elementos
console.log( arr );

// Forma 2 para crear arreglos
let arrAux = []; //Crear un arreglo

// Forma 3 para crear arreglos
let videoJuegos = ['Mario3','MegaMan']; //Crear un arreglo
console.log( videoJuegos );


//Acceso a la primera posicion

console.log( videoJuegos[0] );

//Arreglo de cosas

let arregloCosas = [
    'Ian Fernandez', // Posicion 0
    1234, // Posicion 1
    false, // Posicion 2
    1 + 2, // Posicion 3
    function(){}, // Posicion 4
    () => {}, // Posicion 5
    { a: 1 }, // Posicion 6
    ['Dr Ian', 'Dra Alba', 'Dr Jorge'] // Posicion 7
]
console.log( arregloCosas );

console.log( arregloCosas[7][2] ); //Dra Alba