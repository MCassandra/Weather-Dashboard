const apikey = "11dc52a95fa797bda83ead455ac98597";
const city = "los angeles";


//make the API call for searched city
async function getWeatherByCity(city){
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=imperial`;
  	const res = await fetch(url);
  	const json = await res.json();
  	const cityName = json.name;
  	handleStorage(cityName);
  	displayWeatherData(json);
}

// display the weather info
function displayWeatherData(json){
	console.log(json);
  	const lat = json.coord.lat;
  	const lon = json.coord.lon;
  	const description = json.weather[0].description;
  	const icon = json.weather[0].icon;
  	const imageSRC = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  	const img = document.createElement("img");
  	img.src = imageSRC;
  	document.body.append(img);
  	getForecastByLatLon(lat, lon);
}

// get lat and lon for forecast
async function getForecastByLatLon(lat, lon){
	const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apikey}`;
  	const res = await fetch(url);
  	const json = await res.json();
  	displayForecastData(json);
}

function displayForecastData(json){
	console.log(json);
  	const currentUVI = json.current.uvi;
}

function handleStorage(cityName){}
getWeatherByCity();




