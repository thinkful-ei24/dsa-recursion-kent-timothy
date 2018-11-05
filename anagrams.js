// // input: string
// // output: array

function anagrams(str) {

  // base case
  if (str === '') {
    console.log(' base case');
    return [''];
  }

  // general case
  const list = [];

  for (let i = 0; i < str.length; i++) {
    const prefix = str.slice(i, i + 1);
    const before = str.slice(0, i);
    const after = str.slice(i + 1);
    const subAnagrams = anagrams(before + after);
    subAnagrams.forEach(word => {
      console.log(word);
      list.push(prefix + '' + word);
    });
    console.log(list);
  }
  return list;
}

console.log(anagrams('east'));
console.log(anagrams('east').length);

// input: str
// output: array

function anagrams2(str, prefix = '') {
  if (!str.length) {
    return prefix;
  }

  let result = [];
  for (let i = 0; i < str.length; i++) {
    const before = str.slice(0, i);
    const after = str.slice(i + 1);
    result = result.concat(anagrams2(before + after, prefix + str[i]));
  }
  return result;
}

console.log(anagrams2('east'));
console.log(anagrams2('east').length);