function displayDate(timestamp){
  let date =new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10){
    hours=`0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10){
    minutes =`0${minutes}`;
  }
  let day = date.getDay();
  let days = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
  ];
  return `${day} ${hours}:${minutes}`;
}
let now= new Date();
let date = now.getDate();


function displayTemperature(response){
  let temperatureElement = document.querySelector("#temperature");
  let cityElement=document.querySelector("#city");
  let descriptionElement= document.querySelector("#description");
  let humidityElement=document.querySelector("#humidity");
  let windElement=document.querySelector("#wind");
  let dateElement=document.querySelector("#date");
  let iconElement=document.querySelector("#icon");
  temperatureElement.innerHTML= math.round(response.data.main.temp);
  cityElement.innerHTML= response.data.name;
  humidityElement.innerHTML= response.data.main.humidity;
  windElement.innerHTML=Math.round(response.data.main.wind.speed *3.6);
  descriptionElement.innerHTML= response.data.weather[0].description;
  dateElement.innerHTML = displayDate(response.data.dt *1000);
  iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  iconElement.setAttribute("alt", response.data.weather[0].description);
}
function search(event){
    event.preventDefault();
    let cityInput=document.getElementById("#city-input");
    let cityName=document.getElementById("city");
    cityName.innerHTML=cityInput.value;
    let apiKey="63be9728daco4ft8f0e4444c9080c641";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
}

let form = documen.querySelector("search-form");
form.addEvetListener("submit",search);
search("New York");