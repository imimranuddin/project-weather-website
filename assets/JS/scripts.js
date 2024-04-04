// Function to fetch weather information
async function weatherInfo(cityName) {

	// OpenWeatherMap API key
	var apiKey = "48393a5cd3529652f4c3b0ff5b9ab36b";

	// API URL with the city name and API key
	var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  // Fetch weather data from the API and give the response as JSON
	const weatherData = await fetch(`${url}`).then(response => response.json());

  // Update the weather information on the webpage
	document.querySelector('.temp-value').innerHTML = `${Math.round(weatherData.main.temp - 273.15)}&deg;C`;
	document.querySelector('.temp-info').innerHTML = (weatherData.weather[0].main);
	document.querySelector('.city-name').innerHTML = (weatherData.name);
	document.querySelector('.h-value').innerHTML = `${weatherData.main.humidity}%`;
	document.querySelector('.ws-value').innerHTML = `${weatherData.wind.speed}Km/h`;

// weather description image to display based on weather condition
	var tempInfo = (weatherData.weather[0].main);
	var weatherImg = document.querySelector('.weather-img');
	if (tempInfo == "Rain") {
			weatherImg.src = "./assets/images/rain.png";
	} else if (tempInfo == "Clear") {
			weatherImg.src = "./assets/images/clear.png";
	} else if (tempInfo == "Mist") {
			weatherImg.src = "./assets/images/mist.png";
	} else if (tempInfo == "Snow") {
			weatherImg.src = "./assets/images/snow.png";
	} else if (tempInfo == "Haze") {
			weatherImg.src = "./assets/images/haze.png";
	} else if (tempInfo == "Clouds") {
			weatherImg.src = "./assets/images/cloud.png";
	}
}

// Function to load default weather information for Kolkata when the page loads
window.onload = function() { weatherInfo("Kolkata"); };

// Event listener for the search button to fetch weather information for the input city
document.querySelector('#search-button').addEventListener('click', () => {
	weatherInfo(document.querySelector('.input-box').value);
});

