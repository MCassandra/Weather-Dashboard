var searchBtn = document.getElementById("search");

function getWeather(){
    var weatherUrl ="https://api.openweathermap.org/data/2.5/weather?q=lakewood&units=imperial&appid=11dc52a95fa797bda83ead455ac98597";
    fetch(weatherUrl)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      })

    };



searchBtn.addEventListener("click",getWeather)




