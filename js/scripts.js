
var translator = function(english) {
var vowel = /[aeiou]/

    if (english.slice(0,1).match(vowel)) {
    return english + "ay";

  } else if (english.includes("s")){
    return english + "at";

  }
  else {
      return false;
    }

};



$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var english = $("input#english").val();
    var output = translator(english);

    $("#output").text(output);
  });
});
