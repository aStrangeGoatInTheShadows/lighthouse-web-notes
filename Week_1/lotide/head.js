const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const head = function(dataArray) {
  if (!dataArray) {
    return undefined;
  } else {
    return dataArray[0];
  }
};

module.exports = head;