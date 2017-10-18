$(document).ready(function() {

  var capitalizeString = function(myString) {
    var newString = myString.toUpperCase();
    return newString + "!!!";
  }

  $("#formOne").submit(function(event) {
    event.preventDefault();
    var info = $("input#userInput").val();
    var output = capitalizeString(info);

    $("#output").text(output);

    $(".display").show();
  })
  
})
