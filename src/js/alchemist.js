import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Alchemist extends Actor {

    onInitialize() {
        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(200, -100)
    }
}