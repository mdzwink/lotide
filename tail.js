const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔Assertion Passed✔: ${actual} === ${expected}`);
  } else {
    console.log(`⛔Assertion Failed⛔: ${actual} !== ${expected}`);
  }
};


const tail = function(arr) {
  let tailArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailArr.push(arr[i]);
  }
  return tailArr;
};

// assertEqual(tail([5,6,7]), [6, 7]);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);