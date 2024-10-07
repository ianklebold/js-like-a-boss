
//Objeto literal
let personaje = {
    nombre: 'Ian Klebold',
    codeName: 'ian-klebold', //camelCase para nombre de atributos
    vivo: true,
    edad: 25,
    coords:{
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Camisa y jeans', 'Camisa y bermudas'],
    direccion: {
        zip: '10880, 90265',
        ubicaion: 'Malibu California'
    },
    //Atributo con '-'
    'ultima-pelicula': 'Rescatando al soldado brayan'
};

//Acceso al valor

console.log( " nombre : " + personaje.nombre );
console.log( " nombre accedido con [ ] : " + personaje['nombre'] );

console.log( " personaje : " + personaje );

//Acceso a valores anidados
console.log( " coordenadas : " + personaje.coords );
console.log( " latitud : " + personaje.coords.lat );
console.log( " lng : " + personaje.coords.lng );

//Acceso al arreglo
console.log( 'Cantidad de trajes', personaje.trajes.length );
console.log( 'Ultimo traje', personaje.trajes[personaje.trajes.length - 1] );

//Acceso a propiedades de objeto por medio de nombre de atributos
const x = 'vivo';
console.log('Esta vivo?', personaje[x]);

//Acceso a propiedad con '-'

console.log('Ultima pelicula', personaje['ultima-pelicula']);

//Mas detalles

//Solo para objetos mutables : 
//Eliminar propiedad
delete personaje["ultima-pelicula"];
console.log( " personaje : ", personaje );

//Objetener arreglos de propiedad, valor
const entriesPares = Object.entries( personaje );
console.log( entriesPares );

//Solo para objetos mutables : 

//Agregar nueva propiedad con valor. 
personaje.casado = false;


// Hacer objeto no mutable : 

Object.freeze( personaje ); //Solo afecta a las propiedades directas
personaje.dinero = 1000000;
console.log( " personaje : ", personaje );

personaje.direccion.ubicaion = "Costa Rica"; //Propiedad indirecta
console.log( " personaje : ", personaje );

//Obtener el nombre  de las propiedades del objeto

const propiedades = Object.getOwnPropertyNames( personaje );
console.log( " propiedades : ", {personaje} );

//Obtener valores  de las propiedades del objeto

const valores = Object.values( personaje );
console.log( {valores} );