const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!

  const inspect = require('util').inspect;

  console.log(`Example label: ${inspect(actual)}`);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const objKeys = Object.keys(object1);

  if (objKeys.length !== Object.keys(object2).length) {
    return false;
  }

  for (let eachKey of objKeys) {
    if (object1[eachKey] !== object2[eachKey] && object1[eachKey].length === 1) {
      return false;
    } else {
      if (!eqArrays(object1[eachKey], object2[eachKey])) {
        return false;
      }
    }
  }
  return true;
};

const eqArrays = function(ar1, ar2) {
  if (ar1.length !== ar2.length) {
    return false;
  }

  for (let i = 0; i <= ar1.length; i++) {
    if (ar1[i] !== ar2[i]) {
      return false;
    }
  }
  return true;
};

/* Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
*/


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

//assertEqual(eqObjects(cd, dc), true); // => true


//assertEqual(eqObjects(cd, cd2), false); // => false