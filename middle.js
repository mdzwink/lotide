
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

//takes an array
const middle = function(arr) {
  //store result(s) in array for return
  let midArr = [];
  //if array has only one or two elements then return empty array
  if (arr.length === 1 || arr.length === 2) {
    return midArr;
  }
  //determin if array is odd or even; arr.length % 2 === 0
  if (arr.length % 2 !== 0) {
    //if array is odd, return number at middle index (arr[arr.length / 2 + 0.5)])
    midArr.push(arr[arr.length / 2 - 0.5]);
  } else {
    //if array is even, return numbers at middle-most indices (array.length / 2 && (array.length / 2) + 1)
    midArr.push(arr[(arr.length / 2 - 1)]);
    midArr.push(arr[(arr.length / 2)]);
  }
  return midArr;
};


//tests
assertArraysEqual(middle(['a']), []);
assertArraysEqual(middle([5, 6]), []);
assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6]), [3]);
assertArraysEqual(middle(['a', 'b', 'c']), ['b']);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c']);

