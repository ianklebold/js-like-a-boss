const dia = 0;
const horaActual = 10;

let horaApertura;
let mensaje = ''; //Esta abierto o esta cerrrado, hoy abrimos a las XX



//Forma tradicional
//if (dia === 0 || dia === 6 ) 
if ( [0,6].includes( dia ) ) {
    console.log('Fin de semana');
    horaApertura = 9;
}else{
    console.log('Dia de semana');
    horaApertura = 11;
}


if(horaActual >= horaApertura){
    mensaje = 'Esta abierto';
}else{
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`; //Back tick fn + esc
}

console.log({
    horaApertura,
    mensaje
});



//Con operador ternario

// ( condicional ) ? valor1 : valor2; donde valor1 y valor 2 pueden ser de distinto o igual tipo

mensaje = ''; 

//if ( [0,6].includes( dia ) ) {
//    console.log('Fin de semana');
//    horaApertura = 9;
//}else{
//    console.log('Dia de semana');
//    horaApertura = 11;
//}

horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

//if(horaActual >= horaApertura){
//    mensaje = 'Esta abierto';
//}else{
//    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`; //Back tick fn + esc
//}

mensaje = ( horaActual >= horaApertura ) ? 'Esta abierto' :  `Esta cerrado, hoy abrimos a las ${horaApertura}`; //Back tick fn + esc

console.log({
    horaApertura,
    mensaje
});