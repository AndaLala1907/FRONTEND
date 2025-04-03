const weatherData = [
  { city: 'New York', temperature: 16, humidity: 70, windSpeed: 7 },
  { city: 'London', temperature: 12, humidity: 80, windSpeed: 5 },
  { city: 'Tokyo', temperature: 22, humidity: 60, windSpeed: 4 },
  { city: 'Sydney', temperature: 25, humidity: 50, windSpeed: 6 },
  { city: 'Paris', temperature: 15, humidity: 65, windSpeed: 5 },
  { city: 'Berlin', temperature: 14, humidity: 60, windSpeed: 6 },
  { city: 'Moscow', temperature: 5, humidity: 75, windSpeed: 10 },
  { city: 'Toronto', temperature: 17, humidity: 55, windSpeed: 8 },
  { city: 'Rio de Janeiro', temperature: 26, humidity: 85, windSpeed: 7 },
  { city: 'Beijing', temperature: 20, humidity: 40, windSpeed: 3 },
  { city: 'Mumbai', temperature: 30, humidity: 70, windSpeed: 5 },
  { city: 'Los Angeles', temperature: 19, humidity: 65, windSpeed: 4 },
  { city: 'Cape Town', temperature: 18, humidity: 60, windSpeed: 6 },
  { city: 'Rome', temperature: 21, humidity: 55, windSpeed: 3 },
  { city: 'Bangkok', temperature: 33, humidity: 75, windSpeed: 2 },
  { city: 'Istanbul', temperature: 20, humidity: 60, windSpeed: 4 },
  { city: 'Lagos', temperature: 29, humidity: 80, windSpeed: 3 },
  { city: 'Buenos Aires', temperature: 23, humidity: 70, windSpeed: 5 },
  { city: 'Chicago', temperature: 10, humidity: 65, windSpeed: 7 },
  { city: 'Shanghai', temperature: 19, humidity: 80, windSpeed: 6 },
];

let recentSearches = [];

let displayedForecastCities = new Set(); 

// fetch and display weather data for a given city.
function fetchWeather(city) {
  const weather = weatherData.find(w => w.city.toLowerCase() === city.toLowerCase());
  if (weather) {
    displayCurrentWeather(weather);
  } else {
    alert("City not found");
    alert("City not found for forecast");
  }
  saveRecentSearch(city);
}

// Display current weather information.
function displayCurrentWeather(data) {
  const weatherDisplay = document.getElementById('weatherDisplay');
  weatherDisplay.innerHTML = `
    <h3>Current Weather for ${data.city}</h3>
    <p>Temperature: ${data.temperature}°C</p>
    <p>Humidity: ${data.humidity}%</p>
    <p>Wind Speed: ${data.windSpeed} km/h</p>
  `;
  
  // Fetch and display forecasdt if not already done for this city.
  if (!displayedForecastCities.has(data.city)) {
    fetchForecast(data.city);
    displayedForecastCities.add(data.city);
  }
}

// generate and display a 5-day forecast for a given city.
function fetchForecast(city) {
  const weather = weatherData.find(w => w.city.toLowerCase() === city.toLowerCase());
  if (weather) {
    const forecast = [];
    for (let i = 1; i <= 5; i++) {
      forecast.push({ day: i, temp: weather.temperature + i });
    }
    displayForecast(city, forecast);
  }
}

// display the 5-day forecast.
function displayForecast(city, forecast) {
  const weatherDisplay = document.getElementById('weatherDisplay');
  let forecastHTML = `<h4>5-Day Forecast for ${city}</h4>`;
  const ul = document.createElement('ul');
  ul.style.listStyle = 'none';
  ul.style.paddingLeft = '0';
  
  forecast.forEach(day => {
    const li = document.createElement('li');
    li.textContent = `Day ${day.day}: Temperature: ${day.temp}°C`;
    li.style.display = 'block';
    li.style.marginBottom = '5px';
    ul.appendChild(li);
  });

  weatherDisplay.innerHTML += forecastHTML;
  weatherDisplay.appendChild(ul);
}

// Save the city to recent searches. 
function saveRecentSearch(city) {
  if (!recentSearches.includes(city)) {
    recentSearches.push(city);
    if (recentSearches.length > 5) {
      recentSearches.shift();  
    }
  }
  displayRecentSearches();
}

// Display recent searches as buttons.
function displayRecentSearches() {
  const recentSearchesDiv = document.getElementById('recentSearches');
  recentSearchesDiv.innerHTML = '';
  
  const searchTable = document.createElement('div');
  searchTable.style.display = 'block'; 
  
  recentSearches.forEach(city => {
    const cityButton = document.createElement('button');
    cityButton.classList.add('form-control', 'border', 'rounded-0');
    cityButton.innerText = city;
    cityButton.style.textAlign = 'left'; // align text to the left

    cityButton.onclick = () => {
      fetchWeather(city);
    };
  
    searchTable.appendChild(cityButton);
  });
  
  recentSearchesDiv.appendChild(searchTable);
}

// Handle weather search based on user input.
function searchWeather() {
  const cityInput = document.getElementById('cityName').value;
  fetchWeather(cityInput);
  displayedForecastCities.clear(); // Clear the set to allow forecasts for new searches.
}

// Initialize recent searches display on page load
document.addEventListener('DOMContentLoaded', () => {
  displayRecentSearches();
  displayedForecastCities.clear(); 
});
