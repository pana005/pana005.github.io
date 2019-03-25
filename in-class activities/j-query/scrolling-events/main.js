$(function() {
  // Your interactions go here
	var documentHeight = $(document).height();
	var $elements = $('.sidebar > *, .page-content > *');

	$(window).on('scroll', function() {
  		var scrollTop = $(this).scrollTop();
  		var scaleFactor = ((scrollTop / documentHeight * 4) % 1.5) + 0.2;

  		console.log('scaleFactor', scaleFactor);
  	}
  	$elements.css({ transform: 'scale(' + scaleFactor + ')' });

});
