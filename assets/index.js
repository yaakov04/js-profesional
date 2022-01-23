import MediaPlayer from "./MediaPlayer.js";

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new MediaPlayer({ el: video });

button.onclick = () => player.togglePlay();

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
