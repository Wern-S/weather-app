import { displayWithMinutes } from './convert-time'

const getCurrentGeoLoc = () => {

  let long;
  let lat;
  const skycons = new Skycons({color: 'white'});
  const weatherTemperature = document.querySelector('.weather-temperature');
  const weatherWind = document.querySelector('.weather-wind');
  const descriptionLocation = document.querySelector('.description-location');
  const descriptionSummary = document.querySelector('.description-summary');
  const descriptionIcon = document.querySelector('.description-icon');
  const nextHours = document.querySelector('#next-hours');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const apiDarksky = `${proxy}https://api.darksky.net/forecast/8e46bf12c6bd6767fac8dc7f888d7344/${lat}, ${long}`;
      const apiMapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=pk.eyJ1Ijoid2VybmRldiIsImEiOiJjazJvazJtZnUweXNzM2xueDU1OHV6Z29kIn0.JBGGtNKwtwftgeZqqoNu_g`;

      fetch(apiMapbox)
      .then(response => {
        return response.json()
      })
      .then(data => {
        descriptionLocation.innerHTML = data.features[2].place_name;
      });


      fetch(apiDarksky)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);

        skycons.add(document.getElementById("icon"), data.currently.icon);
        skycons.play();

        descriptionSummary.innerHTML = data.hourly.summary;

        const {temperature, windSpeed} = data.currently;
        weatherTemperature.innerHTML = ((temperature - 32) * (5/9)).toFixed(2) + ' ° C';
        weatherWind.innerHTML = (windSpeed * 1.61).toFixed(2) + ' km/h';

        const currentTime = Date(data.currently.time);
        displayWithMinutes(currentTime);

        weatherWind.addEventListener('click', () => {
          if (weatherWind.innerHTML == (windSpeed * 1.61).toFixed(2) + ' km/h') {
            weatherWind.innerHTML = (windSpeed * 0.869).toFixed(2) + ' nds'
          } else {
            weatherWind.innerHTML = (windSpeed * 1.61).toFixed(2) + ' km/h'
          };
        });

        data.hourly.data.slice(0, 8).forEach(hours => {
          console.log(hours);
          const hour = new Date(hours.time * 1000).getHours() + ':00';
          const temperature = Math.round(((hours.temperature)- 32) * (5/9)).toFixed(0);
          skycons.add(document.querySelector(".small-icon"), hours.icon);
          skycons.play();
          nextHours.insertAdjacentHTML('beforebegin', `<li>
                                                       ${hour} -->
                                                       ${temperature} °C
                                                       <canvas class="small-icon" width="24" height="24"></canvas>
                                                       </li>`)
        });

      });
    });
  } else {
    //to implement when user blocks his position
  }

};

export { getCurrentGeoLoc };
