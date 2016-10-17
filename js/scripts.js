var original = function(sentence) {
  sentence = prompt("Please enter a sentence:");
  return sentence;
}

var firstLast = function(sentence, firstLetter, lastLetter) {
  sentence = original();
  firstLetter = sentence.charAt(0).toUpperCase();
  lastLetter = sentence.charAt(sentence.length - 1).toUpperCase();
  return firstLetter + lastLetter;
}

var lastToFirst = function(sentence) {
  return sentence.charAt(sentence.length - 1) + sentence.charAt(0);
}

var firstLastSwitch = function() {
  result = lastToFirst(firstLast());
  alert(result);
}


firstLastSwitch();
