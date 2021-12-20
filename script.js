(function (window) {
  var speakWord2 = "Goodbye ";
  var speakWord1 = "Hello ";
  var greetings = {};
  greetings.names = ["Yaakov", "John", "Jen", "Jason", "Paul",
  "Frank", "Larry", "Paula", "Laura", "Jim"];
  greetings.speak = function () {
 for (var i = 0; i < greetings.names.length; i++) {

  var firstLetter = greetings.names[i].charAt(0);
  if (firstLetter === "J") {
    console.log(speakWord2+greetings.names[i]);
   } 
   else {
     console.log(speakWord1+greetings.names[i]);
   }
}
}
window.greetings = greetings;
})(window);
greetings.speak();