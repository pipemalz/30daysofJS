// En este desafío, deberás crear la lógica para un automóvil mediante el uso de clases.
// Deberás implementar la lógica necesaria en la clase Car de tal manera que nos pueda servir de base para crear nuevos autos que reciba los siguientes parametros:

// brand: Marca del auto
// model: Modelo del auto
// year: Año del auto
// mileage: kilometraje del auto
// state: El estado por defecto del auto será false, indicando que el auto se encuentra apagado.
// Además, deberás implementar los siguientes métodos para hacer funcional los vehículos creados con la clase Car

// turnOn(): Método que encenderá el auto.
// turnOff(): Método que apagará el auto.
// drive(kilometers): Con este método podremos aumentar el kilometraje según los kilómetros dados pero solo si el auto está encendido. En caso contrario, deberá mostrar el siguiente mensaje de error: "El auto está apagado".


class Car {
    constructor(brand, model, year, mileage, state = false){
        this.brand = brand;
        this.model = model; 
        this.year = year;
        this.mileage = mileage;
        this.state = state;
    }
    turnOn(){
        this.state = true;
    }
    turnOff(){
        this.state = false;
    }
    drive(km){
        if(this.state){
            this.mileage += km;
        }else{
            throw new Error("El auto está apagado")
        };
    }
}
  
const toyota = new Car("Toyota", "Corolla", 2020, 0);
toyota.turnOn();
toyota.drive(100);
console.log(toyota.mileage)

const toyota2 = new Car("Toyota", "Corolla", 2020, 0);
toyota2.turnOff()
console.log(toyota2.drive(100))