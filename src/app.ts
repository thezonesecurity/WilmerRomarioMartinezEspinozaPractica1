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

//ejemplo 7
let palabra1: string = "aabcc";
let palabra2: string = "adcaa";
let cont: number = 0;
for ( let i =  1; i <= palabra1.length; i++) {
    for ( let j = 1; j <= palabra2.length; j++) {
        if( palabra1[i] == palabra2[j]) {
            cont = cont + 1;
            break;
        }
    }
}
console.log("tiene " + cont + " palabras repetidas");
//console.log(palabra1.length);
*/
//ejercicio 8
let  limite: number = 6;
let cont: number;
let acu: string = "";
for (let i = 1; i <= (limite*2)+1; i++) {
    cont = 0;
    for (let j = 1; j <= i; j++) {
        if ( i % j == 0) 
            cont++;    
    }
    if (cont == 2)
       acu = acu + +i;
}
console.log(acu);