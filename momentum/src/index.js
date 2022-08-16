import { Clock } from "./js/clock";
import { Greet } from "./js/greet";
import { Slider } from "./js/slider";
import { Weather } from "./js/weather";
import { Quote } from "./js/quote";

function main() {
  const clock = new Clock(document.querySelector(".clock"));
  const greet = new Greet(document.querySelector(".greet"));
  const slider = new Slider(document.querySelector(".slider"));
  const weather = new Weather(".weather", "Kyiv");
  weather.updateWeather();

  const quote = new Quote(".quote");
  quote.fetchQuotes();

  window.setInterval(updateInfo, 1000);
  updateInfo();

  function updateInfo() {
    const timeOfDay = clock.updateTime();
    greet.updateText(timeOfDay);
    slider.updateTimeOfDay(timeOfDay);
  }
}

window.onload = main();
