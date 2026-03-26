//DOM manipulation; assign elements that are going to be modified to const variables
const temperature = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');

//url const variable with the API, using valid data to complete the url with latitude, longitude and the appid
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=f75a869495cf9003392e41dfb7cb69c2';

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

function displayResults(data) {
    temperature.textContent = `${data.main.temp} °C`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', `Icon of ${data.weather[0].description} weather`)
    caption.textContent = `${data.weather[0].description}`;
}

apiFetch();