/* En JS no existen las clases, existen objetos y 
    a partir de esos objetos se instancian otros */
function MediaPlayer(config) {
  //clase, se le pasa un objeto configuracion
  this.media = config.el;
}

/* Los metodos se agregan al prototype */
MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
  if (!this.media.paused) {
    this.pause();
    return;
  }
  this.play();
};

export default MediaPlayer;