// En este desafío, tu objetivo es encontrar un valor específico en un array de dos dimensiones.

// La función searchValue recibirá dos parámetros: un array bidimensional y un valor a buscar. Tu tarea será implementar la lógica necesaria para encontrar el valor y retornar un objeto con las propiedades row y column que indicarán la posición del valor dentro del array bidimensional.

// Si el valor no se encuentra en la matriz, la función deberá lanzar un error con el mensaje "Valor no encontrado". Recuerda que la sintaxis para lanzar errores es la siguiente throw new Error("Valor no encontrado");

function searchValue(array, value) {
    const valueLocation = array.flatMap(arr => {
        const index = arr.indexOf(value);
        return index != -1 ? { column: index, row: array.indexOf(arr) } : [];
    })[0];
    if (valueLocation) return valueLocation;
    throw new Error("Valor no encontrado");
}

const value = 5;
const array = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
];
console.log(searchValue(array, value))

console.log(array)
// Output:

// {
//   row: 1,
//   column: 1,
// }