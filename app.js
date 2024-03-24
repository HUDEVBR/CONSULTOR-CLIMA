const apiKey = 'a93284654a360a4feac04f5176f336b5&lang';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?pt_br&units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('weather-icon')
const cloudIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="wind" height="80px"><path fill="url(#gradientIcon)" d="M3.5,9a1,1,0,1,0-1-1A1,1,0,0,0,3.5,9Zm4,0h7a3,3,0,0,0,0-6,3.06,3.06,0,0,0-1.5.4,1,1,0,0,0-.37,1.37A1,1,0,0,0,14,5.13,1.09,1.09,0,0,1,14.5,5a1,1,0,0,1,0,2h-7a1,1,0,0,0,0,2Zm-4,4h7a1,1,0,0,0,0-2h-7a1,1,0,0,0,0,2Zm17-4a1,1,0,1,0-1-1A1,1,0,0,0,20.5,9Zm-2,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,1,0,2,1,1,0,0,0,0,2,3,3,0,0,0,0-6Zm-6,4h-4a1,1,0,0,0,0,2h4a1,1,0,0,1,0,2,1.09,1.09,0,0,1-.5-.13,1,1,0,1,0-1,1.73,3.06,3.06,0,0,0,1.5.4,3,3,0,0,0,0-6Zm-8,0h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z"></path></svg>';

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ' ºC';
    document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' km/h';

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = cloudIcon
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})
