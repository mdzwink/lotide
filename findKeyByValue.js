const assertEqual = require('./assertEqual')

const findKeyByValue = (obj, val) => {
  for (let key in obj) {
    if (obj[key] === val) {
      return key
    }
  }
}

assertEqual(findKeyByValue({a: 1, b: 2, c: 3, d: 2}, 2), 'b')
assertEqual(findKeyByValue({a: 3, b: 2, c: 1, d: 2}, 1), 'c')
assertEqual(findKeyByValue({a: 'z', b: 'o', c: 'o', d: '!'}, 'o'), 'b')
assertEqual(findKeyByValue({a: 'lighthouse', b: 'labs', c: 'web', d: 'bootcamp'}, 'zoo'), undefined)
