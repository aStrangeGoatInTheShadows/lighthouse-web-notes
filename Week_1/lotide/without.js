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

module.exports = without;

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);


// //console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));

// assertEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);