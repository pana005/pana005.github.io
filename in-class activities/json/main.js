$(function(){
	console.log('hello!');
	var url="http://api.openweathermap.org/data/2.5/weather?q=Taiwan&appid=554394d32f1b0c033e0664399caaae42"

	$.get(url, function(data) {
	  // The get request fires a callback function when the API request finishes
	  console.log(data);
	  // The data object contains all the information returned in the API
	  var weather = data.weather[0];
	  // In this case, the most interesting bit of data is in the weather key
	  // Now do something interesting with the data!
	  $('body').html('The weather is ' + weather.description);

	  var temp= data.main.temp;
	  var cel= temp - 273.15;

	  var rbgTemp= cel;

	  console.log('celsius', cel);
	  console.log('rgbTemp', rbgTemp);

	  //$('html').css('background-color', "rgb("+rgbTemp+",200,1)");
        
        var r1 = 255;
        var g1 = cel;
        var b1 = cel;
        
        var bgColor="rgb("+r1+", "+g1+", "+b1+")";
        
        $('body').css('background-color',bgColor);
	});
});