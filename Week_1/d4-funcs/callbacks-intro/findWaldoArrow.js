// The second argument/parameter is expected to be a (callback) function
const findWaldo = (names, cd) => cd(names.indexOf('Waldo'));

findWaldo(["Alice", "Bob", "Waldo", "Winston"], index => console.log(`We found waldo at ${index}`));