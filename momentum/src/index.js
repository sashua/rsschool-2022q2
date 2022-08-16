import { Clock } from "./js/clock";
import { Greet } from "./js/greet";
import { Slider } from "./js/slider";
import { Weather } from "./js/weather";
import { Quote } from "./js/quote";
import { Player } from "./js/player";

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

console.log(`
Score: 75 / 150
1. Часы и календарь 15 / 15
2. Приветствие 10 / 10
3. Смена фонового изображения 0 / 20
4. Виджет погоды 15 / 15
5. Виджет цитата дня 10 / 10
6. Аудиоплеер 15 / 15
7. Продвинутый аудиоплеер 0 / 20
8. Перевод приложения на два языка 0 / 15
9. Получение фонового изображения от API 10 / 10
10. Настройки приложения 0 / 20
11. Дополнительный функционал на выбор 0 / 10
`);
