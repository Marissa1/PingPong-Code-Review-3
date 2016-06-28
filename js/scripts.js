$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var enteredNumber = parseInt($("input#enteredNumber").val());
    var result = divisible(enteredNumber);
    $("#result").text(result);
  });
});


var divisible = function(enteredNumber) {
  return .......???????;
};

// jQuery user interface logic here.
