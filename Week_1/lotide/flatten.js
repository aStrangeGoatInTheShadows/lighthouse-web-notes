
const flatten = function (arrayToFlat) {
  let fltArry = [];

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

//console.log(flatten([1, 2, [3, 4], 5, [6]]) );

module.exports = flatten;

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS