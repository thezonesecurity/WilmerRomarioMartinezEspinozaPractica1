//ejercicio  1
let nro: number = 5;
let i: number = 1;
let cont: number = 0;
while ( i <= nro ) {
    if ( nro % i == 0 ) {
        cont = cont + 1;
        i++;
    } else {
        i++;
    }  
}
if ( cont == 2 ) {
    console.log( true );  
} else {
    console.log( false );
}