class Observador {
    constructor(name){
        this.name = name;
    }

    notificar(cambio){
        console.log(`El observador ${this.name} ha sido notificado del cambio ${cambio}`)
    }
}

class Observable {
    constructor(){
        this.observadores = [];
    }

    registrarObservador(observador){
        this.observadores.push(observador);
    }
    notificarCambio(cambio){
        this.observadores.forEach(observador=>{
            observador.notificar(cambio)
        })
    }
}

const observable = new Observable();
const observador1 = new Observador("Observador 1");
const observador2 = new Observador("Observador 2");

observable.registrarObservador(observador1);
observable.registrarObservador(observador2);

observable.notificarCambio("Cambio en el objeto principal");
// Observador 1 ha sido notificado del cambio: Cambio en el objeto principal
// Observador 2 ha sido notificado del cambio: Cambio en el objeto princip
