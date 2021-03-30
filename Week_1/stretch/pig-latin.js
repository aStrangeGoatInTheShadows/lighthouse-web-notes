// A Simple script to make pig latin

const inputArray = process.argv;
const startOfArgs = 2;

let turnToPig = function(inputString) {
  return `${inputString.slice(1, inputString.length)}${inputString[0]}ay`;
};

let processArray = function(inputArray) {
  let pigString = '';
  
  for (let i = startOfArgs; i < inputArray.length; i++) {
    pigString += turnToPig(inputArray[i]) + ' ';
  }

  console.log(pigString);
};

processArray(inputArray);


