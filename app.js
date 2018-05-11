// Init calsses
const ui = new UI();
const storage = new Storage();
//Get stored Location data
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Get weather on DOMload
document.addEventListener('DOMContentLoaded', getWeather);
// Change location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    // Change Location via Modal
    weather.changeLocation(city, state);
    // Set Location in localStorage
    storage.setLocationData(city, state);
    //Get and Display Weather for new Location
    getWeather();
    //Close Modal (jQuery)
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}

