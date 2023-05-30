class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    push(value){
        const newNode = new Node(value);
        if(this.length == 0){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.top){
            return null;
        }
        if(this.length === 1){
            this.bottom = null;
        }
        const value = this.top.value;
        this.top = this.top.next;
        this.length--;
        return value;
    }
    peek(){
       return this.top ? this.top.value : null; 
    }
    isEmpty(){
        return this.length === 0;
    }
}

const myStack = new Stack();
myStack.push(4);

myStack.pop();
console.log(myStack.peek())
