let text = document.querySelector("input");
let btn = document.getElementById("btn");
let weather = document.getElementById("weather");
let loc = document.getElementById("location");
let speed = document.getElementById("speed");
let temp = document.getElementById("temp");
let minmax = document.getElementById("minmax");
let time = document.getElementById("time");
let body = document.querySelector("body");
start();
function start() {
  getweather("kathmandu");
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let input = text.value;
  getweather(input);
  text.value = "";
});
function getweather(input) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=2ecb730b54cc0e1000d571b42c1733b9`
  )
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      let txt = data.weather[0].description;
      weather.innerHTML = txt;
      txt = data.sys.country;
      loc.innerHTML = input.toUpperCase() + "," + txt;
      txt = data.wind.speed;
      speed.innerHTML = txt + " km/hr ";
      txt = parseInt(data.main.temp - 273);
      temp.innerHTML = txt + "°C";
      txt = parseInt(data.main.temp_min - 273);
      let txt2 = parseInt(data.main.temp_max - 273);
      minmax.innerHTML = txt + "°C(min) | " + txt2 + "°C(max)";

      const str = weather.innerHTML;
      console.log(str);

    })
    .catch((err) => {
      console.log(err.message);
    });
}