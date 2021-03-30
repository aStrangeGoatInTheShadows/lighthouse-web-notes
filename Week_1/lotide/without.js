const without = function (source, toRemove) {
  let newArray = source;
  
  for(let element of toRemove) {
    //console.log(element);
    for (let i = 0; i <= source.length; i++) {      
      if(newArray.indexOf(element) != -1) {
        newArray.splice(newArray.indexOf(element), 1);
      }
    }
  }
  return newArray;
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);


//console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

assertEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);