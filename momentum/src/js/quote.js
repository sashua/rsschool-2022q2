class Quote {
  constructor(rootSelector) {
    this.refs = this.getRefs(rootSelector);
    this.url = "quotes.json";

    this.refs.button.addEventListener("click", this.updateQuote.bind(this));
  }

  async fetchQuotes() {
    const response = await fetch(this.url);
    const data = await response.json();
    this.quotes = data;
    this.updateQuote();
  }

  getRandomQuote() {
    return this.quotes[Math.ceil(Math.random() * this.quotes.length)];
  }

  updateQuote() {
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
