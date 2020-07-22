$(document).ready(function(){
 
myNavDisplay = $('#nav').css('display');
console.log(myNavDisplay);
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " showHeader";
  } else {
    x.className = "topnav";
  }
}

});