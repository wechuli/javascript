class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.wstring = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");

    this.humidity = document.getElementById("w-humidity");
    this.pressure = document.getElementById("w-pressure");
    this.windspeed = document.getElementById("w-windspeed");
  }
  paint(weather) {
    this.location.textContent = `${weather.name},${weather.sys.country}`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.desc.textContent = `${weather.weather[0].main},${
      weather.weather[0].description
    } `;
    this.wstring.textContent = `${weather.main.temp}℃`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
    this.windspeed.textContent = `Wind Speed: ${weather.wind.speed}`;
  }
}
