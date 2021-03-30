const timesToRoll = process.argv.splice(2, process.argv.length);

let rollDice = function(timesToRoll) {
  let rolls = [];

  for (let i = 0; i < timesToRoll; i++) {
    rolls.push(Math.floor(Math.random() * 7));
  }

  return `Rolled ${timesToRoll} dice: ${rolls}`;
};

console.log(rollDice(timesToRoll));