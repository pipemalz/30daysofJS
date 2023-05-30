// El Patrón Proxy en JavaScript es un patrón de diseño que proporciona un middleware (o intermediario) para otro objeto para controlar el acceso a él. El objeto proxy actúa como un intermediario entre el cliente y el objeto real, interceptando y controlando las operaciones realizadas sobre el objeto real.

// Si nos vamos al lado del backend, estos middlewares son de lo más común con ExpressJS (por ejemplo). Express es un framework para desarrollar API de NodeJS, y una de las características que tiene es el uso de Middlewares. Los middlewares no son más que piezas de código que podemos hacer que se ejecuten antes, en el medio o después de que cualquier solicitud llegue a nuestros puntos finales

// El Patrón Proxy se puede implementar de varias maneras en JavaScript, una de ellas es utilizando funciones proxy, que permiten interceptar y controlar el acceso a un objeto. Las funciones proxy reciben un objeto y un manejador como argumentos, y actúan como un intermediario para el objeto, delegando las operaciones a él.

const objetoReal = {
    nombre: 'Objeto real',
    descripcion: 'Este es el objeto real'
}

const proxy = new Proxy(objetoReal, {
    get(target, prop){
        console.log(`Obteniendo la propiedad ${prop}`);
        return target[prop];
    },
    set(target, prop, value){
        console.log(`Estableciendo la propiedad ${prop} con el valor ${value}`);
        target[prop] = value;
        return true;
    }
})

console.log(proxy.nombre); 
// Accediendo a la propiedad "nombre" / "Objeto Real"

proxy.descripcion = 'Nueva descripción'; 
// Estableciendo valor "Nueva descripción" en la propiedad "descripcion"

console.log(proxy.descripcion); 
// Accediendo a la propiedad "descripcion" / "Nueva descripción"


// Si queremos controlar el acceso a los productos en base a si el usuario está registrado o no, podemos utilizar un proxy. Para ello, crearemos una clase ProductProxy que actúe como intermediario entre los clientes y los productos.

class Product{
    constructor(name, description, price){
        this.name = name;
        this.descripcion = description;
        this.price = price;
    }
    buy(){
        console.log(`Has comprado ${this.name} por $ ${this.price}`)
    }
}

class ProxyProduct{
    constructor(product, user){
        this.product = product;
        this.user = user;
    }
    getName(){
        return this.product.name;
    }
    getDescription(){
        return this.product.descripcion;
    }
    getPrice(){
        return this.product.price;
    }
    buy(){
        if(this.user.isRegistered){
            this.product.buy()
        }else{
            console.log('El usuario no esta registrado.')
        }
    }
}

class User{
    constructor(name) {
        this.name = name;
        this.isRegistered = false;
    }
    register(){
        this.isRegistered = true;
        console.log('Se ha registrado correctamente.')
    }
}

const user = new User('Pipemalz');
// user.register();

const tv = new Product('Tv', 'Hermosa Tv plasma de 70 pulgadas', 1000);

const proxyTv = new ProxyProduct(tv, user);
console.log(proxyTv.getDescription())
proxyTv.buy();
