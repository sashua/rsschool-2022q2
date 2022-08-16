const RS_IMAGES_URL =
  "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/";

const UNSPLASH_API = "https://api.unsplash.com/photos/random?";
const UNSPLASH_KEY = "GLvO30R_mbNR5Qf1kAG2O2PmBiHVjDg5JQ5y836_iWg";

const UNSPLASH_QUERIES = {
  morning: "sunrise landscape",
  afternoon: "sunny day landscape",
  evening: "sunset landscape",
  night: "night landscape",
};

class Slider {
  constructor(elem) {
    this.elem = elem;

    this.slidesQty = 20;
    this.slideNum = Math.floor(Math.random() * this.slidesQty + 1);

    this.bgElem = document.querySelector(".slider__bg");
    [this.prevBtn, this.nextBtn] =
      this.elem.querySelectorAll(".slider__button");

    this.prevHandler = this.setPrevBg.bind(this);
    this.nextHandler = this.setNextBg.bind(this);
    this.addHandlers();
    this.bgElem.addEventListener("transitionend", () => this.addHandlers());
  }

  addHandlers() {
    this.prevBtn.addEventListener("click", this.prevHandler);
    this.nextBtn.addEventListener("click", this.nextHandler);
  }

  removeHandlers() {
    this.prevBtn.removeEventListener("click", this.prevHandler);
    this.nextBtn.removeEventListener("click", this.nextHandler);
  }

  setPrevBg() {
    this.removeHandlers();
    this.setPrevNum();
    this.setBg();
  }

  setNextBg() {
    this.removeHandlers();
    this.setNextNum();
    this.setBg();
  }

  updateTimeOfDay(timeOfDay) {
    if (this.timeOfDay !== timeOfDay) {
      this.timeOfDay = timeOfDay;
      this.setBg();
    }
  }

  async setBg() {
    const image = new Image();
    image.src = await this.getUnsplashUrl();
    console.log(image.src);
    image.addEventListener(
      "load",
      () => (this.bgElem.style.backgroundImage = `url('${image.src}')`)
    );
  }

  setPrevNum() {
    return (this.slideNum =
      this.slideNum <= 1 ? this.slidesQty : this.slideNum - 1);
  }

  setNextNum() {
    return (this.slideNum = (this.slideNum++ % this.slidesQty) + 1);
  }

  async getRsUrl() {
    return (
      RS_IMAGES_URL +
      `${this.timeOfDay}/${this.slideNum.toString().padStart(2, "0")}.jpg`
    );
  }

  async getUnsplashUrl() {
    const params = new URLSearchParams({
      orientation: "landscape",
      client_id: UNSPLASH_KEY,
      query: UNSPLASH_QUERIES[this.timeOfDay],
    });

    const responce = await fetch(UNSPLASH_API + params.toString());
    if (responce.status === 200) {
      return (await responce.json()).urls.full;
    }
    return this.getRsUrl();
  }
}

export { Slider };
