// El patrón Factory es una técnica que permite crear objetos sin tener que especificar la clase exacta de dicho objeto

function createCar(model, brand){
    return {
        model: model,
        brand: brand,
        turnOn: function(){
            console.log(`Turning on the ${brand} model ${model}`)
        }
    }
}

const toyota = createCar(2020, 'Toyota')
toyota.turnOn();

class Car{
    createCar(brand, model){
        return {
            model: model,
            brand: brand,
            turnOn: function(){
                console.log(`Turning on the ${brand} model ${model}`)
            }
        }
    }
}
const carFactory = new Car();
const sandero = carFactory.createCar(2010, "Renault");
sandero.turnOn()