class MyArray {
    constructor() {
      this.data = {};
      this.length = 0;
    }
  
    map(func) {
      const newArr = new MyArray();
      for (let prop in this.data) {
        newArr.push(func(this.data[prop]));
      }
      return newArr;
    }
  
    filter(func) {
      const newArr = new MyArray();
      for(let prop in this.data){
        if(func(this.data[prop])){
            newArr.push(this.data[prop])
        }
      }
      return newArr;
    }
  
    push(item) {
      this.data[this.length] = item; 
      this.length++;
    }
  
    pop(){
      const newArr = new MyArray();
      let item = this.data[this.length-1];
      for(let prop in this.data){
        if(parseInt(prop) !== (this.length-1)){
          newArr.push(this.data[prop]);
        }
      }
      this.data = newArr.data;
      this.length--;
      return item;
    }
  
    join(character = ",") {
      let string = '';
      for(let prop in this.data){
        string += parseInt(prop) !== (this.length-1) 
                    ? (this.data[prop] + character) : this.data[prop]
      }
      return string;
    }
  
    shift() {
      const newArr = new MyArray();
      let item = this.data[0];
      for(let prop in this.data){
        if(parseInt(prop) !== 0){
          newArr.push(this.data[prop]);
        }
      }
      this.data = newArr.data;
      this.length--;
      return item;
    }
  
    unshift(item) {
      const dataCopy = { ...this.data };
  
      if (!item) {
        return this.length;
      }
  
      this.data = {};
      this.data[0] = item;
  
      for (let prop in dataCopy) {
        this.data[parseInt(prop) + 1] = dataCopy[prop];
      }
  
      return this.length += 1;
    }
  }

  
  const myArray = new MyArray()

  myArray.push("Platzinauta");
  console.log(myArray.unshift("Hola!"))
  
  console.log(myArray.data)



  unshift(item) {
    if (!item && item !== 0) {
      return this.length
    }
    const newData = {}
    newData['0'] = item
    for (let i = 0; i < this.length; i++) {
      newData[i + 1] = this.data[i]
    }
    this.data = newData
    this.length++
    return this.length
  }
