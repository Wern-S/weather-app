
        // comingWeather.innerHTML = 'Will I be cold?'

        // comingWeather.addEventListener('click', () => {
        //   if (comingWeather.innerHTML === 'Will I be cold?') {
        //     comingWeather.innerHTML = 'Will it be windy?';
        //     data.hourly.data.slice(0, 8).forEach(hours => {
        //       console.log(hours);
        //       const hour = new Date(hours.time * 1000).getHours() + ':00';
        //       const temperature = Math.round(((hours.temperature)- 32) * (5/9)).toFixed(0);
        //       skycons.add(document.querySelector(".small-icon"), hours.icon);
        //       skycons.play();
        //       comingWeather.insertAdjacentHTML('beforebegin', `<li>
        //                                                    ${hour} -->
        //                                                    ${temperature} °C
        //                                                    <canvas class="small-icon" width="24" height="24"></canvas>
        //                                                    </li>`)
        //     });
        //   } else {
        //     comingWeather.innerHTML = 'Will I be cold?';
        //     data.hourly.data.slice(0, 8).forEach(hours => {
        //       console.log(hours);
        //       const hour = new Date(hours.time * 1000).getHours() + ':00';
        //       const wind = (hours.windSpeed * 0.869).toFixed(2);
        //       skycons.add(document.querySelector(".small-icon"), hours.icon);
        //       skycons.play();
        //       comingWeather.insertAdjacentHTML('beforebegin', `<li>
        //                                                    ${hour} -->
        //                                                    ${wind} nds`)
        //     });
        //   }
        // });
