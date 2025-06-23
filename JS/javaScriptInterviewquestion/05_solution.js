function sumUntilNegative(arr) {
  let sum = 0;

  for (let num of arr) {
    if (num < 0) {
      break;
    }
    sum += num;
  }

  return sum;
}

// Test cases
console.log(sumUntilNegative([3, 5, 2, -1, 6, 7])); // Output: 10
console.log(sumUntilNegative([10, 20, 30]));       // Output: 60
console.log(sumUntilNegative([-5, 1, 2]));         // Output: 0
