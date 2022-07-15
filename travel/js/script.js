class Menu {
  constructor(backdrop, openButtons) {
    this.backdrop = backdrop;
    this.openButtons = openButtons;

    this.menu = document.querySelector("[data-menu]");
    this.closeBtn = this.menu.querySelector(".nav__close");
    this.links = document.querySelectorAll(".nav__link");

    this.bindEvents();
  }

  bindEvents() {
    this.openButtons.forEach((item) =>
      item.addEventListener("click", this.open.bind(this))
    );
    this.backdrop.addEventListener("click", this.close.bind(this));
    this.closeBtn.addEventListener("click", this.close.bind(this));
    for (const link of this.links) {
      link.addEventListener("click", this.close.bind(this));
    }
  }

  open() {
    document.body.classList.add("no-scroll");
    this.menu.classList.add("is-shown");
    this.backdrop.classList.add("is-shown");
  }

  close() {
    document.body.classList.remove("no-scroll");
    this.menu.classList.remove("is-shown");
    this.backdrop.classList.remove("is-shown");
  }
}

class PopUp {
  constructor(backdrop, openButtons) {
    this.backdrop = backdrop;
    this.openButtons = openButtons;

    this.popup = document.querySelector("[data-popup]");
    this.caption = this.popup.querySelector(".pop-up__caption");
    this.submitBtn = this.popup.querySelector(".pop-up__submit");
    this.text = this.popup.querySelector(".pop-up__registration-text");
    this.registrationBtn = this.popup.querySelector(
      ".pop-up__registration-button"
    );

    this.bindEvents();
  }

  bindEvents() {
    this.openButtons.forEach((item) =>
      item.addEventListener("click", this.open.bind(this))
    );
    this.popup.addEventListener("click", this.close.bind(this));
    this.backdrop.addEventListener("click", this.close.bind(this));
    this.registrationBtn.addEventListener(
      "click",
      this.toggleRegistration.bind(this)
    );
  }

  open() {
    document.body.classList.add("no-scroll");
    this.popup.classList.remove("pop-up--registration");
    this.popup.classList.add("is-shown");
    this.backdrop.classList.add("is-shown");
    this.fillCaptions();
  }

  close(event) {
    if ([this.popup, this.backdrop].includes(event.target)) {
      document.body.classList.remove("no-scroll");
      this.popup.classList.remove("is-shown");
      this.backdrop.classList.remove("is-shown");
    }
  }

  toggleRegistration() {
    this.popup.classList.toggle("pop-up--registration");
    this.fillCaptions();
  }

  fillCaptions() {
    if (this.popup.classList.contains("pop-up--registration")) {
      this.caption.textContent = "Create account";
      this.submitBtn.textContent = "Sign Up";
      this.text.firstChild.data = "Already have an account?" + "\xa0";
      this.registrationBtn.textContent = "Log in";
    } else {
      this.caption.textContent = "Log in to your account";
      this.submitBtn.textContent = "Sign In";
      this.text.firstChild.data = "Don’t have an account?" + "\xa0";
      this.registrationBtn.textContent = "Register";
    }
  }
}

class Slider {
  constructor() {
    this.slider = document.querySelector("[data-slider]");
    this.sliderList = this.slider.querySelector(".slider__list");
    this.sliderButtons = this.slider.querySelectorAll(".slider__control");
    this.progress = new Progress(
      this.slider.querySelector(".slider__progress").children,
      1
    );

    this.sliderList.prepend(this.sliderList.lastElementChild.cloneNode(true));

    this.bindEvents();
  }

  bindEvents() {
    this.clickHandler = this.click.bind(this);
    this.transitionEndHandler = this.transitionEnd.bind(this);

    this.sliderButtons.forEach((item) =>
      item.addEventListener("click", this.clickHandler)
    );
  }

  click(event) {
    const action = event.currentTarget.dataset.sliderAction;
    this.sliderList.classList.remove("go-prev", "go-next");
    this.sliderList.classList.add(action);
    if (action === "go-prev") {
      this.progress.activatePrev();
    } else {
      this.progress.activateNext();
      this.sliderList.append(this.sliderList.children[1].cloneNode(true));
    }

    this.sliderButtons.forEach((item) =>
      item.removeEventListener("click", this.clickHandler)
    );
    this.sliderList.addEventListener(
      "transitionend",
      this.transitionEndHandler
    );
  }

  transitionEnd() {
    if (this.sliderList.classList.contains("go-prev")) {
      this.sliderList.removeChild(this.sliderList.lastElementChild);
      this.sliderList.prepend(this.sliderList.lastElementChild.cloneNode(true));
    }
    if (this.sliderList.classList.contains("go-next")) {
      this.sliderList.removeChild(this.sliderList.firstElementChild);
    }
    this.sliderList.classList.remove("go-prev", "go-next");

    this.sliderList.removeEventListener(
      "transitionend",
      this.transitionEndHandler
    );
    this.sliderButtons.forEach((item) =>
      item.addEventListener("click", this.clickHandler)
    );
  }
}

class Progress {
  constructor(items, active) {
    console.log(items);
    this.items = items;
    this.active = active;

    this.deactivateAll();
    this.activate(active);
  }

  deactivateAll() {
    Array.prototype.forEach.call(this.items, (item) =>
      item.classList.remove("is-active")
    );
  }

  activate() {
    this.items[this.active].classList.add("is-active");
  }

  activateNext() {
    this.deactivateAll();
    this.active = ++this.active % this.items.length;
    this.activate();
  }

  activatePrev() {
    this.deactivateAll();
    this.active = this.active <= 0 ? this.items.length - 1 : --this.active;
    this.activate();
  }
}

window.onload = () => {
  const backdrop = document.querySelector("[data-backdrop]");
  const menuOpenButtons = document.querySelectorAll("[data-menu-open]");
  const popupOpenButtons = document.querySelectorAll("[data-popup-open]");

  const menu = new Menu(backdrop, menuOpenButtons);
  const popup = new PopUp(backdrop, popupOpenButtons);
  const slider = new Slider();
};
