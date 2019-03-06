var trianglemeasure = function (side1, side2,side3) {
  var side1= parseInt(document.getElementById('side1').value());
  var side2= parseInt(document.getElementById('side2').value());
  var side3 = parseInt(document.getElementById('side3').value());
  var side = {  side1;
                side2;
                side3;
  };


  if((side1+side2)<=side3)  ||  ((side2+side3)<=side1)  ||  ((side1+side3)<=side2) {
    return "not-triangle";
  } else if (side1 === side2 && side2 === side3){
    return "equilateral";
  } else if (side1 === side2 || side2 === side3 || side3 === side1) {
    return "isosceles";
  } else if(side1 != side2 && side2 != side3 && side1 != side3) {
    return "scalene";
  }
});



$(document).ready(function()  {
  $("form#trianglemeasure").submit(function(event)  {


   side1=parseInt($("input#side1").value());
   side2=parseInt($("input#side2").value());
   side3=parseInt($("input#side3").value());
   var result = trianglemeasure(side1, side2, side3);
  if(result === "not-triangle") {
   $("#not-triangle").show();
 } else if (result === equilateral) {
    $("#equilateral").show();
  } else if (result === "isosceles") {
    $("#isosceles").show();
  } else if (result === "scalene") {
    $("#scalene").show();
  }
  $("#result").append();
  event.preventDefault();

  });
});
