// Sintaxis de prototipo
function Animal(especie){
    this.especie = especie;
}

Animal.prototype.comer = function(){
    console.log(`El ${this.especie} esta comiendo...`)
}

const perro = new Animal("Canino");
perro.comer()

// Sintaxis de clases
class Animal {
    constructor(especie){
        this.especie = especie;
    }
    comer(){
        console.log(`El ${this.especie} esta comiendo...`)
    }
}

// Herencia con clases
class Canino extends Animal{
    constructor(raza, especie){
        super(especie);
        this.raza = raza;
    }
    respirar(){
        console.log(`El ${this.especie} de raza ${this.raza} esta respirando...`)
    }
}

const perro = new Canino("Pitbull", "Canino");
perro.comer();
perro.respirar();

//Herencia con prototipos
const animal = {
    respirar: () => console.log('Respirando...')
}

const perro = Object.create(animal);

perro.ladrar = () => console.log('Ladrando...');

perro.respirar();
perro.ladrar();