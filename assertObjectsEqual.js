
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✔ >OBJECT< Assertion Passed✔: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`⛔ >OBJECT< Assertion Failed⛔: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


assertObjectsEqual({a: 1, b: 4}, {a: 1, b: 4}); //-->true
assertObjectsEqual({a: 'Lighthouse', b: 'Labs'}, {a: 'Lighthouse', b: 'Labs'}); //-->true
assertObjectsEqual({a: 'Lighthouse', b: 'Labs'}, {a: 'Labs', b: 'Lighhouse'}); //-->false
assertObjectsEqual({a: 1, b: 4}, {a: 1, b: 5}); //-->false
assertObjectsEqual({a: 1, c: 4}, {a: 1, b: 4}); //-->False

