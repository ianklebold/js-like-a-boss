
//WHILE
const carros = ['Ford','Honda','Toyota'];

let i = 0;

while( carros[i]  ){
    console.log( carros[i] );
    // i = i + 1
    i++;
}

while( carros[i]  ){
    if(i === 1){
        break; //Sal del while
    }
    console.log( carros[i] );
    // i = i + 1
    i++;
}


while( carros[i]  ){
    if(i === 1){
        i++;
        continue; //Omite todo el codigo del while
    }
    console.log( carros[i] );
    // i = i + 1
    i++;
}

//DO WHILE
let j = 0;
do{
    console.log( carros[j] );
    j++;
}while(carros[j]);