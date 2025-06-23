// const b = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];

function isVowel(str) {
    const a = ['a','e','i','o','u','A','E','I','O','U'];
    count = 0;

      for (let char of str) {
    if (a.includes(char)) {
      count++;
    }
  }

//   return count;

    return count;
    
}

console.log(isVowel("Hello World"));    // Output: 3
console.log(isVowel("JavaScript"));     // Output: 3
console.log(isVowel("Rhythm")); 
