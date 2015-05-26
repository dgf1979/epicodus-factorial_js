"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
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
