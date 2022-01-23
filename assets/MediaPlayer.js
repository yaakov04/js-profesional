/* En JS no existen las clases, existen objetos y 
    a partir de esos objetos se instancian otros */
function MediaPlayer(config) {
  //clase, se le pasa un objeto configuracion
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
}

/* Los metodos se agregan al prototype */
MediaPlayer.prototype._initPlugins= function(){
  this.plugins.forEach(plugin => {
    plugin.run(this);
  })
};

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

MediaPlayer.prototype.mute = function(){
  this.media.muted = true;
}

MediaPlayer.prototype.unmute = function(){
  this.media.muted = false;
}

MediaPlayer.prototype.toggleMute = function(){
  if (!this.media.muted) {
    this.mute();
    return;
  }
  this.unmute();
}

export default MediaPlayer;