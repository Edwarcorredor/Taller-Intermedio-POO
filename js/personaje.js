class Personaje{
    #nombre
    #fuerza
    constructor({nombre = "nombre",fuerza = 0}){
        this.#nombre = nombre;
        this.#fuerza = parseInt(fuerza);
    }
    presentarse() {
        let presentacion = `El nombre del personaje es ${this.#nombre} y su nivel de fuerza es ${this.#fuerza}`
        return presentacion
    }
    set setFuerza(fuerza){
        this.#fuerza += fuerza
    }
    get getFuerza(){
        return this.#fuerza
    }
}

class Jedi extends Personaje{
    constructor({nombre,fuerza}){
        super({nombre,fuerza})
    }
    usarFuerza(){
        return "El Jedi esta usando la fuerza para proteger la galaxia"
    }
    entrenar(){
        this.setFuerza(10)
    }
}

class Sith extends Personaje{
    constructor({nombre,fuerza}){
        super({nombre,fuerza})
    }
    usarFuerza(){
        return "El Sith esta usando la fuerza para conquistar la galaxia"
    }
    corromper(){
        this.setFuerza(-5)
    }
}

class MaestroJedi extends Jedi{
    constructor({nombre,fuerza}){
        super({nombre,fuerza})
    }
    enseñar(){
        this.setFuerza(20)
        return `La fuerza después de entrenar es ${this.getFuerza} `
    }
}

export {Personaje, Jedi, Sith, MaestroJedi}