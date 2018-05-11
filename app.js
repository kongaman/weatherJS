// Init calsses
const weather = new Weather('Boston', 'MA');
const ui = new UI();

// Get weather on DOMload
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}

