class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');
        this.minTemp = document.getElementById('w-min-temp');
        this.maxTemp = document.getElementById('w-max-temp');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
        this.minTemp.textContent = `Min Temperature: ${weather.main.temp_min}`;
        this.maxTemp.textContent = `Max Temperature: ${weather.main.temp_max}`;
    }
}