import {Personaje, Jedi, Sith, MaestroJedi} from './personaje.js'

const infoYoda = document.querySelector("#infoYoda")
const infoDarthVader = document.querySelector("#infoDarthVader")
const divYoda = document.querySelector("#divYoda")
const divDarthVader = document.querySelector("#divDarthVader")

let yoda
let darthVader

infoYoda.addEventListener("submit", (e) => {
    e.preventDefault();
    yoda = new MaestroJedi(Object.fromEntries(new FormData(e.target)))
    e.target.style.display = "none"
    let publiYoda = /*HTML*/`
    <p>${yoda.presentarse()}</p>
    <p>${yoda.usarFuerza()}</p>
    <p>${yoda.entrenar()}</p>
    `
    
})

infoDarthVader.addEventListener("submit", (e) => {
    e.preventDefault();
    darthVader = new Sith(Object.fromEntries(new FormData(e.target)))
    e.target.style.display = "none"
    
})

