$(function() {
  // Your interactions go here
  $( ".hide" ).click(function() {
   $(".block1").hide();
   $(".hide").hide();
   $(".hide2").show();
  });
  $( ".hide2" ).click(function() {
   $(".block1-2").hide();
   $(".reset").show();
   $(".hide2").hide();
  });
  $( ".reset" ).click(function() {
   $(".block1").show();
   $(".block1-2").show();
   $(".hide").show();
   $(".reset").hide();
  });
 
  
});
