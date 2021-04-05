
const tail = function(dataArray) {
  let dataTail = [];

  if (!dataArray) {
    return undefined;
  }
  for (let i = 1; i <= dataArray.length - 1; i++) {
    dataTail.push(dataArray[i]);
  }

  return dataTail;
};

module.exports = tail;

