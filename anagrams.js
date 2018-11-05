// input: string
// output: array

// function anagrams(str, arr = []) {
//   // base case
//   if (!str.length) {
//     return '';
//   }

//   // general case
//   // use a prefix
//   for (let i=0; i<str.length; i++) {
//     return str[i] + anagrams(str.slice(0, i) + str.slice(i + 1));
//   }
// }

function anagrams(str){
  
  // base case
  if(str === ''){
    console.log(' base case');
    return [''];
  }

  // general case
  const list = [];

  for(let i = 0; i < str.length; i++){
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