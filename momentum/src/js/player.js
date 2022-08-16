import songs from "./songs.json";
const shuffle = require("lodash.shuffle");

class Player {
  constructor(rootSelector) {
    this.refs = this.getRefs(rootSelector);
    this.audio = new Audio();

    this.songs = shuffle(songs);
    this.currentSong = 0;
    this.audio.src = this.songs[this.currentSong].src;
    this.audio.currentTime = 0;

    this.renderSongsList();
    this.setActiveSong();
    this.bindEvents();
  }

  playPrev() {
    this.currentSong =
      this.currentSong <= 0 ? this.songs.length - 1 : this.currentSong - 1;
    this.audio.src = this.songs[this.currentSong].src;
    this.audio.currentTime = 0;
    this.refs.playBtn.dataset.action = "play";
    this.playAudio();
    this.refs.prevBtn.blur();
  }

  playNext() {
    this.currentSong = (this.currentSong + 1) % this.songs.length;
    this.audio.src = this.songs[this.currentSong].src;
    this.audio.currentTime = 0;
    this.refs.playBtn.dataset.action = "play";
    this.playAudio();
    this.refs.nextBtn.blur();
  }

  playAudio() {
    if (this.refs.playBtn.dataset.action === "play") {
      this.audio.play();
      this.refs.playBtn.dataset.action = "pause";
    } else {
      this.refs.playBtn.dataset.action = "play";
      this.audio.pause();
    }
    this.setActiveSong();
    this.refs.playBtn.blur();
  }

  setActiveSong() {
    const activeSong = this.refs.songsList.querySelector(
      ".player__song--active"
    );
    if (activeSong) {
      activeSong.classList.remove("player__song--active");
    }
    this.refs.songsList.children[this.currentSong].classList.add(
      "player__song--active"
    );
  }

  renderSongsList() {
    const songsMarkup = this.songs
      .map(
        ({ title }) => `
        <li class="player__song">${title}</li>`
      )
      .join("\n");
    this.refs.songsList.innerHTML = songsMarkup;
  }

  bindEvents() {
    this.refs.playBtn.addEventListener("click", this.playAudio.bind(this));
    this.refs.prevBtn.addEventListener("click", this.playPrev.bind(this));
    this.refs.nextBtn.addEventListener("click", this.playNext.bind(this));
    this.audio.addEventListener("ended", this.playNext.bind(this));
  }

  getRefs(rootSelector) {
    const rootElem = document.querySelector(rootSelector);
    return {
      playBtn: rootElem.querySelector('[data-action="play"]'),
      prevBtn: rootElem.querySelector('[data-action="prev"]'),
      nextBtn: rootElem.querySelector('[data-action="next"]'),
      songsList: rootElem.querySelector(".player__list"),
    };
  }
}

export { Player };
