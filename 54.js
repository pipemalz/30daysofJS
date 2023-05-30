function Vehiculo(){}

Vehiculo.prototype.encender = () => console.log('Encendiendo motores...');

function Sandero(){}

Sandero.prototype = Object.create(Vehiculo.prototype)

const carro = new Sandero;
carro.encender()

Array.prototype.suma = function() { return this.reduce((a, b) => a + b); }
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.suma()); // Output: 15
// Otro ejemplo, podemos agregar un método al prototipo de String para convertir una cadena a mayúsculas:

String.prototype.mayusculas = function() { return this.toUpperCase(); }
const nombre = "Juan";
console.log(nombre.mayusculas()); // Output: "JUAN