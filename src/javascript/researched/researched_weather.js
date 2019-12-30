import { geolocatedWeather } from '../geolocalized/geolocated_weather'

const researchedWeather = () => {

  document.querySelector('.ask-for-choice').style.display = 'none';
  document.querySelector('.researched').style.display = 'flex';
  document.querySelector('.geolocalized').classList.add('hide');
  const researched = document.querySelector('.researched');
  researched.innerHTML = 'Will be available soon! Click me to know your current weather 😃';
  researched.addEventListener('click', () => {
    document.querySelector('.geolocalized').classList.remove('hide');
    geolocatedWeather();
  })
};

export { researchedWeather };
