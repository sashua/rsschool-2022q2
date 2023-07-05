const throttle = require("lodash.throttle");

class Range {
  constructor({
    rootSelector,
    onInputCallback,
    min = 0,
    max = 100,
    value = 0,
  }) {
    this.refs = this.getRefs(rootSelector);
    this.onInputCallback = onInputCallback;
    this.setRange(min, max, value);
    this.bindEvents();
  }

  setRange(min, max, value = 0) {
    this.refs.input.min = min;
    this.refs.input.max = max;
    this.setValue(value);
  }

  setValue(value) {
    this.refs.input.value = value;
  }

  getValue() {
    return this.refs.input.value;
  }

  onInput(e) {
    if (!this.onInputCallback) {
      return;
    }
    this.onInputCallback(e.target.value);
  }

  bindEvents() {
    this.refs.input.addEventListener(
      "input",
      throttle(this.onInput.bind(this), 100)
    );
  }

  getRefs(rootSelector) {
    const rootElem = document.querySelector(rootSelector);
    return {
      input: rootElem.querySelector(".range__input"),
    };
  }
}

export { Range };
