// En este ejercicio práctico, crearás métodos adicionales para una singly linked list.

// Para este ejercicio, deberás implementar la lógica de algunos métodos de LinkedListRecharged que heredará de un LinkedList (SinglyLinkedList.js) previamente creada.

// Los métodos que deberás implementar son los siguientes

// get(index): este método recibirá un index y retornará el valor del nodo en la posición buscada, en caso de recibir un index invalido este retornará null.

// insertAt(index, value): este método inserta un valor en la posición especificada.

// toArray(): Tomará todos los valores de la singly linked list y los retornará en un array.

// removeAt(index): este método elimina el nodo en el index especificado y retorna el valor.

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
  }
}


class LinkedListRecharged extends LinkedList {
    constructor() {
      super();
    }
    get(index, value = true) {
        let currentIndex = this.head;
        let count = 0;

        while(currentIndex && (count<=index)){
            if(count === index){
                if(value){
                    return currentIndex.value;
                }else{
                    return currentIndex;
                }
            }
            count++;
            currentIndex = currentIndex.next;
        }

        return null;
      }
  
    insertAt(index, value) {
        const newNode = new Node(value);
        const nodeBefore = this.get(index - 1, false);
        const currentNode = this.get(index, false);
    
        if (!currentNode || !nodeBefore) {
          return null;
        }
    
        nodeBefore.next = newNode;
        newNode.next = currentNode;
      }
  
    toArray(){
        let currentIndex = this.head;
        const newArray = [];
        while(currentIndex){
            newArray.push(currentIndex.value);
            currentIndex = currentIndex.next;
        }
        return newArray;
    }

    removeAt(index){
        const nodeBefore = this.get(index-1, false);
        const currentNode = this.get(index, false);
        if (!currentNode || !nodeBefore) {
            return null;
          }
        nodeBefore.next = currentNode.next;
    }
}

const linkedList = new LinkedListRecharged();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.removeAt(1);

console.log(linkedList.toArray())