'use strict';
const API_BaseURL = 'https://api.weatherapi.com/v1';
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('.search-btn');
const weatherRow = document.querySelector('.weather-row');
let forecastData = {
  current: {},
  locationName: '',
  forecastDayData: [],
};
navbarUIRenderer();
searchByLocation();
getUserCurrentLocation();

// Load navbar.html dynamically into all pages
function navbarUIRenderer() {
  try {
    fetch('assets/pages/navbar.html', {
      cache: 'force-cache',
    })
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        document.getElementById('navbar-placeholder').innerHTML = data;
        const currentPath = location.pathname;
        const links = document.querySelectorAll('.nav-link');
        links.forEach((link) => {
          let href = link.getAttribute('href');

          if (currentPath.includes('/pages/')) {
            if (href === 'index.html') {
              link.setAttribute('href', '../index.html');
            }
            if (href === 'pages/news.html') {
              link.setAttribute('href', 'news.html');
              link.classList.add('active');
            }
          } else {
            if (href === 'index.html') {
              link.setAttribute('href', 'index.html');
              link.classList.add('active');
            }
            if (href === 'pages/news.html') {
              link.setAttribute('href', 'pages/news.html');
            }
          }
        });
      });
  } catch (err) {
    errorHandler(err.message);
  }
}

// get weather by entered location
async function getWeatherByLocation(query) {
  if (!query) return errorHandler('Please choose location');
  try {
    const response = await fetch(
      `${API_BaseURL}/forecast.json?key=714d4196dbac472f8eb204320250407&q=${query}&days=3`
    );
    const data = await response.json();
    if (data.error) throw new Error(data.error.message);
    showWeatherData(data);
  } catch (err) {
    errorHandler(err.message);
  }
}

// search input handler
function searchByLocation() {
  let lastVal = null;
  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const currentVal = searchInput.value.trim();
    if (currentVal === lastVal) return;
    lastVal = currentVal;
    getWeatherByLocation(lastVal);
  });
}

// detect user location depends on user permission popup if its allow or declined
function getUserCurrentLocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const decimalDegree =
        position.coords.latitude + ',' + position.coords.longitude;
      getWeatherByLocation(decimalDegree);
    },
    (err) => errorHandler(err.message)
  );
}

// render Row data
function showWeatherData(rowData) {
  dataMappingHandler(rowData);
  let rowElements = `
      <div class="col-lg-4 p-0">
        <div class="card day-today mb-3">
          <div class="card-header d-flex justify-content-between">
            <span>${getDayName(forecastData.current.last_updated)}</span>
            <span>${getDayName(forecastData.current.last_updated, true)}</span>
          </div>
          <div class="card-body">
            <span class="city">${forecastData.locationName}</span>
            <h5 class="card-title">${
              forecastData.current.temp_c
            }<sup>o</sup>C</h5>
            <div class="img-wrapper">
              <img src="${forecastData.current.condition.icon}" 
              alt="${forecastData.current.condition.text}"
              class="img-fluid"
              />
            </div>
            <h6 class="weather-forecast">Clear</h6>
            <div class="details d-flex gap-3">
              <span>
                <img
                  src="./assets/imgs/icon-umberella.png"
                  width="21"
                  height="21"
                  alt="icon-umbrella"
                />
                20%
              </span>
              <span>
                <img
                  src="./assets/imgs/icon-wind.png"
                  width="21"
                  height="21"
                  alt="icon-wind"
                />
                18km/h
              </span>
              <span>
                <img
                  src="./assets/imgs/icon-compass.png"
                  width="21"
                  height="21"
                  alt="icon-compass"
                />
                East
              </span>
            </div>
          </div>
        </div>
      </div>`;
  for (let i = 1; i < forecastData.forecastDayData.length; i++) {
    const forecast = forecastData.forecastDayData[i].forecastDay;
    const forecastDayDate = forecastData.forecastDayData[i].date;
    rowElements += `
      <div class="col-lg-4 p-0">
        <div class="card another-day-${i} mb-3">
          <div class="card-header d-flex justify-content-center">${forecastDayDate}</div>
          <div
            class="card-body d-flex flex-column align-items-center gap-2"
          >
            <img src="${forecast.condition.icon}" 
            alt="${forecast.condition.text}"
            width="48"
            height="48"/>
            <h5 class="card-title">${forecast.maxtemp_c}<sup>o</sup>C</h5>
            <h6>${forecast.mintemp_c}<sup>o</sup></h6>
            <span class="weather-forecast">${forecast.condition.text}</span>
          </div>
        </div>
      </div>
    `;
  }
  weatherRow.innerHTML = rowElements;
}

// mapping function
function dataMappingHandler(data) {
  const dataMapping = data.forecast.forecastday;

  const dayData = [];
  dataMapping.map((forecast) => {
    const forecastDay = {
      forecastDay: forecast.day,
      date: getDayName(forecast.date),
    };
    dayData.push(forecastDay);
  });
  forecastData = {
    current: data.current,
    forecastDayData: dayData,
    locationName: data.location.name,
  };
}

// date mapping function
function getDayName(date, dayWithMonth) {
  const currentDate = new Date(date);
  if (dayWithMonth) {
    const day = currentDate.getDate();
    const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
    return `${day} ${month}`;
  } else {
    const dayName = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
    });
    return dayName;
  }
}

// error handler function
function errorHandler(errMessage) {
  if (!errMessage) return;
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: 'error',
    title: errMessage,
  });
}
