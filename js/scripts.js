var original = function(sentence) {
  sentence = prompt("Please enter a sentence:");
  return sentence;
}

var firstLast = function(sentence) {
  firstLetter = sentence.charAt(0).toUpperCase();
  lastLetter = sentence.charAt(sentence.length - 1).toUpperCase();
  return firstLetter + lastLetter;
}

var lastToFirst = function(sentence) {
  return sentence.charAt(sentence.length - 1) + sentence.charAt(0);
}

var originalSentence;

var firstLastSwitch = function() {
  var originalSentence = original();
  var process1 = firstLast(originalSentence);
  var process2 = lastToFirst(process1);
  alert(originalSentence + process2);
}





firstLastSwitch();
