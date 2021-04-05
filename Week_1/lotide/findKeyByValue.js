
const findKeyByValue = function(anObj, valueToFind) {
  const allKeys = Object.keys(anObj);

  for (const aKey of allKeys) {
    if (anObj[aKey] === valueToFind) {
      return aKey;
    }
  }
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);