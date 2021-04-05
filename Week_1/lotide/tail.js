const { builtinModules } = require('node:module');
const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const tail = function(dataArray) {
  let dataTail = [];

  if (!dataArray) {
    return undefined;
  }
  for (let i = 1; i <= dataArray.length - 1; i++) {
    dataTail.push(dataArray[i]);
  }

  return dataTail;
};

const checkTail = function(dataArray, expectedOutput) {
  let dataTail = tail(dataArray);

  for (let i = 0; i <= dataArray - 2; i++) {
    let samsies = assertEqual(dataTail[i], expectedOutput[i]);

    if (!samsies) {
      console.log(`Assertion failed: ${dataArray} !== ${expectedOutput}`);

      return null;
    }
  }

  console.log(`Assertion Passed: ${dataArray} === ${expectedOutput}`);
};

module.exports = tail;

