const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✔Assertion Passed✔: ${actual} === ${expected}`)
  }else {
    console.log(`⛔Assertion Failed⛔: ${actual} !== ${expected}`)
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✔ >ARRAY< Assertion Passed✔: ${actual} === ${expected}`);
  } else {
    console.log(`⛔ >ARRAY< Assertion Failed⛔: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {//checks if length of arrays are not equal and returns false if not
    return false;
  }
  for (let item in arr1) {//checks if any item in one array is not equal to the item in the second array at the same index
    // console.log('arr1:', arr1[item], 'arr2:', arr2[item])
    if (arr1[item] !== arr2[item]) {
      // console.log('arr1:', arr1[item], 'arr2:', arr2[item])
      return false;
    }
  }
  return true;
};




//takes a sentence
const countLetters = function(sentence) {
  //new object stores each letter as a key
  let letterCount = {};
  //loops through sentence
  for (let letter of sentence) {
    //doesn't include spaces
    if (letter !== ' ') {
      //adds to count of each letter as it loops or initialize new key/property with count 1
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  //returns final count of each letter in sentance
  return letterCount;
}

assertArraysEqual(countLetters('I will survive!'), {I: 1, w: 1, i: 2, l: 2, s: 1, u: 1, r: 1, v: 2, e: 1, '!': 1})
assertArraysEqual(countLetters('Hello'), {H: 1, e: 1, l: 2, o: 1})