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
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✔ >ARRAY< Assertion Passed✔: ${actual} === ${expected}`);
  } else {
    console.log(`⛔ >ARRAY< Assertion Failed⛔: ${actual} !== ${expected}`);
  }
};
const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✔Assertion Passed✔: ${actual} === ${expected}`)
  }else {
    console.log(`⛔Assertion Failed⛔: ${actual} !== ${expected}`)
  }
};



const letterPositions = function(sentence) {
  const results = {};
  
  //loop through sentence
  for (let index in sentence) {
    //if letter exists as key, add new index to the keys array value
    if (sentence[index] !== ' '){
      if(results[sentence[index]]) {
        results[sentence[index]].push(parseInt(index));
      } else {
        results[sentence[index]] = [parseInt(index)];
      }

    }
  }
  //if letter is not key then create key and add index value
  // console.log(results)
  return results;
};

assertArraysEqual(letterPositions('test').t, [0, 3]);
assertArraysEqual(letterPositions('test').e, [1]);
assertArraysEqual(letterPositions('test').s, [2]);
assertArraysEqual(letterPositions('guru bub').g, [0]);
assertArraysEqual(letterPositions('guru bub').u, [1, 3, 6]);
assertArraysEqual(letterPositions('guru bub').r, [2]);
assertArraysEqual(letterPositions('guru bub').b, [5, 7]);