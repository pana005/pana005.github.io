$(function() {
  // Your interactions go here
  $(".button").click(function(){
  	$(".box").removeClass("change");
  	$(".box").eq(Math.floor(Math.random()*5)).addClass("change");

  });
});
