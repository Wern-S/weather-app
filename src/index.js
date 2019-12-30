import { geolocatedWeather } from './javascript/geolocalized/geolocated_weather.js';
import { researchedWeather } from './javascript/researched/researched_weather.js';

document.querySelector('.display-geoloc').innerHTML = "How is it here?";
document.querySelector('.display-researched').innerHTML = "Search for a spot";


document.querySelector('.display-geoloc').addEventListener('click', () => {
  geolocatedWeather();
});

document.querySelector('.display-researched').addEventListener('click', () => {
  researchedWeather();
});
