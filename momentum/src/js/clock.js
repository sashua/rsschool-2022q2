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
  constructor(elem) {
    this.elem = elem;
    this.timeElem = this.elem.querySelector(".clock__time");
    this.dateElem = this.elem.querySelector(".clock__date");

    this.locale = "en-GB";
    this.timeOptions = {
      hour12: false,
    };
    this.dateOptions = {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
  }

  updateTime() {
    const now = new Date();
    this.timeElem.textContent = now.toLocaleTimeString(
      this.locale,
      this.timeOptions
    );
    this.dateElem.textContent = now.toLocaleDateString(
      this.locale,
      this.dateOptions
    );

    return this.getTimeOfDay(now);
  }

  getTimeOfDay(date) {
    const hours = date.getHours();
    if (hours >= 6 && hours <= 11) return "morning";
    if (hours >= 12 && hours <= 17) return "afternoon";
    if (hours >= 18 && hours <= 23) return "evening";
    if (hours >= 0 && hours <= 5) return "night";
  }
}

export { Clock };
