// input: string, separator - str
// output: array

function stringSplitter(str, separator) {
  // base case
  if (!str.length) {
    return [];
  }

  // general case
  if (str[0] === separator) {
    return stringSplitter(str.slice(1), separator);
  } else {
    return [str[0], ...stringSplitter(str.slice(1), separator)];
  }

  // return []
}


// 'hello world'
// ' '

// ['h', ...stringSplitter(str.slice(1), separator)]
// ['he', ...stringSplitter(str.slice(1), separator)]
// ['hello', ...stringSplitter(str.slice(1), separator)]
// ['hello', 'w', ...stringSplitter(str.slice(1), separator)]

console.log(stringSplitter('hello world', ' '));