const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert

describe ("#middle", () => {
  it("returns [] for ['a']", () => {
    assert.deepEqual(middle(['a']), [])
  })
  it("returns [] for [5, 6]", () => {
    assert.deepEqual(middle([5, 6]), [])
  })
  it("returns [3] for [0, 1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([0, 1, 2, 3, 4, 5, 6]), [3])
  })
  it("returns ['b'] for ['a', 'b', 'c']", () => {
    assert.deepEqual(middle(['a', 'b', 'c']), ['b'])
  })
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  })
  it("returns ['b', 'c'] for ['a', 'b', 'c', 'd']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c'])
  })
})


