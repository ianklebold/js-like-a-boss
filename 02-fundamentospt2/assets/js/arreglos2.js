let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log( 'Longitud del arreglo ' + juegos.length );


console.log('Primero ' + juegos[0]);
console.log('Ultimo' + juegos[juegos.length]);

juegos.forEach(
    ( juego, indice, arr ) => {
        console.log({juego, indice, arr})
    }
)

juegos.push('F-Zero'); //Agregarlo en la ultima posicion

juegos.unshift('Fire Emblem'); //Agregarlo en la primera posicion

juegos.pop(); //Remueve el ultimo elemento del arreglo y regresa el arreglo

let pos = 1;
juegos.splice(pos, 1);  //Remueve a partir del elemento indicado y partir de el una cantidad de elementos

let metroidIndex = juegos.indexOf( 'Metroid' ); //Devuelve el indice del elemento indicado (Es CaseSensitive)
console.log( metroidIndex );