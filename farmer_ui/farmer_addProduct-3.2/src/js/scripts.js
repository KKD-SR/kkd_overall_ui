$(function(){

//$(".dropdown-menu a").click(function(){

//   $(".btn btn-primary dropdown-toggle").text($(this).text());
//   $(".btn btn-primary dropdown-toggle").val($(this).text());
  $(".dropdown-menu").on('click', 'a', function(){
    $(".btn:first-child").text($(this).text());
    $(".btn:first-child").val($(this).text());

});

});