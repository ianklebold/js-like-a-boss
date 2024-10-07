let a = 5;

if ( a > 10  ) {
    console.log('a es mayor a 10');
}else{
    console.log( 'a es menor a 10' ); 
}

// console.log('Fin de programa');

const hoy = new Date();

console.log( hoy );

let dia = hoy.getDay();

console.log( dia );

if ( dia === 0 ){
    console.log(' Hoy es domingo ');
}else{

    if( dia === 1){
        console.log(' Hoy es lunes ');
    }else if(dia === 2) {
        console.log(' Hoy es martes ');
    }else{
        console.log(' Hoy no es domingo, lunes ni martes. ');
    }
    
}


const getNombreDiaByNumero = ( numero ) => {
    const DIAS_SEMANAS = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo',]
    return DIAS_SEMANAS[ numero ];
}


const diasDeLaSemanaAlternativa2 = {
    0 : 'Domingo',
    1 : 'Lunes',
    2 : 'Martes',
    3 : 'Miercoles',
    4 : 'Jueves',
    5 : 'Viernes',
    6 : 'Sabado',
    7 : 'Domingo',
}

console.log( getNombreDiaByNumero(3) );

console.log( diasDeLaSemanaAlternativa2[3] || undefined );