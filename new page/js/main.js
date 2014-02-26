$(document).ready(function(){

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  5000);

$(".readmore").click(function() {
    //need the following to toggle
    // $("#discover").css("visibility", "visible");
    $(this).hide();
    $(".addtltxt").slideDown('slow');
    $(".revert").show();
  });

$(".readmore2").click(function() {
    //need the following to toggle
    // $("#discover").css("visibility", "visible");
    $(this).hide();
    $(".addtltxt2").slideDown('slow');
    $(".revert2").show();
});

$(".revert").click(function() {
    //need the following to toggle
    // $("#discover").css("visibility", "visible");
    $(this).hide();
    $(".addtltxt").slideUp('slow');
    $(".readmore").show();
  });

$(".revert2").click(function() {
    //need the following to toggle
    // $("#discover").css("visibility", "visible");
    $(this).hide();
    $(".addtltxt2").slideUp('slow');
    $(".readmore2").show();
  });




});