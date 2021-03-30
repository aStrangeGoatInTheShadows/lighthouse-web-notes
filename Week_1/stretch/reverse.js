const inputArray = process.argv;
const startOfArgs = 2;

let processString = function(inputString) {
  let reverseString = '';
  
  for (let i = inputString.length - 1; i >= 0; i--) {
    reverseString += inputString[i];
  }

  return reverseString;
};

let processArray = function(inputArray) {
  for (let i = startOfArgs; i < inputArray.length; i++) {
    console.log(processString(inputArray[i]));
  }
};

processArray(inputArray);


