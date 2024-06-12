import { Actor, Engine, Vector, Input } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Alchemist extends Actor {

    speed = 0

    onInitialize(engine) {
        this.game = engine

        this.graphics.use(Resources.Alchemist.toSprite())
        this.pos = new Vector(200, 400)
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.isHeld(Input.Keys.D)) {
            this.speed = 100
            this.vel = new Vector(this.speed, 0)
        } else if (engine.input.keyboard.isHeld(Input.Keys.A)) {
            this.speed = -100
            this.vel = new Vector(this.speed, 0)
        } else {
            this.vel = new Vector(0, 0)
        }
    }
}