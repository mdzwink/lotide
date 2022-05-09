const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false);// => should Fail
assertEqual(eqArrays([1, 2, 3], [1, '2', 3]), false);// => should Fail

assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);// => should Pass
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '4']), false);// => should Fail
assertEqual(eqArrays(['1', 2, '3'], ['1', '2', '3']), false);// => should Fail