function displayDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return `${day} ${hours}:${minutes}`;
}
let now = new Date();
let date = now.getDate();

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed * 3.6);
  descriptionElement.innerHTML = response.data.condition.description;
  dateElement.innerHTML = displayDate(response.data.time * 1000);
  iconElement.setAttribute("src", response.data.condition.icon_url);
  iconElement.setAttribute("alt", response.data.condition.description);
  document.getElementById("firstIcon").src=response.data.daily[1].condition.icon_url;
document.getElementById("secondIcon").src=response.data.daily[2].condition.icon_url;
document.getElementById("thirdIcon").src=response.data.daily[3].condition.icon_url;
document.getElementById("fourthIcon").src=response.data.daily[4].condition.icon_url;
document.querySelector("#first-max-temp").innerHTML = `${Math.round(response.data.daily[1].temperature.maximum)}°`;
document.querySelector("#second-max-temp").innerHTML = `${Math.round(response.data.daily[2].temperature.maximum)}°`;
document.querySelector("#third-max-temp").innerHTML = `${Math.round(response.data.daily[3].temperature.maximum)}°`;
document.querySelector("#fourth-max-temp").innerHTML = `${Math.round(response.data.daily[4].temperature.maximum)}°`;
document.querySelector("#first-min-temp").innerHTML = `${Math.round(response.data.daily[1].temperature.minimum)}°`;
document.querySelector("#second-min-temp").innerHTML = `${Math.round(response.data.daily[2].temperature.minimum)}°`;
document.querySelector("#third-min-temp").innerHTML = `${Math.round(response.data.daily[3].temperature.minimum)}°`;
document.querySelector("#fourth-min-temp").innerHTML = `${Math.round(response.data.daily[4].temperature.minimum)}°`;
   
}
function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  searchCity(cityInput.value);
}

function searchCity(city) {
  let apiKey = "63be9728daco4ft8f0e4444c9080c641";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
searchCity("New York");