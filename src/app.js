//ejercicio  1
var nro = 5;
var i = 1;
var cont = 0;
while (i <= nro) {
    if (nro % i == 0) {
        cont = cont + 1;
        i++;
    }
    else {
        i++;
    }
}
if (cont == 2) {
    console.log(true);
}
else {
    console.log(false);
}
