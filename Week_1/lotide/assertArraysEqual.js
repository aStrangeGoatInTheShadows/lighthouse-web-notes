const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2, isEqual) => {
  assertEqual(eqArrays(arr1, arr2), isEqual);
}
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
