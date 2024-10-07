const dia = 0;

// La comparacion dentro del switch es con '===' es decir compara valor y tipo
switch( dia ){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    default:
        console.log('No es domingo, ni lunes, ni martes');
}