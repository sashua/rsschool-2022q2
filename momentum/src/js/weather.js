const debounce = require("lodash.debounce");

const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather";
const WEATHER_KEY = "4a406d43d5aad2dbfda3cb2d7cd48b00";

class Weather {
  constructor(rootSelector, city) {
    this.refs = this.getRefs(rootSelector);

    this.refs.city.value = city;

    this.apiUrl = new URL(WEATHER_API);
    this.apiUrl.searchParams.set("appid", WEATHER_KEY);
    this.apiUrl.searchParams.set("units", "metric");

    this.refs.city.addEventListener(
      "input",
      debounce(this.updateWeather.bind(this), 1000)
    );
  }

  async updateWeather() {
    if (!this.refs.city.value) {
      this.clearWeather();
      return;
    }

    const weatherData = await this.fetchWeather();
    if (!weatherData) {
      this.clearWeather();
      return;
    }
    if (weatherData.cod !== 200) {
      this.clearWeather(weatherData);
      return;
    }

    this.renderWeather(weatherData);
  }

  async fetchWeather() {
    this.apiUrl.searchParams.set("q", this.refs.city.value);
    const response = await fetch(this.apiUrl);
    const weatherData = await response.json();
    return weatherData;
  }

  renderWeather(weatherData) {
    this.refs.icon.className = `weather__icon owf owf-2x owf-${weatherData.weather[0].id}`;
    this.refs.temperature.textContent = `${weatherData.main.temp.toFixed(1)}℃`;
    this.refs.description.textContent = weatherData.weather[0].description;
  }

  clearWeather(weatherData) {
    this.refs.icon.className = `weather__icon owf`;
    this.refs.temperature.textContent = "";
    this.refs.description.textContent = weatherData ? weatherData.message : "";
  }

  getRefs(rootSelector) {
    const root = document.querySelector(rootSelector);
    const city = root.querySelector(".weather__city");
    const icon = root.querySelector(".weather__icon");
    const temperature = root.querySelector(".weather__temperature");
    const description = root.querySelector(".weather__description");
    return { city, icon, temperature, description };
  }
}

export { Weather };
