// En este desafío, debes crear una jerarquía de clases mediante el uso de la herencia.
// La clase base será Animal con las propiedades name, age y species y un método getInfo que devuelve un objeto con la información del animal.
// Luego, debes crear una clase Mammal que herede de Animal y tenga una propiedad adicional hasFur y un método getInfo que sobreescriba al del padre y incluya la información de hasFur.
// Finalmente, debes crear una clase Dog que herede de Mammal y tenga una propiedad adicional breed y un método getInfo que sobreescriba al del padre y incluya la información de breed, al igual que el método bark que devuelva el string "woof!".

class Animal {
    constructor(name, age, specie) {
      this.name = name;
      this.age = age;
      this.specie = specie;
    }
    getInfo() {
      return {
        name: this.name,
        age: this.age,
        specie: this.specie
      }
    }
  }
  
  class Mammal extends Animal {
    constructor(name, age, specie, hasFur) {
      super(name, age, specie);
      this.hasFur = hasFur;
    }
    getInfo() {
      return {
        name: this.name,
        age: this.age,
        specie: this.specie,
        hasFur: this.hasFur
      }
    }
  }
  
  class Dog extends Mammal {
    constructor(name, age, breed, hasFur, specie = "dog") {
      super(name, age, specie, hasFur);
      this.breed = breed;
    }
    getInfo() {
      return {
        name: this.name,
        age: this.age,
        specie: this.specie,
        hasFur: this.hasFur,
        breed: this.breed
      }
    }
    bark() {
      return "woof!"
    }
  }

const bird = new Animal("pepe", 1, "bird")
console.log(bird.getInfo())

const hippo = new Mammal("bartolo", 3, "hippo", false)
console.log(hippo.getInfo())

const dog = new Dog("fido", 4, "pastor aleman", true);
console.log(dog.getInfo())
console.log(dog.bark())