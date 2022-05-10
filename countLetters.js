const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✔Assertion Passed✔: ${actual} === ${expected}`)
  }else {
    console.log(`⛔Assertion Failed⛔: ${actual} !== ${expected}`)
  }
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

//assertEqual doesn't seem to pass even though output is correct and matching??
assertEqual(countLetters('I will survive!'), {I: 1, w: 1, i: 2, l: 2, s: 1, u: 1, r: 1, v: 2, e: 1, '!': 1})
console.log(countLetters('I will survive!'))
console.log({I: 1, w: 1, i: 2, l: 2, s: 1, u: 1, r: 1, v: 2, e: 1, '!': 1})