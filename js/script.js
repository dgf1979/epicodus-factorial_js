"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//form processing
$(document).ready(function() {
  $("#result").hide();
  $("form#factorial").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = factorial(number);

    $(".factorial").text(result);

    $("#result").show();
    event.preventDefault();
  });
});




//raw js
var foo = function(bar) {
  return false;
};

var factorial = function(number) {
  var result = number;
  if (number === 0) {
    return 1
  } else if (number < 0) {
    return "invalid number"
  } else {
    for (var i = number - 1; i > 0; i--) {
      result *= i;
    };
  }
  return result;
};
