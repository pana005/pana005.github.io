$(function(){
	var x = $(".b-1");
	var profImg = [
		"animal1.jpeg", 
		"animal2.jpeg", 
		"animal3.jpeg", 
		"animal4.jpeg", 
		"animal5.jpeg", 
		"animal6.jpeg",
		"animal7.jpeg", 
		"animal8.jpeg", 
		"animal9.jpeg", 
		"animal10.jpeg", 
		"animal11.jpeg", 
		"animal12.jpeg",
		"animal13.jpeg", 
		"animal14.jpeg", 
		"animal15.jpeg", 
		"animal16.jpeg", 
		"animal17.jpeg", 
		"animal18.jpeg",
		"animal19.jpeg", 
		"animal20.jpeg", 
		];
	var patImg = [
		"pat1.jpeg",
		"pat2.jpeg",
		"pat3.jpeg",
		"pat4.jpeg",
		"pat5.jpeg",
		"pat6.jpeg",
		"pat7.jpeg",
		"pat8.jpeg",
		"pat9.jpeg",
		"pat10.jpeg",
		"pat11.jpeg",
		"pat12.jpeg",
		"pat13.jpeg",
		"pat14.jpeg",
		"pat15.jpeg",
		"pat16.jpeg",
		"pat17.jpeg",
		"pat18.jpeg",
		"pat19.jpeg",
		"pat20.jpeg",
	];

	var eventImg = [
		"event1.jpeg",
		"event2.jpeg",
		"event3.jpeg",
		"event4.jpeg",
		"event5.jpeg",
		"event6.jpeg",
		"event7.jpeg",
		"event8.jpeg",
		"event9.jpeg",
		"event10.jpeg",
		"event11.jpeg",
		"event12.jpeg",
		"event13.jpeg",
		"event14.jpeg",
		"event15.jpeg",
		"event16.jpeg",
	];

	var foodImg =[

	];
	$('.reset').click(function(){
		window.location.replace("http://pana005.github.io/projects/api/index.html");
	});
	$('.option-button').click(function() {
		var value = $('.option-selector').val();

		if ( value == 'Animal' ) {
			var imageSrc = 'img/profile/' + getRandomProfImg();
			$('body').append('<img src="'+imageSrc+'">');
		} else if ( value == 'Pattern' ) {
			// Add a text boxvar imageSrc = 'img/profile/' + getRandomProfImg();
			var imageSrc = 'img/pat/' + getRandomPatImg();
			$('body').append('<img src="'+imageSrc+'">');
		}else if ( value == 'Event' ) {
			// Add a text box
			var imageSrc = 'img/events/' + getRandomEventImg();
			$('body').append('<img src="'+imageSrc+'">');
		}else if ( value == 'Food' ) {
			// Add a text box
			$('body').append('.header');
		}
	});

	function getRandomProfImg(){
		var num = Math.floor( Math.random() * profImg.length );
		var img = profImg[ num ];
		console.log(img);
		return img;
	}

	$(".b-1").click(function() {
		for (var i = 2; i >= 0; i--) {
			var imageSrc = 'img/profile/' + getRandomProfImg();
			$(".block1 img").eq(i).attr('src', imageSrc);
		}
	});

	function getRandomPatImg(){
		var num = Math.floor( Math.random() * patImg.length );
		var img = patImg[ num ];
		console.log(img);
		return img;
	}

	$(".b-2").click(function() {
		for (var i = 2; i >= 0; i--) {
			var imageSrc = 'img/pat/' + getRandomPatImg();
			$(".block2 img").eq(i).attr('src', imageSrc);
		}
	});

	function getRandomEventImg(){
		var num = Math.floor( Math.random() * eventImg.length );
		var img = eventImg[ num ];
		console.log(img);
		return img;
	}

	$(".b-3").click(function() {
		for (var i = 2; i >= 0; i--) {
			var imageSrc = 'img/events/' + getRandomEventImg();
			$(".block3 img").eq(i).attr('src', imageSrc);
		}
	});
	
});