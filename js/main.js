import { Personaje } from './personaje.js'

const infoPersonaje = document.querySelector('#infoPersonaje');
const publicarPersonaje = document.querySelector('#publicarPersonaje');

const guardarPersonaje = function(e){
    e.preventDefault();
    const personaje = new Personaje(Object.fromEntries(new FormData(e.target)))
    publicarPersonaje.innerHTML = personaje.presentarse()
}

infoPersonaje.addEventListener("submit",guardarPersonaje);