var searchBtn = document.getElementById("search");
var apikey = "11dc52a95fa797bda83ead455ac98597";

function displayWeather(data) {
  console.log(data)
  var cityName = document.getElementById("city").value;
  cityName = data.name;
};

function getWeather(cityName) {
  console.log(cityName);
  var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + "bellflower" + "&units=imperial&appid=" + apikey
  fetch(weatherUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data); displayWeather(data)
  })
};





searchBtn.addEventListener("click", getWeather)




