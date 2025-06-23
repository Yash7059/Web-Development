function asyncDouble(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number * 2);
    }, 500);
  });
}

async function asyncArrayMap(arr) {
  return arr.map(num => asyncDouble(num));
}
console.log(asyncArrayMap([1, 2, 3, 4, 5]));