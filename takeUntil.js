const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

//Takes an array and a callback. inputs each value from array into callback function and pushes each value into new array until callback evaluates to true.  Returns new array.
const takeUntil = (array, callback) => {
  let end = 1;
  let resultArr = [];
  for (let item of array) {
    if (callback(item)) {
      return resultArr;
    }
    resultArr = array.slice(0, end);
    end ++;
  }
}


const arr1 = ['a', 'b', 'c', 'd'];
const takeNotB = takeUntil(arr1, x => x === 'b')
console.log(takeNotB);

assertArraysEqual(takeUntil(arr1, x => x === 'b'), ['a'])//-->pass
assertArraysEqual(takeUntil(arr1, x => x === 'c'), ['a'])//-->fail
