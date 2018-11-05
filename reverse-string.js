// input: string
// output: string

function reverseString(str) {
  // base case
  if (!str.length) {
    return '';
  }

  // general case
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString('testing'));
