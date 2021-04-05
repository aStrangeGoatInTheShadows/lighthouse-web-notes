//const flatten = require('./flatten');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

////////////////////////////// TODO /////////////////////////////////////////////////
// When the requireds are uncommented, this file outputs a string containing 123456 
// It does not appear to be coming from the middle function

const middle = function (arry) {
  let arryOfMiddle = [];
  
  if ( arry.length <= 2) {
    return [];
  } else if (arry.length % 2 === 0) {
    arryOfMiddle.push(arry[Math.floor(arry.length/2) - 1]);
  }     
  arryOfMiddle.push(arry[Math.floor(arry.length/2)]); 

  return arryOfMiddle;
};

module.exports = middle;
