/* ========================================
                    Arrays
   ======================================== */

/* ➤ 1: Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.*/
const numeros = [1, 2, 3, 4, 5];
let sumatoria = 0;

for (let i = 0; i <=4 ; i++) {
    sumatoria = sumatoria + numeros[i];
  }
console.log("Sumatoria del array", sumatoria);

/* ➤ 2: Crea una función (o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.*/
function promedio(vector){
    let n = vector.length;
    let sumatoria = 0;
    for (let i = 0; i < n; i++){
        sumatoria = sumatoria + vector[i];
    }
    return sumatoria/n;
}
console.log("Promedio del Array", promedio(numeros));

/* ➤ 3: Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.*/
const palabras = ["sol", "luna", "estrella", "mar", "montaña", "viento", "río", "bosque", "nube", "cielo"];
function arrayMayusculas(vector){
    let nuevoVector = [];
    for (let i = 0; i < vector.length; i++) {
        nuevoVector.push(vector[i].toUpperCase());
        }
    return nuevoVector;
}

console.log("Vector a mayusculas:");
console.log(arrayMayusculas(palabras));

/* ➤ 4: Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.*/
function arraypares(vector){
    let nuevoVector = [];
    for (let i = 0; i < vector.length; i++) {
        if(vector[i] % 2 === 0)
            nuevoVector.push(vector[i]);
        }
    return nuevoVector;
}
console.log("Vector de pares:", arraypares(numeros));
