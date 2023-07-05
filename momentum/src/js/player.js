import { Range } from "./range";
import songs from "./songs.json";
const shuffle = require("lodash.shuffle");

class Player {
  constructor(rootSelector) {
    this.refs = this.getRefs(rootSelector);
    this.audio = new Audio();

    this.songs = shuffle(songs);
    this.currentSong = 0;
    this.audio.src = this.songs[this.currentSong].src;

    this.volumeControl = new Range({
      rootSelector: ".player__volume-controls .range",
      onInputCallback: this.setVolume.bind(this),
    });
    this.volumeControl.setValue(50);
    this.setVolume(50);

    this.durationControl = new Range({
      rootSelector: ".player__duration-controls .range",
      onInputCallback: this.setDuration.bind(this),
    });
    this.durationControl.setRange(0, this.audio.duration);
    this.setDuration(0);

    this.renderSongsList();
    this.setActiveSong();
    this.bindEvents();
  }

  setDuration(time) {
    const duration = this.audio.duration ? this.audio.duration : 0;
    this.audio.currentTime = (duration * time) / 100;
    console.log(time);
    this.renderDurationTime();
  }

  renderDurationTime() {
    const currentTime = this.audio.currentTime ? this.audio.currentTime : 0;
    const duration = this.audio.duration ? this.audio.duration : 0;
    const currentSeconds = Math.floor(currentTime % 60);
    const currentMinutes = Math.floor(currentTime / 60);
    const durationSeconds = Math.floor(duration % 60);
    const durationMinutes = Math.floor(duration / 60);

    this.refs.currentTime.textContent = `${currentMinutes}:${currentSeconds
      .toString()
      .padStart(2, "0")}`;
    this.refs.durationTime.textContent = `${durationMinutes}:${durationSeconds
      .toString()
      .padStart(2, "0")}`;

    this.durationControl.setValue(
      duration ? Math.floor((currentTime * 100) / duration) : 0
    );
  }

  onPlayStarted(e) {
    return;
    const currentTime = this.audio.currentTime;
    const duration = this.audio.duration;
    this.durationControl.setRange(0, currentTime, duration);
    this.renderDurationTime();
    console.log(currentTime, duration);
  }

  setVolume(level) {
    this.audio.volume = level / 100;
    this.setVolumeIcon();
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

  setVolumeIcon() {
    const volumeValue = this.volumeControl.getValue();
    let iconName;
    if (volumeValue > 66) {
      iconName = "high-volume";
    } else if (volumeValue > 33) {
      iconName = "mid-volume";
    } else if (volumeValue > 0) {
      iconName = "low-volume";
    } else {
      iconName = "mute-volume";
    }
    this.refs.volumeBtn.dataset.icon = iconName;
  }

  onVolumeClick() {
    const volumeLevel = this.volumeControl.getValue() > 0 ? 0 : 50;
    this.volumeControl.setValue(volumeLevel);
    this.setVolume(volumeLevel);
  }

  bindEvents() {
    this.refs.playBtn.addEventListener("click", this.playAudio.bind(this));
    this.refs.prevBtn.addEventListener("click", this.playPrev.bind(this));
    this.refs.nextBtn.addEventListener("click", this.playNext.bind(this));
    this.refs.volumeBtn.addEventListener(
      "click",
      this.onVolumeClick.bind(this)
    );
    this.audio.addEventListener("canplay", this.onPlayStarted.bind(this));
    this.audio.addEventListener("ended", this.playNext.bind(this));
  }

  getRefs(rootSelector) {
    const rootElem = document.querySelector(rootSelector);
    return {
      playBtn: rootElem.querySelector('[data-action="play"]'),
      prevBtn: rootElem.querySelector('[data-action="prev"]'),
      nextBtn: rootElem.querySelector('[data-action="next"]'),
      volumeBtn: rootElem.querySelector(".player__volume-controls .button"),
      currentTime: rootElem.querySelector(
        ".player__duration-controls > .player__duration-time:first-of-type"
      ),
      durationTime: rootElem.querySelector(
        ".player__duration-controls > .player__duration-time:last-of-type"
      ),
      songsList: rootElem.querySelector(".player__list"),
    };
  }
}

export { Player };
