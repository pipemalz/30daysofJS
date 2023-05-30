const miArray = [1,2,3,4,3,2,2,454,2,45,32,43,21,3];
const miSet = new Set(miArray);
console.log(miSet);
miSet.delete(454);
console.log(miSet);
console.log(miSet.has(2), miSet.has(10))
console.log(miSet.size)

console.log([...miSet])