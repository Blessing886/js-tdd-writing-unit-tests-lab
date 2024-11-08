function reverse(string) {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
      reversed += string[i];
    }
    return reversed;
  }
  
  export function isPalindrome(word) {
    if (typeof word !== 'string' || !/^[A-Za-z]+$/.test(word)) {
      throw new Error("Invalid input");
    }
    
    const lowerCaseWord = word.toLowerCase();
    return lowerCaseWord === reverse(lowerCaseWord);
  }
  