
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


const letterPositions = function(sentence) {
  const results = {};

  sentence = sentence.toUpperCase();
  
  for (const letter of sentence) {
    if(results[letter]) {
      results[letter].push(sentence.indexOf(letter));
    } else {
      results[letter] = [sentence.indexOf(letter)];
    }
  }
  
  return results;
};

console.log(letterPositions('hello'));
