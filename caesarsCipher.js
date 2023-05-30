// for(let i = 65; i <= 90; i++){
//     console.log(String.fromCharCode(i))
// }

function rot13(str) {
    function encodeLetter(l){
        const letterCode = l.charCodeAt();
        if(letterCode >= 65 && letterCode <= 90){
            let encodedLetter = letterCode+13;       
            if(encodedLetter > 90){
                encodedLetter = 65 + (encodedLetter - 91);
            }
            return String.fromCharCode(encodedLetter);
        }else{
            return l;
        }
    }

    return str.split('').map(letter=> encodeLetter(letter)).join('');
}
  
console.log(rot13("SERR PBQR PNZC"))