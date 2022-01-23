const video = document.querySelector('video');
    const button = document.querySelector('button');

    /* En JS no existen las clases, existen objetos y 
    a partir de esos objetos se instancian otros */
    function MediaPlayer(config){ //clase, se le pasa un objeto configuracion
      this.media = config.el;
    }

    /* Los metodos se agregan al prototype */
    MediaPlayer.prototype.play = function(){
      this.media.play();
    }

    MediaPlayer.prototype.pause=function(){
      this.media.pause();
    }

    MediaPlayer.prototype.togglePlay=function(){
      if (!this.media.paused) {
        this.pause();
        return
      }
      this.play();
    }

    const player = new MediaPlayer({el:video})

    button.onclick = () => player.togglePlay()

    /* 
    Atributo async para los scripts externos,
    con este atributo la peticion del script 
    no detiene el procesamiento del dom, una 
    vez que se haya cargado el script se detiene 
    el procesamieno del dom y se ejecuta el script
    y hasta que se termina la ejecucion continua 
    el procesamiento del dom
    */
   /*
   Atributo defer, detiene la ejecucion del script
   hasta que se finalice el procesamiento del dom
   */