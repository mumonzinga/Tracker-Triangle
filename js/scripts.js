var side1;
var side2;
var side3;

$(document).ready(function() {
  $("form#trianglemeasure").submit(function(event)  {
   side1=parseInt($("input#side1").value());
   side2=parseInt($("input#side2").value());
   side3=parseInt($("input#side3").value());

  if((side1+side2)<=side3)  ||  ((side2+side3)<=side1)  ||  ((side1+side3)<=side2) {
    $('.answer').hide();
    $('#not-triangle').show();
  } else if (side1 === side2 && side2 === side3){
    $('answer').hide();
    $('#equilateral').show();
  } else if (side1 === side2 || side2 === side3 || side3 === side1) {
    $('.answer').hide();
    $('#isosceles').show();
  } else if(side1 != side2 && side2 != side3 && side1 != side3) {
    $('.answer').hide();
    $('#scalene').show();
  }
  event.preventDefault ();;
  });
});
