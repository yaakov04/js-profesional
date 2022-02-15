/* En JS no existen las clases, existen objetos y 
    a partir de esos objetos se instancian otros */
class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>
  container: HTMLElement;

  constructor(config) {
    //clase, se le pasa un objeto configuracion
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlayer();
    this.initPlugins();
  }

  private initPlayer(){
    this.container = document.createElement('div');
    this.container.style.position = 'relative';

    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }

  /* Los metodos se agregan al prototype */
  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
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