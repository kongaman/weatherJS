// Init calsses
const weather = new Weather('Boston', 'MA');
const ui = new UI();

// Get weather on DOMload
document.addEventListener('DOMContentLoaded', getWeather);
// Change location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);
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

