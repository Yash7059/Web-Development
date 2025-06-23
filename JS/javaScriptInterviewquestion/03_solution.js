function mirrorString(str) {
  // Split the string into an array of characters
  const chars = str.split('');
  
  // Reverse the array of characters
  const reversedChars = chars.reverse();
  
  // Join the reversed array back into a string
  const mirroredString = reversedChars.join('');
  

  return str + mirroredString;
}

console.log(mirrorString('hello')); // Output: 'olleh'