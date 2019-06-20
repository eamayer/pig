
var translator = function(english) {


    if (english.startsWith("a")) {
    return english.toUpperCase();

  } else if (english.includes("s")){
    return english + "ay";

  }
  else {
      return english;
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
