class Product{
    constructor(){
        this.name = '';
        this.price = 0;
        this.quantity = 0;
    }
    setName(name){
        this.name = name;
        return this;
    }
    setPrice(price){
        this.price = price;
        return this;
    }
    setQuantity(quantity){
        this.quantity = quantity;
        return this;
    }
    build(){
        return {
            name: this.name,
            price: this.price,
            quantity: this.quantity
        }
    }
}

const papel = new Product().setName('HOLA').setQuantity(20).setPrice(1000).build();

console.log(papel)


class FormBuilder{
    constructor(){
        this.elements = [];
    }
    addInput(type, name, placeholder){
        this.elements.push({
            element: 'input',
            type: type,
            name,
            placeholder
        })
        return this;
    }
    addButton(value){
        this.elements.push({
            element: 'button',
            value
        })
        return this;
    }
    build(){
        let form = '';
        this.elements.forEach(element=>{
            if(element.element == 'input'){
                form += `<input type='${element.type}' name='${element.name}' placeholder='${element.placeholder}'>`;
            }else if(element.element == 'button'){
                form += `<button value="${element.value}">`;
            }
        })
        return form;
    }
}

const myForm = new FormBuilder()
    .addInput('text','username','Ingresa tu usuario')
    .addInput('password', 'pass', 'Ingresa tu contraseña')
    .addButton('submit', 'Enviar')
    .build();

console.log(myForm)


  