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
		"animal21.jpeg", 
		"animal22.jpeg", 
		"animal23.jpeg",
		"animal24.jpeg", 
		"animal25.jpeg", 
		"animal26.jpeg", 
		"animal27.jpeg", 
		"animal28.jpeg", 
		"animal29.jpeg",
		"animal30.jpeg",  
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
		"food1.jpeg",
		"food2.jpeg",
		"food3.jpeg",
		"food4.jpeg",
		"food5.jpeg",
		"food6.jpeg",
		"food7.jpeg",
		"food8.jpeg",
		"food9.jpeg",
		"food10.jpeg",
		"food11.jpeg",
		"food12.jpeg",
		"food13.jpeg",
		"food14.jpeg",
		"food15.jpeg",
		"food16.jpeg",
		"food17.jpeg",
		"food18.jpeg",
		"food19.jpeg",
		"food20.jpeg",
		"food21.jpeg",
		"food22.jpeg",
		"food23.jpeg",
		"food24.jpeg",
		"food25.jpeg",
		"food26.jpeg",
		"food27.jpeg",
		"food28.jpeg",
		"food29.jpeg",
		"food30.jpeg",
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
			var imageSrc = 'img/food/' + getRandomFoodImg();
			$('body').append('<img src="'+imageSrc+'">');
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

	function getRandomFoodImg(){
		var num = Math.floor( Math.random() * foodImg.length );
		var img = foodImg[ num ];
		console.log(img);
		return img;
	}
	
});