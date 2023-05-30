
// En este desafío debes crear un sistema de carrito de compras.
// Dentro del playground tendrás un archivo product.js que será la clase base y será abstracta. Deberás crear las clases hijas Article y Service que extenderán de Product.
// La clase Article deberá implementar el método addToCart() de manera que retorne el string "Agregando x unidades del artículo x al carrito", donde x es el nombre y la cantidad del producto. Por otro lado, la clase Service deberá implementar el método addToCart() de manera que retorne el string "Agregando el servicio x al carrito", donde x es el nombre del servicio.
// Además, debes crear la clase Cart que será el carrito de compras y tendrá los siguientes métodos:
// addProduct(product) este método agregará un producto al final de la lista de compras y deberá llamar al método addToCart() de cada producto o servicio.
// deleteProduct(product) este método recibirá un producto y lo eliminará de la lista de productos
// calculateTotal() este método calculará el total de los productos agregados y lo devolverá.
// getProducts() este método devolerá el array de los productos que contiene el carrito.

class Product {
    // No debes editar este archivo ❌
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    addToCart() {
      throw new Error(
        "La lógica de este método debe ser implementada por las clases hijas"
      );
    }
  }
  
  
class Article extends Product{
    constructor(name, price, quantity){
        super(name, price, quantity);
    }

    addToCart(){
        return `Agregando ${this.quantity} unidades del artículo ${this.name}`;
    }
}
  
class Service extends Product{
    constructor(name, price, quantity){
        super(name, price, quantity);
    }
    addToCart(){
        return `Agregando el servicio ${this.name} al carrito`;
    }
}

class Cart {
    constructor(){
        this.products  = [];
    }
    addProduct(product){
        this.products.push(product);
        console.log(product.addToCart())
    }
    deleteProduct(product){
        this.products = this.products.splice(this.products.indexOf(product)-1, 1);
    }
    calculateTotal(){
        return this.products.reduce((acc, value) => acc + (value.price * value.quantity), 0);
    }
    getProducts(){
        return this.products;
    }
}


const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 1);

const cart = new Cart();
cart.addProduct(book);
cart.addProduct(course);
cart.deleteProduct(book);
console.log(cart.calculateTotal())
