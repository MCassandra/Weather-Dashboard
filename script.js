var searchBtn = document.getElementById("search");
var apikey = "11dc52a95fa797bda83ead455ac98597";

// function displayWeather(data) {
//   console.log(data)
//   var cityName = document.getElementById("city").value;
//   console.log(cityName);
//   // cityName = data.name;
// };

//make the API call for searched city
function getWeather(cityName) {
  console.log(cityName);
  var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + "bellflower" + "&units=imperial&appid=" + apikey
  fetch(weatherUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    // console.log(data); displayWeather(data)
  })
};

// ask for user input
function getUserInput(event){
  event.preventDefault();
  var cityName=document.querySelector("userInput").value;
  getWeather(cityName);
}


searchBtn.addEventListener("click", getWeather)




