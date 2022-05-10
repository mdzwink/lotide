const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [1, 2, 3] for [0, 1, 2, 3]", () => {
    assert.deepEqual(tail([0, 1, 2, 3]), [1, 2, 3])
  })
  it("returns ['i', 'n', 'k'] for ['w', 'i', 'n', 'k']", () => {
    assert.deepEqual(tail(['w', 'i', 'n', 'k']), ['i', 'n', 'k'])
  })
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns ['Yo Yo', 'Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    tail(words)
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"])
  })
})
