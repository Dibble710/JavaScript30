const timezone = document.querySelector("[data-timezone]");
window.addEventListener("load", () => {
  let lon;
  let lat;
  let tempDescription = document.querySelector(".temp-description");
  let locationTimezone = document.querySelector("[data-timezone]");
  let feelsLike = document.querySelector(".feels-temp");
  let actualTemp = document.querySelector(".actual-temp");
  let windSpeed = document.querySelector('[data-wind-speed]')

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;

      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=b852b4436a07dc84fe5b7084e11e85ab`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const location = data.name;
          const { temp, feels_like } = data.main;
          const description = data.weather[0].description;
          const weatherIcon = data.weather[0].icon
          const wind = data.wind.speed;
          console.log(weatherIcon);

          // set DOM elements from API
          actualTemp.textContent = temp + " F";
          actualTemp.classList.remove('.loading')
          feelsLike.textContent = feels_like + " F";
          locationTimezone.textContent = location;
          tempDescription.textContent = description;
          windSpeed.textContent = `${wind.toString().substr(0,1)} mph`
        });
    });
  }
});
