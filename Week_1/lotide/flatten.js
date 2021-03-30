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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};

const flatten = function (arrayToFlat) {
  let fltArry = [];

  console.log('we ran flatten');

  for (let item of arrayToFlat) {
    if(Array.isArray(item)){
      for(let subItem of item) {
        fltArry += subItem;
      }
    } else {
      fltArry += item;
    }
  }

  return fltArry;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]) );

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS