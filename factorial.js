// input: int
// output: int

function factorial(int) {
  // base case
  if (!int) {
    return 1;
  }
  // general case
  return int * factorial(int - 1);
}

console.log(factorial(5));