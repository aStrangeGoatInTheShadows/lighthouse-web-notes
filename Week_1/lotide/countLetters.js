

const countLetters = function(stringToCount) {
  const results = {};

  stringToCount = stringToCount.toUpperCase();
  
  for (const letter of stringToCount) {
    if(results[letter]) {
      results[letter]++;
    } else {
      results[letter] = 1;
    }
  }

  console.log(results);

  return results;
}

console.log(countLetters('supercalifragilisticexpialidocious'));