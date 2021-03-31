const middle = function (arry) {
  let arryOfMiddle = [];
  
  if ( arry.length <= 2) {
    return [];
  } else if (arry.length % 2 === 0) {
    arryOfMiddle.push(arry[Math.floor(arry.length/2) - 1]);
  } 
    
  arryOfMiddle.push(arry[Math.floor(arry.length/2)]);
  

  return arryOfMiddle;
}

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

  for (let item of arrayToFlat) {
    if(item.length > 1){
      for(let subItem of item) {
        fltArray += subItem;
      }
    } else {
      fltArray += item;
    }
  }

  return fltArry;
}

console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3, 6, 9, 20, 30, 4, 5, 6]));

//console.log(flatten([1, 2, [3, 4], 5, [6]]) );

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS