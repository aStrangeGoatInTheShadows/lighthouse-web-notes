
const letterPositions = function(sentence) {
  const results = {};

  sentence = sentence.toUpperCase();
  
  for (const letter of sentence) {
    if(results[letter]) {
      results[letter].push(sentence.indexOf(letter));
    } else {
      results[letter] = [sentence.indexOf(letter)];
    }
  }
  
  return results;
};

module.exports = letterPositions;

// console.log(letterPositions('hello'));
