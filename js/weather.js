const API_KEY = 'e27d899860319a33dd32d6288e7717d6';
const COORDS = 'coords';
const weatherInfo = document.querySelector('.weatherInfo');
const weatherIconImg = document.querySelector('.weatherIcon');

function init() {
  askForCoords();
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleSucess, handleError);
}

function handleSucess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  getWeather(lat, lon);
}
function handleError() {
  console.log("can't not access to location");
}

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      const weatherDescription = json.weather[0].description;
      const weatherIcon = json.weather[0].icon;

      weatherInfo.innerText = `${temperature} °C / ${place} / ${weatherDescription}`;
      weatherIconImg.innerHTML = `<img src='http://openweathermap.org/img/wn/${weatherIcon}@2x.png' class='w-img'>`;
    })
    .catch((error) => console.log('error:', error));
}

init();
