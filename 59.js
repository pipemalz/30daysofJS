class Calculator{
    constructor(){
        this._total = 0; 
    }   
    sum(a,b){
        const result = a+b;
        this._total += result;
        return result;
    }
    get total(){
        return this._total;
    }
    set total(n){
        this._total = n;
    }
}

const myCalc = new Calculator();
myCalc.sum(5,5);
myCalc.sum(3,5);
myCalc.sum(5,78);
console.log(myCalc.total)

console.log(myCalc.total = 200)

console.log(myCalc.total)