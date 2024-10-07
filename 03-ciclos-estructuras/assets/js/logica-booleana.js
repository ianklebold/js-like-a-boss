

const regresaTrue = () => {
    console.log( 'Regresa true ' );
    return true;
}


const regresaFalse = () => {
    console.log( 'Regresa false ' );
    return false;
}

console.log( !true );
console.log( !false );


console.log( !regresaTrue() );

console.log( !regresaFalse() );

console.log( false && false ); // 0 && 0 -> 0 //false
console.log( true && false ); // 1 && 0 -> 0 //false
console.log( false && true ); // 0 && 1 -> 0 //false
console.log( true && true ); // 1 && 1 -> 1 //true

console.log( !regresaFalse() && !regresaFalse() ); //true

console.log( false || false ); // 0 && 0 -> 0 //false
console.log( true || false ); // 1 && 0 -> 1 //true
console.log( false || true ); // 0 && 1 -> 1 //true
console.log( true || true ); // 1 && 1 -> 1 //true
console.log( !regresaTrue() || !regresaFalse() ); //true