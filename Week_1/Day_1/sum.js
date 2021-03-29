const args = process.argv;

const sum = function () {
  return args[2] * args[3];
};

console.log(sum);