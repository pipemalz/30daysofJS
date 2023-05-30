//Objetos literales

const obj1 = {a: 'Nombre', b: 20, c: false};

const obj2 = {nombre: 'Felipe', edad: 27, soltero: true};

const obj3 = {};

Object.assign(obj3, obj1, obj2); //Copia las propiedades de los obj1 y obj2 al obj3

console.log(obj3);

const obj4 = Object.assign({}, obj3); //Copia las propiedades de obj3 a un objeto vacio que se almacena en la constante obj4

console.log(obj4);

Object.freeze(obj1);

obj1.nombre = "Apellido"
console.log(obj1);

console.log(Object.getOwnPropertyNames(obj2)) // Este método devuelve un array con todas las propiedades de un objeto que son de su propiedad, es decir, no heredadas

const myobj = Object.create(obj1);
myobj.d = 50;
console.log(Object.getOwnPropertyNames(myobj));

for(let prop in obj4){ // Recorre las propiedades de un objeto, o los indices de un array
    console.log(`${prop} = ${obj4[prop]}`)
}

const propiedades = Object.keys(obj4); // Devuelve el nombre de las propiedades en forma de array

console.log(propiedades);

for(let prop of propiedades){ // Recorre los valores de un array
    console.log(`${obj4[prop]}`)
}

const valores = Object.values(obj4) //Devuelve los valores de un objeto literal en forma de array incluyendo las heredadas

console.log(valores);

const datos = Object.entries(obj4); // Devuelve un array con la estructura [propiedad, valor] en cada indice

console.log(datos);

console.log(obj3.hasOwnProperty('a')); //Este método devuelve un booleano indicando si un objeto tiene una propiedad específica que es de su propiedad, es decir, no heredada. Por ejemplo:
console.log(myobj.hasOwnProperty('a'));