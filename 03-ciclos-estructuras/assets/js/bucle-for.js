const heroes = ['Batman', 'Superman', 'Mujer maravilla', 'AquaMan'];

for(i = 0; i < heroes.length; i++){
    console.log( heroes[i] );
}


for( let i in heroes ){
    console.log( heroes[i] );
}

for (let heroe of heroes) {
    console.log(heroe);
}