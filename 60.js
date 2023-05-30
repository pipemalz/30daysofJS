// En este desafío, debes implementar la lógica de la clase "Usuario" que represente un usuario en una red social y utilizar encapsulamiento para proteger sus datos privados.
// La clase debe tener las siguientes variables privadas:

// name
// age
// friends (array de objetos Usuario)
// messages (array de strings)
// Además, debes proporcionar los siguientes métodos públicos:

// addFriend(friend): agrega un usuario a la lista de amigos del usuario actual.
// sendMessage(message, friend): agrega un mensaje a la lista de mensajes del usuario actual y al amigo especificado.
// showMessages(): devuelve la lista de mensajes del usuario actual.
// También debes tener definidos los getters y setters para acceder a los datos privados como el nombre y la edad, los cuales pueden ser modificados mediante su propio setter.

class User {
    constructor(name, age, friends = [], messages = []){
        this._name = name;
        this._age = age;
        this._friends = friends;
        this._messages = messages;
    }
    addFriend(friend){
        this._friends.push(friend);
    }
    sendMessage(message, friend){
        this._messages.push(message)
        friend.addMessage = message;
    }
    showMessages(){
        return this._messages;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName; 
    }
    get age(){
        return this._age;
    }
    set age(newAge){
        this._age = newAge;
    }
    set addMessage(message){
        this._messages.push(message);
    }
}
  
const usuario1 = new User("Juan", 20);
const usuario2 = new User("Maria", 25);
usuario1.addFriend(usuario2);
usuario1.sendMessage("Hola Maria!", usuario2);

console.log(usuario1.showMessages())
console.log(usuario2.showMessages())