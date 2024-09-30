/* ========================================
                    Objetos
   ======================================== */

/* ➤ 1: Crear un objeto de persona: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.*/
const persona = {
    nombre: "Juan",
    edad: 30,
    genero: "Masculino"
}

console.log(persona);

/* ➤ 2: Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.*/

const caja = {
    cuadernos: 5,
    lapices: 10,
    papel: "100 hojas",
    fotografias: 20,
    estado: "Buen estado"
}

// Imprimir el objeto entero por consola
console.log("Objeto caja completo:", caja);

// Imprimir cada propiedad del objeto con su valor y tipo de dato
for (const propiedad in caja) {
    console.log(`Propiedad: ${propiedad}, Valor: ${caja[propiedad]}, Tipo de dato: ${typeof caja[propiedad]}`);
}