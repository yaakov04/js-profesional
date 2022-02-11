import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const buttonPlay = document.querySelector("button#btn-play");
const buttonMute = document.querySelector("button#btn-mute");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
/*
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js').catch(error => {
    console.log(error.message);
  })
}
*/

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

/*
    Event loop
    Modelo de concurrencia que aparenta el multihilo

    Memory Heap
    la informacion de las variables son colocadas en un monticulo, que denota 
    una gran region de memoria sin estructura u orden

    Stack
    Las llamadas a funcion forman una pila de frames. Un frame encapsula información 
    como el contexto y las variables locales de una función.

    Queue
    Un lista de tareas para ser procesadas. El event loop vigila el stack y la cola de tareas, y cuando el stack esta vacio
    coloca las tareas de la cola al stack.
    Hay tres colas de tarea: Schedule task, tareas que no se van a realizar de manera inmediata;
    MicroTask Queue, se agendan las promesas, esta lista es la que tiene mayor prioridad;
    Task Queue Aqui se agendan las tareas que ya estan listas para pasar al stack.
  */
