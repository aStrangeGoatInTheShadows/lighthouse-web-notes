
// Returns all contents of an array up until the escape character or condition passed by callback
const takeUntil = (input, callBack) => {
  const output = [];

  for (const element of input) {
    if (!callBack(element)) {
      output.push(element);
    } else {
      return output;
    }
  }
}

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);