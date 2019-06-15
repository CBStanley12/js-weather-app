class Weather {
    constructor(city) {
        this.apiKey = "93054642e257b76046376f8968468db7";
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&APPID=${this.apiKey}`)

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}