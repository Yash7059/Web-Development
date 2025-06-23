function doubleTrouble(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // If it's the first element or not equal to the previous one, double it
    if (i === 0 || arr[i] !== arr[i - 1]) {
      result.push(arr[i] * 2);
    } else {
      // Otherwise, leave it as-is
      result.push(arr[i]);
    }
  }

  return result;
}

// Test
console.log(doubleTrouble([2, 2, 3, 4, 4, 4, 5])); // Output: [4, 2, 6, 8, 4, 4, 10]
