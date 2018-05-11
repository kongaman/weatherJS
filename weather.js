class Weather {
    constructor(city, state) {
        this.apiKey = '5106c2a3d94f9aac';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`); 
        const responseData = await response.json();
        return responseData.current_observation;
    }

    // Cahnge weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}