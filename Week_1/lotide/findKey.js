
const findKey = (objectToSearch, cb) => {
  keysOfObj = Object.keys(objectToSearch);

  for (const key in objectToSearch) {
    if(cb(objectToSearch[key])) {
      return key;
    }
  }
}

module.exports = findKey;
