import { Actor, Scene, Vector } from "excalibur"
import { Resources } from './resources'
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'
import { Dialogue } from './dialogue.js'
import { SceneTransition } from "./sceneTransition.js"

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

        const scene = new SceneTransition()
        this.add(scene)

        const letter = new Letter()
        letter.pos = new Vector(2350, 550)
        this.add(letter)
    }
    onActivate(ctx) {
      
    }
}