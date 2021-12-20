(function (window) {
  var byeSpeaker = {};
  byeSpeaker.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var speakWord2 = "Good Bye ";
  byeSpeaker.speak = function () {
for (var name in byeSpeaker.names) {

  console.log(speakWord2 + byeSpeaker.names[name]);
}
}
window.byeSpeaker = byeSpeaker;
})(window);
