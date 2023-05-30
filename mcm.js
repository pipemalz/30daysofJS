function smallestCommons(arr) {
    const [min, max] = arr.sort((a,b)=>a-b);
    let current = max;
  
    while (true) {
      let divisibleByAll = true;
      for (let i = min; i <= max; i++) {
        if (i !== 1) {
          if (current % i !== 0) divisibleByAll = false;
        }
      }
      if (divisibleByAll) {
        return current;
      } else {
        if(current < 9999999999){
          current += max;
        }else{
          throw new Error('Exceded timeout')
        }
      }
    }
  }
  
  console.log(smallestCommons([20, 30]))

function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}

console.log(smallestCommons([5, 10]));