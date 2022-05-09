const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// tests for middle.js
assertArraysEqual(middle(['a']), []);
assertArraysEqual(middle([5, 6]), []);
assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6]), [3]);
assertArraysEqual(middle(['a', 'b', 'c']), ['b']);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c']);
