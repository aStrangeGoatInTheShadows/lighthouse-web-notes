const obfuscate = function (commandInput) {
  if (commandInput.length < 2){
    return "I can't work with nothing.";
  }
  let usrPass = commandInput[2];
  let modPass = '';
  
  for (let chara of usrPass) {
    switch (chara) {
      case 'a' : modPass += '4';
        break;
      case 'e' : modPass += '3';
        break;
      case 'o' : modPass += '0';
        break;
      case 'l' : modPass += '1';
        break;
      default : modPass += chara
    }
  }
  return modPass;
}

console.log(obfuscate(process.argv));

