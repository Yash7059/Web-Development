// function tocheckPasswordStrength(password) {
//   if (password.length < 8) {
//     return "week"
//   }else if (password.charCodeAt(0) >= 65 || password.charCodeAt(0) <= 90) {
//     return ;
//   }else if (password.charCodeAt(0) >= 97 || password.charCodeAt(0) <= 122) {
//     return ;
//   }else {
//     return "Password must be at least 8 characters long and start with a letter.";
//   }
// }

// console.log(tocheckPasswordStrength("Passwor")); // Output: "Password must be at least 8 characters long and start with a letter."


function isValidPassword(password) {
  const minLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);

  return minLength && hasUpper && hasLower && hasDigit;
}

// Test cases
console.log(isValidPassword("Password1")); // true
console.log(isValidPassword("password"));  // false (no uppercase, no digit)
console.log(isValidPassword("PASSWORD"));  // false (no lowercase, no digit)
console.log(isValidPassword("Passw1"));    // false (less than 8 chars)
