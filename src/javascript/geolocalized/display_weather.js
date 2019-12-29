import { convertTime } from '../maths/convert_time'

const displayWeather = () => {

let long;
let lat;
const weatherTemperature = document.querySelector('.weather-temperature');
const weatherWind = document.querySelector('.weather-wind');
const descriptionLocation = document.querySelector('.description-location');
const descriptionSummary = document.querySelector('.description-summary');
const descriptionIcon = document.querySelector('.description-icon');
const comingWeather = document.querySelector('.coming-weather');
const nextHours = document.querySelector('#next-hours');
  // gets user position;
  navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const apiDarksky = `${proxy}https://api.darksky.net/forecast/8e46bf12c6bd6767fac8dc7f888d7344/${lat},${long}`;
    const apiMapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=pk.eyJ1Ijoid2VybmRldiIsImEiOiJjazJvazJtZnUweXNzM2xueDU1OHV6Z29kIn0.JBGGtNKwtwftgeZqqoNu_g`;


    // fetch user current city using MapBox API and display it;
    fetch(apiMapbox)
    .then(response => {
      return response.json()
    })
    .then(data => {
      descriptionLocation.innerHTML = data.features[2].place_name
    });

    // fetch current weather information using Darksky API and display it;
    fetch(apiDarksky)
    .then(response => {
      return response.json()
    })

    .then(data => {
      const skycons = new Skycons({color: 'white'});
      skycons.add(document.getElementById("icon"), data.currently.icon);
      skycons.play();

      descriptionSummary.innerHTML = data.hourly.summary;

      const {temperature, windSpeed} = data.currently;
      weatherTemperature.innerHTML = ((temperature - 32) * (5/9)).toFixed(2) + ' ° C';
      weatherWind.innerHTML = (windSpeed * 1.61).toFixed(2) + ' km/h';

      const currentTime = Date(data.currently.time);
      convertTime(currentTime);

      // changes wind unit on user click;
      weatherWind.addEventListener('click', () => {
        if (weatherWind.innerHTML == (windSpeed * 1.61).toFixed(2) + ' km/h') {
          weatherWind.innerHTML = (windSpeed * 0.869).toFixed(2) + ' nds'
        } else {
          weatherWind.innerHTML = (windSpeed * 1.61).toFixed(2) + ' km/h'
        };
      });
      //import futureWeather() when finished;

    });
  });
}

export { displayWeather };
