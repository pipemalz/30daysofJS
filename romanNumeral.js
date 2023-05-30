function convertToRoman(num) {
   if(num > 1999) throw new Error('Numero maximo admitido 1999');
   const romans = {
      '1000' : 'M',
      '900' : 'CM',
      '500' : 'D',
      '400' : 'CD',
      '100' : 'C',
      '90' : 'XC',
      '50' : 'L',
      '40' : 'XL',
      '10': 'X',
      '9' : 'IX',
      '5': 'V',
      '4': 'IV',
      '1': 'I'
   }
   const units = num.toString().split('').flatMap((n,i,arr)=>{
      return n !== '0' ? n.padEnd(arr.length - i,'0') : [];
   })

   function toRoman(n){
       if(['1','4','5','9'].includes(n[0])){
         return romans[n];
      }

      if(n[0] > 1 && n[0] < 4){
         return romans[n/n[0]].repeat(n[0]);
      }

      if(n[0] > 5 && n[0] < 9){
         return romans[5*(n/n[0])] + (romans[n/n[0]].repeat(n[0] - 5));
      }
   }
   return units.map(unit=> toRoman(unit)).join('');
}
   
console.log(convertToRoman(1000))