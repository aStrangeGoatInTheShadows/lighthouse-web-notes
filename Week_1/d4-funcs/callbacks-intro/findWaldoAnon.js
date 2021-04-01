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

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`We found waldo at ${index}`);
});
