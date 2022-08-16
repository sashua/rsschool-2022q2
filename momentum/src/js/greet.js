class Greet {
  constructor(rootSelector, name) {
    this.refs = this.getRefs(rootSelector);

    this.refs.input.value = name ? name : "";

    this.setInputWidth();
    this.bindEvents();
  }

  getName() {
    return this.refs.input.value.trim();
  }

  updateText(timeOfDay) {
    this.refs.text.textContent = `Good ${timeOfDay},`;
  }

  setInputWidth() {
    const name = this.getName();
    this.refs.test.textContent = name ? name : this.refs.input.placeholder;
    this.refs.input.style.width = this.refs.test.offsetWidth + "px";
  }

  bindEvents() {
    this.refs.input.addEventListener("input", this.setInputWidth.bind(this));
  }

  getRefs(rootSelector) {
    const rootElem = document.querySelector(rootSelector);
    return {
      text: rootElem.querySelector(".greet__text"),
      input: rootElem.querySelector(".greet__input"),
      test: rootElem.querySelector(".greet__test"),
    };
  }
}

export { Greet };
