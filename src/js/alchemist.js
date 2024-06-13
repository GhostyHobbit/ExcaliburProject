import { Actor, Engine, Vector, Input, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Alchemist extends Actor {

    speed = 0

    constructor() {
        super({width: Resources.Alchemist.width, height: Resources.Alchemist.height})
    }

    onInitialize(engine) {
        this.game = engine

        this.graphics.use(Resources.Alchemist.toSprite())
        this.pos = new Vector(200, 400)
        this.on('precollision', (event) => this.interact(event))
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.isHeld(Input.Keys.D)) {
            this.speed = 100
            this.vel = new Vector(this.speed, 0)
            this.graphics.flipHorizontal = false
        } else if (engine.input.keyboard.isHeld(Input.Keys.A)) {
            this.speed = -100
            this.vel = new Vector(this.speed, 0)
            this.graphics.flipHorizontal = true
        } else {
            this.vel = new Vector(0, 0)
        }

        
    }

    interact(event) {
        if (this.game.input.keyboard.wasPressed(Input.Keys.E)) {
            console.log("hello")
        }
    }
}