import { displayWithMinutes } from '../maths/convert_time';
import { displayWeather } from './display_weather';

const geolocatedWeather = () => {

  window.addEventListener('load', () => {
    if (navigator.geolocation) {
      displayWeather();
    } else {
      //to implement when the user blocks his position
    }
  });

};

export { geolocatedWeather };
