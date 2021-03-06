const assertEqual = require('./assertEqual');

const findKey = (obj, callback) => {
  for (let val in obj) {
    //returns first key that evaluates to true when passed through callback fn
    if (callback(obj[val])) {
      return val;
    }
  }
  return undefined;
}

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma')

assertEqual(findKey({
  "tom": { charactors: 'mouse' },
  "jerry":   { charactors: 'cat' },
  "mickey":      { charactors: 'mouse' },
}, x => x.charactors === 'cat'), 'jerry')
