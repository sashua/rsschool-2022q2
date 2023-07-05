import quotes from "./quotes.json";

class Quote {
  constructor(rootSelector, updateIntervalMinutes) {
    this.refs = this.getRefs(rootSelector);
    this.quotes = quotes;

    this.lastUpdateTime = 0;
    this.updateInterval = updateIntervalMinutes * 60 * 1000;

    this.refs.button.addEventListener("click", this.onButtonClick.bind(this));
  }

  onButtonClick(e) {
    this.lastUpdateTime = 0;
    this.updateQuote();
    this.refs.button.blur();
  }

  getRandomQuote() {
    return this.quotes[Math.ceil(Math.random() * this.quotes.length)];
  }

  updateQuote() {
    if (!this.quotes) {
      return;
    }
    if (Date.now() - this.lastUpdateTime < this.updateInterval) {
      return;
    }
    this.lastUpdateTime = Date.now();
    const { quote, author } = this.getRandomQuote();
    this.refs.text.textContent = quote;
    this.refs.author.textContent = author;
  }

  getRefs(rootSelector) {
    const root = document.querySelector(rootSelector);

    return {
      button: root.querySelector(".quote__button"),
      text: root.querySelector(".quote__text"),
      author: root.querySelector(".quote__author"),
    };
  }
}

export { Quote };
