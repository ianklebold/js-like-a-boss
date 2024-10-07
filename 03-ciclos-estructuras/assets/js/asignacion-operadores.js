const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;


const a1 = true && 'Hola, mundo';

console.log( {a1, } );

const a2 = true && 'Hola, mundo' && 150;

console.log( {a2, } );

const a3 = true && false && 150;

console.log( {a3, } );

const a4 = soyFalso || soyNull || soyUndefined || 'Ya no soy false';

console.log( {a4, } );