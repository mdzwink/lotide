const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✔Assertion Passed✔: ${actual} === ${expected}`)
  }else {
    console.log(`⛔Assertion Failed⛔: ${actual} !== ${expected}`)
  }
};

// Let's work together to implement countOnly. This function should


//take in a collection of items and
const countOnly = function(allItems, itemsToCount) { 
  const results = {}
  
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        console.log(item)
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  } 

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



  // //store counts in new obj
  // const counts= {};
  // //read through array
  //   //for...of
  //   //
  //   // console.log('counts before:', counts)

  // console.log('obj value:', obj)
  // for (let i of arr) {
  //     //read through obj 
  //     //for...in
  //   for (let j in obj) {
  //     //compare items in array to items in obj
  //     if (i === obj.j) {
  //       if (obj.j = 0) {
  //         counts.j = 1;
  //       } else {
  //         counts.j += 1;
  //       }
  //     }
  //   }
  // }
  // console.log('counts after:', counts)
  //each time item in arr matches item in obj then increment counter for that object value in a new obj
  //return said object
  //return counts;