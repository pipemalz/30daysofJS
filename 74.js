// El objetivo de este ejercicio es crear un proxy que controle el acceso a un servicio de mensajería.
// En el sistema de archivos encontrarás un archivo llamado messages.js que representa al servicio de mensajería y cuenta con dos métodos: sendMessage(text) y getHistory(). Sin embargo, actualmente, no se verifica si el usuario que hace uso de la clase está logeado, por lo que es necesario implementar un proxy.
// Tu tarea es agregar la lógica necesaria de la clase MessagesProxy que actuará como intermediario entre los clientes y el servicio de mensajería, manteniendo los métodos de Messages.js, pero agregando una verificación de si el usuario está logeado antes de permitir el acceso al historial de mensajes o el envío de un mensaje. Si el usuario no está registrado, se deberá lanzar un error con el mensaje "Usuario no registrado".
// Recuerda hacer uso de throw new Error("")
// Además, deberás implementar la logica de la clase User con los métodos login(), logout() y isLoggedIn(), que permitirá determinar si el usuario está logeado o no.
class Messages {
    // No debes editar este código ❌
    constructor() {
        this.history = [];
    }

    sendMessage(text) {
        this.history.push(text);
    }

    getHistory() {
        return this.history;
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.loggedIn = false;
    }

    login() {
        this.loggedIn = true;
        return true;
    }

    logout() {
        this.loggedIn = false;
        return true;
    }

    isLoggedIn() {
       return this.loggedIn;
    }
}

class MessagesProxy {
    constructor(messages, user) {
        this.messages = messages;
        this.user = user;   
    }

    sendMessage(text) {
        if(this.user.loggedIn){
            this.messages.sendMessage(text);
            return true;
        }else{
            throw new Error('Usuario no registrado');
        }
    }

    getHistory() { 
        if(this.user.loggedIn){
            return this.messages.getHistory();
        }else{
            throw new Error('Usuario no registrado');
        }
    }
}

const user = new User("John")
const messages = new Messages()
const messagesProxy = new MessagesProxy(messages, user)

messagesProxy.sendMessage("Hola")