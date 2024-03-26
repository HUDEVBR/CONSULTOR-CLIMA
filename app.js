const apiKey = 'a93284654a360a4feac04f5176f336b5&lang';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?pt_br&units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')
const cloudIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="clouds" height="80px"><path fill="#6563FF" d="M19.47,10.54A6,6,0,0,0,14,7a5.82,5.82,0,0,0-1.39.18,5,5,0,0,0-9,2A3,3,0,0,0,4.5,15h1a4,4,0,0,0,0,.5A3.5,3.5,0,0,0,9,19h9.17a4.33,4.33,0,0,0,1.3-8.46ZM4.5,13a1,1,0,0,1,0-2,1,1,0,0,0,1-1,3,3,0,0,1,3-3,3,3,0,0,1,2.22,1,6,6,0,0,0-2.66,4.13,3.49,3.49,0,0,0-1.5.87Zm13.67,4H9a1.5,1.5,0,0,1,0-3,1,1,0,0,0,1-1,4,4,0,0,1,7.78-1.29,1,1,0,0,0,.78.67A2.33,2.33,0,0,1,18.17,17Z"></path></svg>';
const clearIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="sun"><path fill="#6563FF" d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg>';
const rainIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="cloud-showers"><path fill="#6563FF" d="M8,11a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V12A1,1,0,0,0,8,11Zm4,6a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V18A1,1,0,0,0,12,17ZM8,17a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V18A1,1,0,0,0,8,17ZM18.42,6.22A7,7,0,0,0,5.06,8.11,4,4,0,0,0,2,12a4,4,0,0,0,1.34,3,1,1,0,1,0,1.32-1.5A2,2,0,0,1,4,12a2,2,0,0,1,2-2A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67A3,3,0,0,1,20,11a2.91,2.91,0,0,1-.74,2,1,1,0,0,0,1.48,1.34,5,5,0,0,0-2.32-8.08ZM12,11a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V12A1,1,0,0,0,12,11Zm4,0a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V12A1,1,0,0,0,16,11Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V18A1,1,0,0,0,16,17Z"></path></svg>';
const drizzleIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="cloud-drizzle"><path fill="#6563FF" d="M12,19a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM8,11a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V12A1,1,0,0,0,8,11Zm0,5a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V17A1,1,0,0,0,8,16Zm4-2a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Zm6.42-7.78A7,7,0,0,0,5.06,8.11,4,4,0,0,0,2,12a4,4,0,0,0,1.34,3,1,1,0,1,0,1.32-1.5A2,2,0,0,1,4,12a2,2,0,0,1,2-2A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67A3,3,0,0,1,20,11a2.91,2.91,0,0,1-.74,2,1,1,0,0,0,1.48,1.34,5,5,0,0,0-2.32-8.08ZM16,11a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V12A1,1,0,0,0,16,11Zm0,5a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V17A1,1,0,0,0,16,16ZM12,9a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V10A1,1,0,0,0,12,9Z"></path></svg>';
const mistIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="windy"><path fill="#6563FF" d="M17,15a1.73,1.73,0,0,1-.86-.23,3.11,3.11,0,0,0-3.27,0,1.73,1.73,0,0,1-1.73,0,3.11,3.11,0,0,0-3.27,0A1.74,1.74,0,0,1,7,15a1,1,0,0,0,0,2,3.72,3.72,0,0,0,1.9-.52,1.13,1.13,0,0,1,1.2,0,3.75,3.75,0,0,0,3.8,0,1.13,1.13,0,0,1,1.2,0A3.72,3.72,0,0,0,17,17a1,1,0,0,0,0-2Zm0,4a1.73,1.73,0,0,1-.86-.23,3.11,3.11,0,0,0-3.27,0,1.73,1.73,0,0,1-1.73,0,3.11,3.11,0,0,0-3.27,0A1.74,1.74,0,0,1,7,19a1,1,0,0,0,0,2,3.72,3.72,0,0,0,1.9-.52,1.13,1.13,0,0,1,1.2,0,3.75,3.75,0,0,0,3.8,0,1.13,1.13,0,0,1,1.2,0A3.72,3.72,0,0,0,17,21a1,1,0,0,0,0-2ZM18.42,7.21A7,7,0,0,0,5.06,9.11,4,4,0,0,0,2,13a4,4,0,0,0,1.34,3,1,1,0,0,0,.66.25,1,1,0,0,0,.75-.35,1,1,0,0,0-.09-1.41A1.93,1.93,0,0,1,4,13a2,2,0,0,1,2-2,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.66A3,3,0,0,1,20,12a2.93,2.93,0,0,1-.74,2,1,1,0,1,0,1.48,1.33A4.91,4.91,0,0,0,22,12,5,5,0,0,0,18.42,7.21Z"></path></svg>';
const snowIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="cloud-meatball"><path fill="#6563FF" d="M14.5,15.92h-.77l.39-.67a1,1,0,0,0-1.74-1l-.38.67-.38-.67a1,1,0,0,0-1.74,1l.39.67H9.5a1,1,0,0,0,0,2h.77l-.39.66a1,1,0,0,0,1.74,1l.38-.66.38.66a1,1,0,0,0,1.74-1l-.39-.66h.77a1,1,0,0,0,0-2Zm3.92-7.79A7,7,0,0,0,5.06,10,4,4,0,0,0,2,13.92a4,4,0,0,0,3.34,3.93l.16,0a1,1,0,0,0,.16-2,2,2,0,0,1-1.66-2,2,2,0,0,1,2-2,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.66,3,3,0,0,1,.62,5.72,1,1,0,1,0,.74,1.85,5,5,0,0,0-.45-9.41Z"></path></svg>';

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + 'ºC';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' km/h';

    console.log(data)

    const icones = {
        Clouds: cloudIcon,
        Clear: clearIcon,
        Rain: rainIcon,
        Drizzle: drizzleIcon,
        Mist: mistIcon,
        Snow: snowIcon
    }

    icones[data.weather[0].main]

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'images/clouds.png'
    } else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = 'images/clear.png '
    } else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = 'images/rain.png'
    } else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = 'images/drizzle.png'
    } else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = 'images/mist.png'
    } else if (data.weather[0].main == 'Snow') {
        weatherIcon.src = 'images/snow.png'
    }


}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})
