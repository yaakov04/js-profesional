/* En JS no existen las clases, existen objetos y 
    a partir de esos objetos se instancian otros */
class MediaPlayer {
  constructor(config) {
    //clase, se le pasa un objeto configuracion
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
  }
  /* Los metodos se agregan al prototype */
  _initPlugins() {
    const player = {
      media: this.media,
      play: () => this.play(),
      pause: () => this.pause(),

      get muted() {
        return this.media.muted;
      },

      set muted(value) {
        this.media.muted = value;
      }
    };

    this.plugins.forEach(plugin => {
      plugin.run(player);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    if (!this.media.paused) {
      this.pause();
      return;
    }
    this.play();
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  toggleMute() {
    if (!this.media.muted) {
      this.mute();
      return;
    }
    this.unmute();
  }
}








export default MediaPlayer;