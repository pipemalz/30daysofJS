// El Patrón Facade (o fachada en español) en JavaScript es un patrón de diseño que proporciona una interfaz simplificada para un sistema complejo. Este patrón oculta la complejidad del sistema subyacente detrás de una interfaz sencilla y fácil de usar. La idea detrás del patrón Fachada es crear un objeto que actúe como intermediario entre el cliente y el sistema subyacente, simplificando el acceso y la interacción con este último.

class ComplexSystem{
    complexMethod1(){
        console.log('Imagina que aqui hubiese un codigo muy complejo');
    }
    complexMethod2(){
        console.log('Imagina nuevamente, que aqui, hay un codigo extremadamente complejo')
    }
}

class FacadeSystem{
    constructor(){
        this.complexSystem = new ComplexSystem();
    }
    easyMethod(){
        this.complexSystem.complexMethod1();
        this.complexSystem.complexMethod2();
    }
}

const fachada = new FacadeSystem();
fachada.easyMethod();

// En este ejemplo, creamos un sistema subyacente complejo llamado "ComplexSystem" que tiene dos métodos. Luego creamos una clase “FachadaSistema” que actúa como intermediario entre el cliente y el sistema subyacente. Finalmente, creamos un objeto de la clase “FachadaSistema” y vemos el resultado de invocar su método fácil.