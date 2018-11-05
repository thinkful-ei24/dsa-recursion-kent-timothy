// input: string
// output: array

function anagrams(str, arr = []) {
  // base case
  if (!str.length) {
    return '';
  }

  // general case
  // use a prefix
  for (let i=0; i<str.length; i++) {
    return str[i] + anagrams(str.slice(0, i) + str.slice(i + 1));
  }
}

console.log(anagrams('east'));