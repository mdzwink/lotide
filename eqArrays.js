const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔Assertion Passed✔: ${actual} === ${expected}`);
  } else {
    console.log(`⛔Assertion Failed⛔: ${actual} !== ${expected}`);
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


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false);// => should Fail
assertEqual(eqArrays([1, 2, 3], [1, '2', 3]), false);// => should Fail

assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);// => should Pass
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '4']), false);// => should Fail
assertEqual(eqArrays(['1', 2, '3'], ['1', '2', '3']), false);// => should Fail



// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false