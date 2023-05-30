class Bebida {
    precio(){
        return 0;
    }
}

class AgregarLeche extends Bebida{
    constructor(bebida){
        super();
        this.bebida = bebida;
    }
    precio(){
        return this.bebida.precio() + 0.5;
    }
}

class AgregarChocolate extends Bebida{
    constructor(bebida){
        super();
        this.bebida = bebida;
    }
    precio(){
        return this.bebida.precio() + 1;
    }
}

// Uso
const bebida = new Bebida();
console.log(bebida.precio()); // 0

const bebidaConLeche = new AgregarLeche(bebida);
console.log(bebidaConLeche.precio()); // 0.5

const bebidaConLecheYChocolate = new AgregarChocolate(bebidaConLeche);
console.log(bebidaConLecheYChocolate.precio()); // 1.5