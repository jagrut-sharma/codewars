// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  return Math.min(...s.split(" ").map(word => word.length))
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));

/*
function printerError(s) {
  const output = [...s].map((ele) => (!/[a-m]/.test(ele))? ele : '').filter(ele => ele).length;
  return `${output.length}/${s.length}`;
}

function printerError2(s) {
  const output = s.match(/[n-z]/g);
  return `${output.length}/${s.length}`;
}

console.log(printerError2(`aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz`));
/*
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
//  assert.strictEqual(getSum(0,-1), -1);
//     assert.strictEqual(getSum(0, 1),  1);
//     assert.strictEqual(getSum(2, 2),  2);

function getSum(a, b) {
  let max = a;
  let min = b;
  if (max < min) {
    [max, min] = [min, max];
  }
  // console.log(max);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

function GetSum(a, b) {
  return (Math.abs(a - b) + 1) * (a + b) / 2;
}
getSum(2, 25);
console.log(GetSum(-1, -3));
/*
function sum(a, b) {
  const total = a + b;
  return total;
}

const add = sum();
console.log(add);

  // console.log();
// function countBy(x, n) {
//   const arr = [];
//   for (let a = 1; a <= n; a++) {
//     arr.push(x * a);
//   }
//   return arr;
// }

// countBy(2, 5);

// // Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// // Examples
// // "This is an example!" ==> "sihT si na !elpmaxe"
// // "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//   const splitStr = str.split(' ');
//   return splitStr.map((ele) => ele.split('').reverse().join('')).join(' ');
// }

// const reverseWords2 = str =>
//   str.replace(/\S+/g, val => {
//     return [...val].reverse().join(``);
//   });

// console.log(reverseWords2("double  spaces"));
// console.log([..."double"]);

/*
// Reverse String

function reverseWords(str) {
  const splitStr = str.split('');
  // console.log(splitStr);
  let reverseStr = '';
  for (let i = splitStr.length - 1; i >= 0; i--) {
    reverseStr += splitStr[i];
  }
  return reverseStr;
}

console.log(reverseWords("This is an example!"));
console.log(reverseWords("double  spaces"));

/*
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
  const regex = /\d/g;
  return x.replace(regex, regex => regex < 5 ? 0 : 1);
}


console.log(fakeBin('45385593107843568'));

/*
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
  let sum = Number(a) + Number(b);
  console.log('Sum = ' + sum);
  let num = "";
  while (sum !== 0) {
    const rem = Math.floor(sum % 2);
    num += rem;
    sum = Math.floor(sum / 2);
  }
  return num.split("").reverse().join(""); // 11001
}

function addBinary2(a, b) {
  return (Number(a) + Number(b)).toString(2); // 11001
}

function addBinary3(a, b) {
  let sum = Number(a) + Number(b);
  return parseInt(sum, 10); // Does not work as parseInt only converts to number
}

console.log(addBinary(12, 13));
console.log(addBinary2(12, 13));
console.log(addBinary3(12, 13));

/*
// Find and match a word with two alternative spellings

const regexPattern = /ambi[ea]nce/;

console.log(regexPattern.test('ambiance')); // Output: true

console.log(regexPattern.test('ambience')); // Output: true

console.log(regexPattern.test('ambiwnce')); // Output: false

// The regex pattern interprets as:  find a followed by m, then b,
// then i, then either e or a, then n, then c, and then e.

const regexPattern2 = /[^bc]at/;

console.log(regexPattern2.test('bat')); // Output: false

console.log(regexPattern2.test('cat')); // Output: false

console.log(regexPattern2.test('mat')); // Output: true


/*
let text = "That's hot heat het!";
let pattern = /h.t/g; // Will search for words that have one letter between h and t => Output: ['hat', 'hot', 'het']
console.log(text.match(pattern));

let text2 = "Is this all there is?";
let pattern2 = /\s/g;
console.log(text2.match(pattern2)); // Output: [' ', ' ', ' ', ' ']

let text3 = "Is this all there is?";
let pattern3 = /\S/g;
console.log(text3.match(pattern3)); // Output: ['I', 's', 't', 'h', 'i', 's', 'a', 'l', 'l', 't', 'h', 'e', 'r', 'e', 'i', 's', '?']

/*
// REGEX
const regexPattern = /cat$/;

console.log(regexPattern.test('The mouse and the xyzabccat')); // Output: true --> Just compares the position and not teh characters themselves

console.log(regexPattern.test('The cat and mouse')); // Output: false

// word boundaries

// Syntax 1: /\b.../ where .... represents a word.

// Search for a word that begins with the pattern ward
const regexPattern1 = /\bward/gi;

const text1 = 'backward Wardrobe Ward';

console.log(text1.match(regexPattern1)); // Output: ['Ward', 'Ward']

// Syntax 2: /...\b/

// Search for a word that ends with the pattern ward
const regexPattern2 = /ward\b/gi;

const text2 = 'backward Wardrobe Ward';

console.log(text2.match(regexPattern2)); // Output: ['ward', 'Ward']

// Syntax 3: /\b....\b/

// Search for a stand-alone word that begins and end with the pattern ward
const regexPattern3 = /\bward\b/gi;

const text3 = 'backward Wardrobe Ward';

console.log(text3.match(regexPattern3)); // Output: ['Ward']

const regexPattern4 = /\Blo/gi; // Will not look at start => Will look at end

const text4 = "HELLO, LOOK AlOT YOUlo!";

console.log(text4.match(regexPattern4)); // Ouput: ['LO', 'lo']

/*
// remove the spaces from the string, then return the resultant string
// 8 j 8   mBliB8g  imjB8B8  jl  B
function noSpace(x) {
  return x.split(' ').join('');
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));


/*
// EXAMPLE-02
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not plays banjo`;
}

console.log(areYouPlayingBanjo('Jagrit'));
console.log(areYouPlayingBanjo('Rahul'));
console.log(areYouPlayingBanjo('rahul'));

/* 
// EXAMPLE -1
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


function countPositivesSumNegatives(input) {
  if (input !== null && input.length !== 0) {
    const positiveCount = input.filter(num => num > 0).length;
    const negativeSum = input.filter(num => num < 0).reduce((sum, num) => sum + num, 0);
    return [positiveCount, negativeSum];
  }
  return [];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives(null));
*/