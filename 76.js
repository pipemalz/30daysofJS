// En este desafío, debes implementar un patrón observer en un sistema de newsletter.

// Tendrás que crear una clase Newsletter que gestione la suscripción de los usuarios a un newsletter y envíe actualizaciones cuando se publique un nuevo artículo. La clase tendrá una lista de suscriptores (subscribers)inicializada, y los siguientes métodos: subscribe(subscriber) para agregar nuevos suscriptores, unsubscribe(email) para eliminar a un suscriptor de la lista mediante su correo electrónico, y post(article) que recibirá un objeto con dos propiedades: title y content.

// Además, necesitarás crear la clase Subscriber, la cual se inicializará con un correo electrónico y un método receive(article) que imprimirá en consola un mensaje que indica que el suscriptor ha recibido un artículo específico.

class Subscriber {
    constructor(email) {
        this.email = email;
    }
    receive(article) {
        console.log(`El suscriptor ${this.email} ha recibido el artículo: ${article.title}`)
    }
}

class Newsletter {
    constructor() {
        this.subscribers = [];
    }
    subscribe(suscriber) {
        this.subscribers.push(suscriber);
    }
    unsubscribe(email) {
        const index = this.subscribers
        .findIndex(subscriber => subscriber.email === email);

        this.subscribers.splice(index, 1);
    }
    post(article) {
        this.subscribers.forEach(sub => {
        sub.receive(article)
        })
    }
}