const map = new Map();
map.set('id', '1036401096');
map.set('name', 'Felipe');
map.set('name', 'Luis');
console.log(map);

const myArray = [['id', 1000], ['id2', '2000'], ['id', 500]];
const map2 = new Map(myArray);
console.log(map2);

console.log(map.get('name'));

console.log(map2.has('id'), map.has('id3'));

map2.delete('id2');

console.log(map2);

console.log(map.size);
map.clear();
console.log(map)