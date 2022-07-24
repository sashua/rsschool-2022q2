const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

class Clock {
  constructor(timeElem, dateElem) {
    this.timeElem = timeElem;
    this.dateElem = dateElem;
    this.showTime();
  }

  showTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    this.timeElem.textContent = `${hours}:${minutes}:${seconds}`;

    const weekDay = DAYS_OF_WEEK[date.getDay()];
    const day = date.getDate().toString().padStart(2, "0");
    const month = MONTHS[date.getMonth()];
    this.dateElem.textContent = `${weekDay} ${day} ${month}`;
  }
}

export { Clock };

// TODO:
