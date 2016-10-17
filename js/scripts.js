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

var firstLastSwitch = function() {
  var sentence = original();
  var process1 = firstLast(sentence);
  var process2 = lastToFirst(process1);
  alert(sentence + process2);

}



firstLastSwitch();
