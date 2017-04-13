function alphabetPosition(text) {
  var alphaNums = [];
  var upperCase = text.toUpperCase().split("");
  upperCase.forEach(function(char){
    let current = char.charCodeAt(0);
    if( current > 64 && current < 91){
      alphaNums.push(current - 64);
    }
  });
  return alphaNums.join(" ");
}
