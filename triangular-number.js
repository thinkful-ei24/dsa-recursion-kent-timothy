// input: integer
// output: integer

function nthTriangularNumber(int){
  // base case
  if(int === 1){
    return 1;
  }
  
  // general case
  return int + nthTriangularNumber(int - 1);
}

console.log(nthTriangularNumber(4));