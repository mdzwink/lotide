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
//for loop that splices each item in toRemArr from copy of sourceArr then returns copy with only remaining items

const without = function(sourceArr, toRemArr) {
  let withoutArr = [];
  withoutArr = sourceArr.slice(0);//making copy of sourceArr to work
  for (let item in withoutArr) {//loop through indecies of withoutArr
    for (let i of toRemArr) {//loop through values in toRemArr
      if (withoutArr[item] === i)//if value at index of withoutArr is equal to any value in toRemArr then remove value at said index in withoutArr
      withoutArr.splice(item, 1);
    }
  };
  return withoutArr;//return array with remaining values
}




//add more tests
assertArraysEqual((without([1, 2, 3], [1])), [2, 3])
assertArraysEqual((without(['1', '2', '3', '4', '5'], [1, 2, '4'])), ['1', '2', '3', '5'])
assertArraysEqual((without(['1', '2', '3'], [1, 2, '3'])), ['1', '2'])
assertArraysEqual((without([1, 2, 3, 4], [1, 3, '4'])), [2, 4])

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']);
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);//make sure original array is not desterbed
