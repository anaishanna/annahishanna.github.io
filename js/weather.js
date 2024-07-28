const API_KEY = "13138711bacb4639d31194950f6ba75d";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const city = document.querySelector("#weather span:first-child");
        /* const weather = document.querySelector("#weather span:last-child"); */
        city.innerText = `${data.name} ${Math.floor(data.main.temp)}°C`;
        /* weather.innerText = `${data.weather[0].main}`; */

    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);