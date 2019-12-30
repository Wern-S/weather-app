import { displayWithMinutes } from '../maths/convert_time';
import { displayWeather } from './display_weather';
import { researchedWeather } from '../researched/researched_weather';

const geolocatedWeather = () => {

  document.querySelector('.ask-for-choice').style.display = 'none';
  document.querySelector('.researched').style.display = 'none';

  if (navigator.geolocation) {
    displayWeather();
  } else {
    //to implement when the user blocks his position
  };
  const goToResearch = document.querySelector('.go-to-research');
  goToResearch.innerHTML = 'Make a research';
  goToResearch.addEventListener('click', () => {
    researchedWeather();
  });
};

export { geolocatedWeather };
