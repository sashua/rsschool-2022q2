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
  constructor(rootSelector, updateIntervalMinutes) {
    this.refs = this.getRefs(rootSelector);

    this.slidesQty = 20;
    this.slideNum = Math.floor(Math.random() * this.slidesQty + 1);

    this.lastUpdateTime = 0;
    this.updateInterval = updateIntervalMinutes * 60 * 1000;

    this.prevHandler = this.setPrevBg.bind(this);
    this.nextHandler = this.setNextBg.bind(this);
    this.addHandlers();
    this.refs.bg.addEventListener("transitionend", () => this.addHandlers());
  }

  getRefs(rootSelector) {
    const rootElem = document.querySelector(rootSelector);
    const [prevBtn, nextBtn] = rootElem.querySelectorAll(".slider__button");
    return {
      bg: document.querySelector(".slider__bg"),
      prevBtn,
      nextBtn,
    };
  }

  addHandlers() {
    this.refs.prevBtn.addEventListener("click", this.prevHandler);
    this.refs.nextBtn.addEventListener("click", this.nextHandler);
  }

  removeHandlers() {
    this.refs.prevBtn.removeEventListener("click", this.prevHandler);
    this.refs.nextBtn.removeEventListener("click", this.nextHandler);
  }

  setPrevBg() {
    this.removeHandlers();
    this.setPrevNum();
    this.setBg();
    this.refs.prevBtn.blur();
  }

  setNextBg() {
    this.removeHandlers();
    this.setNextNum();
    this.setBg();
    this.refs.nextBtn.blur();
  }

  updateBg(timeOfDay) {
    if (this.timeOfDay !== timeOfDay) {
      this.timeOfDay = timeOfDay;
      this.lastUpdateTime = 0;
    }

    if (Date.now() - this.lastUpdateTime < this.updateInterval) {
      return;
    }

    this.setBg();
    this.lastUpdateTime = Date.now();
  }

  async setBg() {
    const image = new Image();
    image.src = await this.getUnsplashUrl();
    image.addEventListener(
      "load",
      () => (this.refs.bg.style.backgroundImage = `url('${image.src}')`)
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
