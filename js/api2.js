function getWeather(input) {
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=2ecb730b54cc0e1000d571b42c1733b9`,
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      // Extract and display the weather information
      let weatherDescription = data.weather[0].description;
      $('#weather').html(weatherDescription);

      let country = data.sys.country;
      $('#loc').html(input.toUpperCase() + "," + country);

      let windSpeed = data.wind.speed;
      $('#speed').html(windSpeed + " km/hr");

      let tempCelsius = parseInt(data.main.temp - 273);
      $('#temp').html(tempCelsius + "°C");

      let tempMinCelsius = parseInt(data.main.temp_min - 273);
      let tempMaxCelsius = parseInt(data.main.temp_max - 273);
      $('#minmax').html(tempMinCelsius + "°C(min) | " + tempMaxCelsius + "°C(max)");

      // Log weather description to the console
      console.log(weatherDescription);
    },
    error: function(err) {
      console.log(err.message);
    }
  });
}
$(document).ready(function() {
  getWeather('Kathmandu');
});
