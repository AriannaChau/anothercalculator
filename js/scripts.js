// Business or Back End logic

var add = function(number1, number2) {
   return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

//Everything from here down is the UI or Front End logic

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    console.log("1st number: " + number1);
    console.log("2nd number: " + number2);
    console.log("operator: " + operator);
    var result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
    $("#output").text(result);
    event.preventDefault();
  });
  // $("form#subtract").submit(function(event) {
  //   var number1 = parseInt($("#subtract1").val());
  //   var number2 = parseInt($("#subtract2").val());
  //   var result = (subtract(number1, number2));
  //   $("#output-subtract").text(result);
  //   event.preventDefault();
  // });
  // $("form#multiply").submit(function(event) {
  //   var number1 = parseInt($("#multiply1").val());
  //   var number2 = parseInt($("#multiply2").val());
  //   var result = (multiply(number1, number2));
  //   $("#output-multiply").text(result);
  //   event.preventDefault();
  // });
  // $("form#divide").submit(function(event) {
  //   var number1 = parseInt($("#divide1").val());
  //   var number2 = parseInt($("#divide2").val());
  //   var result = (divide(number1, number2));
  //   $("#output-divide").text(result);
  //   event.preventDefault();
  // });
});
