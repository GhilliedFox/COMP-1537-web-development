let history = [];
hider = "<button class='del-button'> Remove this </button>";

add = function () {
  num1 = parseInt(jQuery("#firstvalue").val());
  num2 = parseInt(jQuery("#secondvalue").val());
  value = num1 + num2;
  expression = num1 + " + " + num2 + " = " + value;
  console.log(value);
  jQuery("#num1").html(num1);
  jQuery("#num2").html(num2);
  jQuery("#output").html(expression);
  jQuery(".history").append("<br>" + "<span>" + expression + hider + "</span>");
};

subtract = function () {
  num1 = parseInt(jQuery("#firstvalue").val());
  num2 = parseInt(jQuery("#secondvalue").val());
  value = num1 - num2;
  expression = num1 + " - " + num2 + " = " + value;
  console.log(value);
  jQuery("#num1").html(num1);
  jQuery("#num2").html(num2);
  jQuery("#output").html(expression);
  jQuery(".history").append("<br>" + "<span>" + expression + hider + "</span>");
};

multiply = function () {
  num1 = parseInt(jQuery("#firstvalue").val());
  num2 = parseInt(jQuery("#secondvalue").val());
  value = num1 * num2;
  expression = num1 + " * " + num2 + " = " + value;
  console.log(value);
  jQuery("#num1").html(num1);
  jQuery("#num2").html(num2);
  jQuery("#output").html(expression);
  jQuery(".history").append("<br>" + "<span>" + expression + hider + "</span>");
};

divide = function () {
  num1 = parseInt(jQuery("#firstvalue").val());
  num2 = parseInt(jQuery("#secondvalue").val());
  value = num1 / num2;
  expression = num1 + " / " + num2 + " = " + value;
  console.log(value);
  jQuery("#num1").html(num1);
  jQuery("#num2").html(num2);
  jQuery("#output").html(expression);
  jQuery(".history").append("<br>" + "<span>" + expression + hider + "</span>");
};
increase = function () {
  test = parseInt($(".history").css("font-size"));
  console.log(test);
  $(".history").css("font-size", test + 10 + "px");
};
decrease = function () {
  test = parseInt($(".history").css("font-size"));
  console.log(test);
  $(".history").css("font-size", test - 10 + "px");
};

function hide() {
  $(this).parent().remove();
}
function setup() {
  jQuery("#add").click(add);
  jQuery("#subtract").click(subtract);
  jQuery("#multiply").click(multiply);
  jQuery("#divide").click(divide);
  jQuery("#increase").click(increase);
  jQuery("#decrease").click(decrease);
  $("body").on("click", ".del-button", hide);
}
jQuery(document).ready(setup);
