const raisinAlarm = function(cookie) {
  const foe = "🍇";

  for(const chipOrFoe of cookie) {

    if (chipOrFoe === foe){
      return "Raisin Alert!"
    } 
  }
  return "All Good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));