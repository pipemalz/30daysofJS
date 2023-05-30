// Singleton es un patrón de diseño que se utiliza para asegurarse de que una clase tenga solo una única instancia durante toda la ejecución de un programa

const Singleton = ( 
    function(){
        let instance;

        function createInstance(){
            object = new Object({name: 'instance'});
            return object;
        };

        return {
            getInstance: function(){
                if(!instance){
                    instance = createInstance();
                }
                return instance;
            }
        };
    }
)();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // True

class SingletonV2 {
    constructor(){
        if(!SingletonV2.instance){
            this.name = 'Instance';
            SingletonV2.instance = Object.freeze(this);
        }
        return SingletonV2.instance;
    }
}

const instanceV21 = new SingletonV2();
const instanceV22 = new SingletonV2();
console.log(instanceV21 === instanceV22); // True


console.log([1,2,3,4,5].find(n=>n<10))