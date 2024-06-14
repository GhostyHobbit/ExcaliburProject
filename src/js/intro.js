import { Actor, Scene, Vector } from "excalibur"
import { Resources } from './resources'
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'
import { Dialogue } from './dialogue.js'

export class Intro extends Scene {
    constructor() {
        super()
    }

    onInitialize(engine) {
        const intro = new Actor()
        intro.pos = new Vector(1890, 360)
        this.add(intro)
        intro.graphics.use(Resources.Intro.toSprite())

        const alchemist = new Alchemist()
        alchemist.graphics.use(Resources.AlchemistLamp.toSprite())
        alchemist.pos = new Vector(0, 600)
        this.add(alchemist)

        const letter = new Letter()
        this.add(letter)

        const dialogue = new Dialogue()
        this.add(dialogue)
    }
    onActivate(ctx) {
      
    }
}