$(function(){
	var x = document.getElementsByTagName(".b-1");
	var profImg = [
		"animal1.jpg", 
		"animal2.jpg", 
		"animal3.jpg", 
		"animal4.jpg", 
		"animal5.jpg", 
		"animal6.jpg"
		];

	function getRandomImg(){
		var num = Math.floor( Math.random() * profImg.length );
		var img = profImg[ num ];
		console.log(img);
	}

	x.onclick = function getRandomImag(){
		var num = Math.floor( Math.random() * profImg.length );
		var img = profImg[ num ];
		console.log(img);
	};

	
});