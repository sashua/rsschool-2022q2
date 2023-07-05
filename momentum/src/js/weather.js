const debounce = require("lodash.debounce");

const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather";
const WEATHER_KEY = "4a406d43d5aad2dbfda3cb2d7cd48b00";

class Weather {
  constructor(rootSelector, city, updateIntervalMinutes) {
    this.refs = this.getRefs(rootSelector);

    this.refs.input.value = city ? city : "";

    this.apiUrl = new URL(WEATHER_API);
    this.apiUrl.searchParams.set("appid", WEATHER_KEY);
    this.apiUrl.searchParams.set("units", "metric");

    this.lastUpdateTime = 0;
    this.updateInterval = updateIntervalMinutes * 60 * 1000;

    this.setInputWidth();
    this.bindEvents();
  }

  async updateWeather() {
    if (Date.now() - this.lastUpdateTime < this.updateInterval) {
      return;
    }
    const weatherData = await this.fetchWeather();
    this.lastUpdateTime = Date.now();
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

  getCity() {
    return this.refs.input.value.trim();
  }

  async fetchWeather() {
    const city = this.getCity();
    this.apiUrl.searchParams.set("q", city ? city : "Kyiv");
    const response = await fetch(this.apiUrl);
    const weatherData = await response.json();
    return weatherData;
  }

  renderWeather(weatherData) {
    this.refs.icon.className = `weather__icon owf owf-lg owf-${weatherData.weather[0].id}`;
    this.refs.temperature.textContent = `${weatherData.main.temp.toFixed(0)}°C`;
    this.refs.description.textContent = weatherData.weather[0].description;
    this.refs.wind.textContent = `${weatherData.wind.speed.toFixed(0)} m/s`;
    this.refs.humidity.textContent = `${weatherData.main.humidity.toFixed(
      0
    )} %`;
    this.refs.mainInfo.display = "block";
    this.refs.addInfo.display = "block";
  }

  clearWeather(weatherData) {
    this.refs.icon.className = `weather__icon owf`;
    this.refs.temperature.textContent = "";
    this.refs.wind.textContent = "";
    this.refs.humidity.textContent = "";
    this.refs.mainInfo.display = "none";
    this.refs.addInfo.display = "none";
    this.refs.description.textContent = weatherData ? weatherData.message : "";
  }

  setInputWidth() {
    const name = this.refs.input.value.trim();
    this.refs.test.textContent = name
      ? this.refs.input.value
      : this.refs.input.placeholder;
    this.refs.input.style.width = this.refs.test.offsetWidth + "px";
  }

  onCityChange(e) {
    this.lastUpdateTime = 0;
    this.updateWeather();
  }

  bindEvents() {
    this.refs.input.addEventListener(
      "input",
      debounce(this.onCityChange.bind(this), 1000)
    );
    this.refs.input.addEventListener("input", this.setInputWidth.bind(this));
  }

  getRefs(rootSelector) {
    const root = document.querySelector(rootSelector);
    return {
      input: root.querySelector(".weather__input"),
      mainInfo: root.querySelector(".weather__main-info"),
      icon: root.querySelector(".weather__icon"),
      temperature: root.querySelector(".weather__temperature"),
      description: root.querySelector(".weather__description"),
      addInfo: root.querySelector(".weather__add-info"),
      wind: root.querySelector(".weather__wind"),
      humidity: root.querySelector(".weather__humidity"),
      test: root.querySelector(".weather__test"),
    };
  }
}

export { Weather };
