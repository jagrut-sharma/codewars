

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