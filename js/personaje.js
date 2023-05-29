class Personaje{
    #nombre
    #fuerza
    constructor({nombre = "nombre",fuerza = 0}){
        this.#nombre = nombre;
        this.#fuerza = fuerza;
    }
    presentarse() {
        let presentacion = `El nombre del personaje es ${this.#nombre} y su nivel de fuerza es ${this.#fuerza}`
        return presentacion
    }
}

export {Personaje}