const Person = function(firstAndLast) {
    this.getFullName = () => firstAndLast;
    this.getFirstName = () => firstAndLast.split(' ')[0];
    this.getLastName = () => firstAndLast.split(' ')[1];
    this.setFirstName = name => {
        firstAndLast = firstAndLast.replace(this.getFirstName(), name);
    }
    this.setLastName = lastName => {
        firstAndLast = firstAndLast.replace(this.getLastName(), lastName);
    }
    this.setFullName = newfullname => {
        firstAndLast = newfullname
    };
    return firstAndLast;
  };
  
const bob = new Person('Bob Ross');
console.log(bob.getFullName())

console.log(bob instanceof Person)
bob.setFirstName('carlos')
console.log(bob.getFirstName())


