// En este desafío, tendrás que implementar un sistema de pagos utilizando polimorfismo en JavaScript.

// Se debe crear una clase base llamada Pay que contenga un único método llamado makePay. Este método recibirá la cantidad a pagar y devolverá un objeto con dos propiedades

// realized: true
// quantity: $cantidadAPagar
// Además, se deben crear también las clases PayPal, Card y Cash, donde cada una debe heredar de la clase Pay.

// La clase PayPal debe recibir un email en el constructor y el método makePay debe agregar las propiedades:

// platform: "PayPal"
// email: $EmailRecibido.
// La clase Card recibirá un número de tarjeta de 16 dígitos. Al momento de acceder al método makePay, se validará si la tarjeta en cuestión tiene esa longitud. En caso de no tener los 16 dígitos, se debe retornar un error. En caso contrario, al método que proviene de Pay, se le agregará la propiedad de lastCardNumbers: donde se devolverán los últimos 4 dígitos de la tarjeta.

// La clase Cash simplemente nos devolverá lo mismo que la clase base.

// Por último se debe implementar la lógica de la función processPay la cual recibirá un método de pago y la cantidad, para poder devolver el objeto llamando al método makePay de cada entidad recibida.

// Cada clase tiene su propio archivo dentro del sistema de archvios del playground

class Pay{
    makePay(amount) {
        return {
          realized: true,
          quantity: amount
        }
      }
} 

class PayPal extends Pay{
    constructor(email) {
        super();
        this.email = email;
      }
      makePay(amount) {
        return {
          realized: true,
          quantity: amount,
          platform: "PayPal",
          email: this.email
        }
    }
}

class Card extends Pay {
    constructor(cardNumber) {
        super();
        this.cardNumber = cardNumber;
    }
    makePay(amount) {
        if (this.cardNumber.length == 16) {
            return {
                realized: true,
                quantity: amount,
                lastCardNumbers: this.cardNumber.slice(12, this.length)
            }
        }else {
            throw new Error('Numero de tarjeta invalido')
          }
    }
}

class Cash extends Pay {

}

function processPay(method, quantity) {
    return method.makePay(quantity);
}

const card = new Card("4913478952471122")

console.log(processPay(card, 100))

const paypal = new PayPal("test@mail.com")

console.log(processPay(paypal, 240))

const cash = new Cash()

console.log(processPay(cash, 400))