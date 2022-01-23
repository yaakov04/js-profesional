import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js"

const video = document.querySelector("video");
const buttonPlay = document.querySelector("button#btn-play");
const buttonMute = document.querySelector('button#btn-mute');

const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay(),
] });

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

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
