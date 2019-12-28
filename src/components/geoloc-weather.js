import { getCurrentGeoLoc } from './get-current-geoloc';

const geoLocatedWeather = () => {

  window.addEventListener('load', () => {
    getCurrentGeoLoc();
  });

};

export { geoLocatedWeather };
