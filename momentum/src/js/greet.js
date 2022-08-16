class Greet {
  constructor(elem) {
    this.elem = elem;
    this.textElem = this.elem.querySelector(".greet__text");
    this.inputElem = this.elem.querySelector(".greet__input");
    this.testElem = this.elem.querySelector(".greet__test");
    this.buttonElem = this.elem.querySelector(".greet__button");

    this.inputElem.addEventListener("input", this.setInputWidth.bind(this));
    this.inputElem.addEventListener("focusout", this.disableInput.bind(this));
    this.buttonElem.addEventListener("click", this.enableInput.bind(this));

    this.disableInput();
  }

  updateText(timeOfDay) {
    this.textElem.textContent = `Good ${timeOfDay}${
      this.inputElem.value.length ? "," : "."
    }`;
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
}

export { Greet };
