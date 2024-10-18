const apiKey = '80b7e1fb0cd3247680051c0f3ef31ad9';
let cityName = prompt('Введіть назву міста');

document.querySelector('.refresh-btn').addEventListener('click', function() {
    displayWeather(cityName, apiKey);
});

displayWeather(cityName, apiKey)

function displayWeather(cityName, apiKey) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        if (data.length === 0) {
            throw new Error('Місто не знайдено');
        }
        document.querySelector('.city').textContent = data[0].name;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(result => {
            document.querySelector('.weather-widget').classList.remove('hidden');
            document.querySelector('.date').textContent = getDate(result.dt, result.timezone);
            document.querySelector('.time').firstElementChild.textContent = getTime(result.dt, result.timezone);
            document.querySelector('.temperature').firstElementChild.textContent = Math.round(result.main.temp * 2) / 2;
            document.querySelector('.weather-condition').textContent = result.weather[0].main;
            document.querySelector('.humidity').firstElementChild.textContent = result.main.humidity;
            document.querySelector('.pressure').firstElementChild.textContent = result.main.pressure;
            document.querySelector('.wind').firstElementChild.textContent = result.wind.speed;
            document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
            
        })
    })
    .catch(error => {
        document.querySelector('.weather-widget').classList.add('hidden');
        console.error('Помилка:', error);
    });
}
    
function getDate(dt, timezone) {
    const localTime = new Date((dt + timezone) * 1000);
    const day = localTime.getDate();
    const month = localTime.getMonth() + 1;
    const year = localTime.getFullYear();
    
    return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
}

function getTime(dt, timezone) {
    const localTime = new Date((dt + timezone) * 1000);
    const hours = localTime.getHours().toString().padStart(2, '0');
    const minutes = localTime.getMinutes().toString().padStart(2, '0');
    
    return `${hours}:${minutes}`;
}