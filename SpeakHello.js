(function (window) {
  var helloSpeaker = {};
  helloSpeaker.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var speakWord1 = "Hello ";
  helloSpeaker.speak = function () {
for (var name in helloSpeaker.names) {

  console.log(speakWord1 + helloSpeaker.names[name]);
}
}
window.helloSpeaker = helloSpeaker;
})(window);
