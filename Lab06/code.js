let history = []

add = function(){
num1 = parseInt(jQuery("#firstvalue").val()) 
num2 = parseInt(jQuery("#secondvalue").val()) 
value = num1 + num2
expression = num1 + ' + ' + num2 + ' = ' + value 
console.log(value);
jQuery('#num1').html(num1);
jQuery('#num2').html(num2);
jQuery('#output').html(expression);
jQuery('.history').append("<br>"+expression);
}


subtract = function(){
num1 = parseInt(jQuery("#firstvalue").val()) 
num2 = parseInt(jQuery("#secondvalue").val())
value = num1 - num2
expression = num1 + ' - ' + num2 + ' = ' + value 
console.log(value);
jQuery('#num1').html(num1);
jQuery('#num2').html(num2);
jQuery('#output').html(expression);
jQuery('.history').append("<br>"+expression);
}

multiply = function(){
num1 = parseInt(jQuery("#firstvalue").val()) 
num2 = parseInt(jQuery("#secondvalue").val()) 
value = num1 * num2
expression = num1 + ' * ' + num2 + ' = ' + value 
console.log(value);
jQuery('#num1').html(num1);
jQuery('#num2').html(num2);
jQuery('#output').html(expression);
jQuery('.history').append("<br>"+expression);
}

divide = function(){
num1 = parseInt(jQuery("#firstvalue").val()) 
num2 = parseInt(jQuery("#secondvalue").val()) 
value = num1 / num2
expression = num1 + ' / ' + num2 + ' = ' + value 
console.log(value);
jQuery('#num1').html(num1);
jQuery('#num2').html(num2);
jQuery('#output').html(expression);
jQuery('.history').append("<br>"+expression);
}
increase = function(){
test = parseInt($('.history').css('font-size'))
console.log(test);
$('.history').css('font-size',test + 10 + 'px')
}
decrease = function(){
    test = parseInt($('.history').css('font-size'))
    console.log(test);
    $('.history').css('font-size',test - 10 + 'px')
    }


function setup() {
    jQuery('#add').click(add)
    jQuery('#subtract').click(subtract)
    jQuery('#multiply').click(multiply)
    jQuery('#divide').click(divide)
    jQuery('#increase').click(increase)
    jQuery('#decrease').click(decrease)
}

jQuery(document).ready(setup);
