function palindrome(str) {
    const cleanStr = str.toLowerCase().match(/[a-zA-Z0-9]/g);
    return cleanStr.join('') === cleanStr.reverse().join('') ? true : false;
  }
  
  palindrome("eye");

  console.log(palindrome("A man, a plan, a canal. Panama"));