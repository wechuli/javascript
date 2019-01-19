class Weather {
  constructor(city) {
    this.apiKey = "cac894c35a5dd2f8ae710ae3756f5daa";
    this.city = city;
  }
  //Fetch weather from api
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${
        this.apiKey
      }&units=metric`
    );
    const responseData = await response.json();
    return responseData;
  }
  //Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
