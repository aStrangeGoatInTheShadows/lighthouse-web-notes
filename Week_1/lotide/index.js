// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const assertEqual = require('./assertEqual');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');


module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays : eqArrays,
  eqObjects: eqObjects,
  assertEqual: assertEqual,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten : flatten

};