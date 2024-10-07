
function saludar() {
    console.log( 'Hola mundo' );
}

const saludarAnonimamente = function(){
    console.log( 'Hola mundo' );
}

function saludar2( nombre ){
    console.log( 'Hola' + nombre );
}

const saludarAnonimamente2 = function( nombre ){
    console.log( 'Hola' + nombre );
}

function saludar3( nombre ){
    console.log( arguments );
    console.log( 'Hola ' + nombre );
}

const saludarFlecha = () => {
    console.log( 'Hola flecha' );
}

const saludarFlecha2 = ( nombre ) => {
    console.log( 'Hola flecha' + nombre );
}

const saludarFlecha3 = nombre  => console.log( 'Hola flecha' + nombre );


//Retorno
const retornoFuncionIndefinido = () => {  console.log('Hola!'); }
const retornoFuncion = () => { 
    return 200; 

    //Esto no se ejecutara
    console.log('Hola!');
}

let resultado1 = retornoFuncionIndefinido();
let resultado2 = retornoFuncion();

console.log( resultado1 );

console.log( resultado2 );

const retornoFuncion2 = () => { 
    return [200, 210, 202]; 
}

let resultado3 = retornoFuncion2();

console.log( resultado3[0] + ' - ' + resultado3[1] );

const retornoFuncion3 = () => [200, 210, 202]; 

let resultado4 = retornoFuncion3();

console.log( resultado4[0] + ' - ' + resultado4[1] );