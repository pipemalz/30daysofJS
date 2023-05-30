// El patrón Chain of Responsibility en JavaScript es un patrón de diseño que permite la distribución de responsabilidades entre múltiples objetos. Este patrón permite que varios objetos puedan manejar una solicitud sin tener que conocer a quién se está enviando la solicitud ni cuál es el objeto que la manejará finalmente.

// La aplicación del patrón Chain of Responsibility en JavaScript se logra a través de la creación de una cadena de objetos que se comunican entre sí. Cada objeto de la cadena debe tener una referencia al siguiente objeto en la cadena y debe tener la capacidad de manejar la solicitud si lo desea. Si un objeto no puede manejar la solicitud, la pasa al siguiente objeto en la cadena.

class Solicitud{
    constructor(tipo, cantidad){
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.siguiente = null;
    }
}

class DescuentoHandler {
    constructor(){
        this.siguiente = null;
    }

    solicitar(solicitud){
        if(solicitud.tipo === "descuento"){
            console.log("Se ha aplicado un descuento del 10%");
        }else if(this.siguiente !== null){
            this.siguiente.solicitar(solicitud);
        }
    }
}

class EnvioGratisHandler {
    constructor(){
        this.siguiente = null;
    }

    solicitar(solicitud){
        if(solicitud.cantidad >= 500){
            console.log("Se ha aplicado envio gratis");
        }else if(this.siguiente !== null){
            this.siguiente.solicitar(solicitud)
        }
    }
}

// Uso
const descuentoHandler = new DescuentoHandler();
const envioGratisHandler = new EnvioGratisHandler();
descuentoHandler.siguiente = envioGratisHandler;

const solicitud = new Solicitud("descuento", 100);
descuentoHandler.solicitar(solicitud); 
// Se aplicó un descuento del 10% por un total de 10

const solicitud2 = new Solicitud("compra normal", 700);
descuentoHandler.solicitar(solicitud2); 
// Se aplicó envío gratis