/* ========================================
                    Funciones
   ======================================== */

/* ➤ 1: Crea una función que reciba un string y retorne el string en mayúsculas.*/
function convertirAMayusculas(texto) {
    return texto.toUpperCase();
}

const texto = "Texto a pasar a ConVerTir"
console.log(convertirAMayusculas(texto));

/* ➤ 2: Crea una función que reciba un string y retorne el string en minúsculas.*/
function convertirAMinusculas(texto) {
    return texto.toLowerCase();
}
console.log(convertirAMinusculas(texto));

/* ➤ 3: Crear una función que reciba como parámetro 2 números y los reste.*/

let numero1 = 10;
let numero2 = 5;

function restaNumeros(a,b){
    return a - b;
}
console.log(restaNumeros(numero1,numero2));

/* ➤ 4: Crear una función que reciba como parámetro 2 números y los divida.*/
function divideNumeros(a,b){
    return a / b;
}
console.log(divideNumeros(numero1,numero2));

/* ➤ 5: Crear una función que reciba como parámetro 2 números y los multiplique.*/
function multiplicaNumeros(a,b){
    return a * b;
}
console.log(multiplicaNumeros(numero1,numero2));

/* ➤ 6: Crear una función que reciba un string y devuelva la longitud del string.*/
function longitudString(texto){
    return texto.length;
}
console.log(longitudString("Longitudinal"));