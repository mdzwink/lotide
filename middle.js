const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

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

module.exports = middle;