import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'

export class Game extends Engine {

    constructor() {
        super({ width: 1260, height: 720 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        const alchemist = new Alchemist()
        this.add(alchemist)

        const letter = new Letter()
        this.add(letter)
    }
}

new Game() 
