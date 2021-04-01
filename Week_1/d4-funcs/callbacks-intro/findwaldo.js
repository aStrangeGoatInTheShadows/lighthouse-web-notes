// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  let waldosIndex = 0;

  names.forEach(function (namePassed, index) {
    if (namePassed === 'Waldo') {      
      waldosIndex = index;
    }
  });

  found(waldosIndex);
};

const actionWhenFound = function(index) {
  console.log(index);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);