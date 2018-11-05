// input: array of numbers
// output: array of numbers

function arrayDouble(array) {
  // base case
  if (!array.length) {
    return [];
  } else {
    //general case
    return [array[0] * 2, ...arrayDouble(array.slice(1))];
  }
}

console.log(arrayDouble([1, 2, 3]));