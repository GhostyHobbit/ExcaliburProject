import { Actor, Engine, Vector, Input } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Letter extends Actor {

    constructor() {
        super({width: Resources.Letter.width, height: Resources.Letter.height})
    }

    onInitialize() {
        this.graphics.use(Resources.Letter.toSprite())
        this.pos = new Vector(700, 500)
    }
}