import { convertTime } from '../maths/convert_time'

const displayWeather = () => {

const weatherTemperature  = document.querySelector('.weather-temperature');
const weatherWind         = document.querySelector('.weather-wind');
const descriptionLocation = document.querySelector('.description-location');
const descriptionSummary  = document.querySelector('.description-summary');
const descriptionIcon     = document.querySelector('.description-icon');
const comingWeather       = document.querySelector('.coming-weather');
const nextHours           = document.querySelector('.next-hours');

  // gets user position;
  navigator.geolocation.getCurrentPosition(position => {
    const long       = position.coords.longitude;
    const lat        = position.coords.latitude;
    const proxy      = 'https://cors-anywhere.herokuapp.com/';
    const apiDarksky = `${proxy}https://api.darksky.net/forecast/8e46bf12c6bd6767fac8dc7f888d7344/${lat},${long}`;
    const apiMapbox  = `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=pk.eyJ1Ijoid2VybmRldiIsImEiOiJjazJvazJtZnUweXNzM2xueDU1OHV6Z29kIn0.JBGGtNKwtwftgeZqqoNu_g`;


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
      console.log(data);
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

      comingWeather.innerHTML = 'Should I go sailing?';
      comingWeather.addEventListener('click', () => {

        if (comingWeather.innerHTML === 'Should I go sailing?') {
          data.hourly.data.slice(0, 6).forEach(hours => {
            const hour = new Date(hours.time * 1000).getHours() + ':00';
            const precipitation = hours.precipProbability;
            const wind = (hours.windSpeed * 0.869).toFixed(2);
            comingWeather.insertAdjacentHTML('beforeend', `<li>
                                                          At ${hour}, chances of rain
                                                          are about ${precipitation}% for
                                                          ${wind} nds.
                                                         </li>`)
            document.querySelector('.go-to-research').style.display = 'none';
          });
        } else {
          comingWeather.innerHTML = 'Should I go sailing?';
          document.querySelector('.go-to-research').style.display = 'flex';
        };
      })
    });
  });
}

export { displayWeather };
