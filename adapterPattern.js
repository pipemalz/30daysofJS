class Auto{
    encender(llave){
        console.log("El auto ha sido encendido con la llave: "+llave)
    }
}

const miAuto = new Auto();
miAuto.encender('Maestra');

class AutoAdapter{
    constructor(auto){
        this.auto = auto;
    }
    encender(){
        this.auto.encender('Predeterminada');
    }
}

const miOtroAuto = new Auto();
const adaptador = new AutoAdapter(miOtroAuto);
adaptador.encender()


class DateAdapter {
    constructor(date){
        this.date = date;
    }
    getFormatedDate(){
        return this.date.toLocaleDateString();
    }
}

const myDate = new Date();

const myDateAdaptor = new DateAdapter(myDate);

console.log(myDateAdaptor.getFormatedDate());