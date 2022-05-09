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
  };
  for (let item in arr1) {//checks if any item in one array is not equal to the item in the second array at the same index
    // console.log('arr1:', arr1[item], 'arr2:', arr2[item])
    if (arr1[item] !== arr2[item]) {
      // console.log('arr1:', arr1[item], 'arr2:', arr2[item])
      return false;
    }
  }
  return true;
};

// This function should take in a source array and a itemsToRemove array. 
// It should return a new array with only those elements from source that are not present in the itemsToRemove array.

//fn(sourceArr, toRemArr)
//for loop that splices?? each item from toRemArr from sourceArr (or each item NOT in toRemArr)

const without = function(sourceArr, toRemArr) {
  let withoutArr = [];
  withoutArr = sourceArr;
  for (let item in withoutArr) {//loop through indecies of withoutArr
    for (let i of toRemArr) {//loop through values in toRemArr
      if (withoutArr[item] === i)//if value at index of withoutArr is equal to any value in toRemArr then remove value at said index in withoutArr
      withoutArr.splice(item, 1);
    }
  };
  return withoutArr;//return array with remaining values
}



console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
//add more tests

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
