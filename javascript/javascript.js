$(function(){
function show_Header() {
  my_header = document.getElementById('header');
  icon = document.getElementById('icon');
  closeMenu = document.getElementById('closeMenu');
 my_header_display = $('#header').css('display');
//  header_class = $('#header').attr('class');
  if (my_header_display === "none") {
    $('#header').addClass('activo');
    $('#header').css('display', 'table');
    $('#header').css('z-index', '1');
    $('#header').css('width', '50%');
    $('#header').css('top', '0');
    $('#closeMenu').css('display', 'table');
  } 
  else if($('#header').attr('class') === "activo") {
    $('#header').removeClass('activo');
    $('#header').css('display', 'none');
    console.log("no me muestro");
  }
};

icon.addEventListener('click', show_Header);
closeMenu.addEventListener('click', show_Header);


});