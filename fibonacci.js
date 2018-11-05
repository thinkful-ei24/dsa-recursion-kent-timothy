// input: integer
// output: integer

function fibonacciNumber(int){

  // base case 
  if(int === 1 || int === 2) {
    return 1;
  }

  // general case 
  else {
    return fibonacciNumber(int - 1) + fibonacciNumber(int - 2);
  }

}

console.log('The 7th fibonacci number is', fibonacciNumber(7));
