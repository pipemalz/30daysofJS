class User {
    // Este código no debe ser editado ❌
    constructor(name) {
        this.name = name;
        this.messages = [];
    }

    receiveMessage(message) {
        this.messages.push(message);
    }
}

class Chat {
    constructor() {
      if (!Chat.instance) {
        this.users = [];
        Chat.instance = Object.freeze(this);
      }
      return Chat.instance;
    }
    sendMessage(message) {
      this.users.forEach(user => {
        user.receiveMessage(message);
      })
    }
    addUser(user) {
      if (user instanceof User) {
        this.users.push(user);
      }
    }
    removeUser(name) {
      for (let index in this.users) {
        if (this.users[index].name == name) {
          this.users.splice(index, 1);
        }
      }
    }
  }

const chat = new Chat();
const user1 = new User("Pepito");
const user2 = new User("Juanito");
chat.addUser(user1);
chat.addUser(user2);

chat.sendMessage("Nunca pares de aprender!");

console.log(user1.messages)
console.log(user2.messages)