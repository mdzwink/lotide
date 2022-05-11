const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

let test = assertEqual;
const eqObjects = (obj1, obj2) => {
  const obj1toArr = Object.keys(obj1);
  const obj2toArr = Object.keys(obj2);
  if (obj1toArr.length !== obj2toArr.length) {
    return false;
  }
  for (let key of obj1toArr) {
    if (Array.isArray(obj1[key])) {
      console.log(obj2[key]);
      return eqArrays(obj1[key], obj2[key]);
    } else {
    if (obj1[key] === obj2[key]) {
      //hi, this just runs :)
    } else {
      return false;
    }
    }
  }
  return true;
}

//test primitive
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual((eqObjects(ab, ba)), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual((eqObjects(ab, abc)), false);

//test with arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual((eqObjects(cd, dc)), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual((eqObjects(cd, cd2)), false);