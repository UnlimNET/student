$( document ).ready(function() {
    var $getWeatherBtn = $('#getWeatherBtn');
    var $hideWeatherBtn = $('#hideWeatherBtn');
    var $city = $('#city');

    $getWeatherBtn.click(function() { 	
	    getWeather();
	});

	$hideWeatherBtn.click(function() {
		$getWeatherBtn.show();
		$hideWeatherBtn.hide();
		$city.hide('lightSpeedOut');
	});

	function getWeather() {
		$city.show();
		$.ajax({
	    	type:'get',
		    url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=484907&APPID=48e2eea04127dfd25cc4f863700757cd',             // указываем URL и
		    dataType: 'json',                     
		    success: function (data) { 
	             var cityName = data.city.name;
	             $city.empty().append('<div> ' + cityName + '</div>');
	             var temperature = (data.list[2].main.temp - 273).toFixed(0);
	             $city.append('<div> Средняя температура: ' + temperature + ' C </div>');
	             $getWeatherBtn.hide();
	             $city.addClass('fadeInDown');
	             $hideWeatherBtn.show();

		    }    
	 	});
	}
})