class Greet {
  constructor(elem) {
    this.elem = elem;
    this.textElem = elem.querySelector(".greet__text");
    this.inputElem = elem.querySelector(".greet__input");
    this.testElem = elem.querySelector(".greet__test");
    this.buttonElem = elem.querySelector(".greet__button");

    this.inputElem.addEventListener("input", this.setInputWidth.bind(this));
    this.inputElem.addEventListener("focusout", this.disableInput.bind(this));
    this.buttonElem.addEventListener("click", this.enableInput.bind(this));

    this.disableInput();
    this.updateText();
  }

  updateText() {
    this.textElem.textContent = `Good ${this.getTimeOfDay()}${
      this.inputElem.value.length ? "," : "."
    }`;
    console.log(this.inputElem.value.length);
  }

  enableInput() {
    this.inputElem.removeAttribute("disabled");
    this.testElem.removeAttribute("disabled");
    this.setInputWidth();
    this.inputElem.focus();
  }

  disableInput() {
    this.setInputWidth();
    this.inputElem.setAttribute("disabled", "");
    this.testElem.setAttribute("disabled", "");
  }

  setInputWidth() {
    this.testElem.textContent = this.inputElem.value;
    this.inputElem.style.width = this.inputElem.value.length
      ? this.testElem.offsetWidth + "px"
      : 0;
  }

  getTimeOfDay() {
    const now = new Date();
    const hours = now.getHours();
    if (hours >= 6 && hours <= 11) return "morning";
    if (hours >= 12 && hours <= 17) return "afternoon";
    if (hours >= 18 && hours <= 23) return "evening";
    if (hours >= 0 && hours <= 5) return "night";
  }
}

export { Greet };
