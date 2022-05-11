const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✔Assertion Passed✔: ${actual} === ${expected}`)
  }else {
    console.log(`⛔Assertion Failed⛔: ${actual} !== ${expected}`)
  }
};


//take in an array of items and a object containing the items to count
const countOnly = function(allItems, itemsToCount) { 
  const results = {}
  //loop through the array of items
  for (let item of allItems) {
    //if the arrays are not empty...
    if (itemsToCount[item]) {
      if (results[item]) {
        console.log(item)
        //then adds
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  } 
  console.log(results)
  return results;
}
//It won't count everything.
//In order to decide what to count, 
//it will also be given an idea of which items we care about and it will only count those, ignoring the others.
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);