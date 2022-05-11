const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays')

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word[2]), ['o', 'n',, 'j', 'm']);
assertArraysEqual(map(words, word => 'pie'), ['pie', 'pie', 'pie', 'pie', 'pie']);
