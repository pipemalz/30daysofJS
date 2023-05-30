// `a = avgAlt + constante earthRadius`

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const result = [];
    arr.forEach(item=>{
        const a = item.avgAlt + earthRadius;
        const t = (2 * Math.PI) * (Math.sqrt(Math.pow(a,3)/GM))
        result.push({name: item.name, orbitalPeriod: Math.round(t)})
    })
    return result;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))


  console.log('Hola como estas'.split('').reverse().join(''))