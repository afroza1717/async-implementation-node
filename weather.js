const temperatureFahrenheit = '75\u00B0F';

function fetchWeather(city) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Weather in ${city} is ` + temperatureFahrenheit);
        }, 2000);
    });
}

fetchWeather('New York').then(messageWeather => {
    console.log(messageWeather);
    return fetchWeather("Los Angeles");
}).then(messageWeather => {
    console.log(messageWeather);
    return fetchWeather("Chicago")
}).then(messageWeather => {
    console.log(messageWeather);
    console.log("Weather updates completed!");
})



