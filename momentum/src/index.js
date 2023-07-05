import { Clock } from "./js/clock";
import { Greet } from "./js/greet";
import { Player } from "./js/player";
import { Quote } from "./js/quote";
import { Slider } from "./js/slider";
import { Weather } from "./js/weather";

class Momentum {
  constructor() {
    this.bindEvents();
  }

  init() {
    const { name, city } = this.getSavedValues();

    this.clock = new Clock(".clock");
    this.greet = new Greet(".greet", name);
    this.slider = new Slider(".slider", 60);
    this.weather = new Weather(".weather", city, 30);
    this.quote = new Quote(".quote", 60);
    this.player = new Player(".player");

    this.updateInfo();
  }

  bindEvents() {
    window.onload = this.init.bind(this);
    window.setInterval(this.updateInfo.bind(this), 1000);
    window.addEventListener("beforeunload", this.saveValues.bind(this));
  }

  updateInfo() {
    const timeOfDay = this.clock.updateTime();
    this.greet.updateText(timeOfDay);
    this.slider.updateBg(timeOfDay);
    this.weather.updateWeather();
    this.quote.updateQuote();
    this.player.renderDurationTime();
  }

  saveValues() {
    const name = this.greet.getName();
    const city = this.weather.getCity();
    window.localStorage.setItem("name", name);
    window.localStorage.setItem("city", city);
  }

  getSavedValues() {
    return {
      city: window.localStorage.getItem("city"),
      name: window.localStorage.getItem("name"),
    };
  }
}

new Momentum();
