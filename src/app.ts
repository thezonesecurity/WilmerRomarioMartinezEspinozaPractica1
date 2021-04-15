/*
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

// ejercicio 2 
let texto: string = "this is a sample string";
let textoInvertido: string = "";
for ( let  j = texto.length-1; j >= 0; j--) {
    textoInvertido = textoInvertido + texto.charAt( j );
}
console.log( textoInvertido );

// ejercicio 3
let cadena: string = "this is my example";
let cadenaInvertido: string = "";
for ( let k = cadena.length-1; k >= 0; --k) {
    cadenaInvertido = cadenaInvertido + cadena.charAt( k );
}
if ( cadena == cadenaInvertido) {
    console.log( true );  
} else {
    console.log( false );
}
*/
//ejercicio 5
let arreglo: Array<number> = [6, 2, 3, 8];
let aux: number;
for ( let i = 0; i <= arreglo.length-1; i++ ) {
    for ( let j = 0; j <= arreglo.length-1; j++ ) {
        if ( arreglo[j] > arreglo[j+1] ) {
            aux = arreglo[j];
            arreglo[j] = arreglo[j+1];
            arreglo[j+1] = aux;
        }
    }
}
//console.log(arreglo);
let resul: number = 0;
for ( let k = 0; k < arreglo.length-1; k++ ) {
    if ( arreglo[k] != arreglo[k+1] ) {
        let a: number = arreglo[k];
        let b: number = arreglo[k+1];
        for ( let j = a; j < b-1; j++) {
            if (a == b) {
                break;
            }
            resul = resul + 1;
        }
    } 
}
console.log(resul);