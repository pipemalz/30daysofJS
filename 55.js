// En este desafío, deberás crear tu propia implementación de filter para el prototype de los arrays.

// Esto implica agregar un nuevo método llamado myFilter al prototype de los arrays, el cual permitirá filtrar elementos de manera similar al método filter nativo del lenguaje. El objetivo es poder usar el método myFilter de la siguiente manera:



Array.prototype.myFilter = function (fn) {
    const newArr = [];
    let i = 0;
    for (let value of this) {
        if(fn(value)){
            newArr[i] = value;
            i++;
        }
    }
    return newArr;
  }

const arr = [
    [1,3,3],
    [3,4,5],
    [7,7,7],
    [8,8,8]
  ];
  
console.log(arr.myFilter(a=>a.includes(3)))
