//DOM manipulation; assign elements that are going to be modified to const variables
const currentWeather = document.querySelector('#current-weather');
const weatherForecast = document.querySelector('#weather-forecast');
//const weatherIcon = document.querySelector('#weather-icon');
//const caption = document.querySelector('figcaption');

//url const variable with the API, using valid data to complete the url with latitude, longitude and the appid
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.59&lon=-100.39&units=metric&appid=f75a869495cf9003392e41dfb7cb69c2';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.59&lon=-100.39&units=metric&appid=f75a869495cf9003392e41dfb7cb69c2';

//asynchronus function to fetch API
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //testing console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());

        }
    }
    catch (error) {
        console.log(error);
    }
}

async function apiFetchForecast() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            //testing console.log(data);
            displayResultsForecast(data);
        }
        else {
            throw Error(await response.text());

        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayResultsForecast(data) {
    const todayTemp = document.createElement('p');
    const tomorrowTemp = document.createElement('p');
    const twoDaysTemp = document.createElement('p');
    todayTemp.textContent = `Today: ${data.list[0].main.temp} °C`;
    tomorrowTemp.textContent = `Tomorrow: ${data.list[6].main.temp} °C`;
    twoDaysTemp.textContent = `Two-days: ${data.list[14].main.temp} °C`;
    weatherForecast.appendChild(todayTemp);
    weatherForecast.appendChild(tomorrowTemp);
    weatherForecast.appendChild(twoDaysTemp);
}

function displayResults(data) {
    const weatherIcon = document.createElement('img');
    const temperature = document.createElement('p');
    const description = document.createElement('p');
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', `Icon of ${data.weather[0].description} weather`);
    weatherIcon.setAttribute('loading', 'lazy');
    temperature.textContent = `${data.main.temp} °C`;
    description.textContent = `${data.weather[0].description}`;
    currentWeather.appendChild(weatherIcon);
    currentWeather.appendChild(temperature);
    currentWeather.appendChild(description);
}

apiFetch();
apiFetchForecast();