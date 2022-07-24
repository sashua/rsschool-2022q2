import { Clock } from "./js/clock";

function main() {
  console.log("main invoked");

  const timeElem = document.querySelector(".clock__time");
  const dateElem = document.querySelector(".clock__date");

  const clock = new Clock(timeElem, dateElem);

  window.setInterval(everySecondHandler, 1000);

  function everySecondHandler() {
    clock.showTime();
  }
}

window.onload = main();
