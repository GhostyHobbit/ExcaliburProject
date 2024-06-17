
import { Actor, Engine, Vector, Input, Keys, Camera, ScreenElement, BoundingBox, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { SceneTransition } from "./sceneTransition.js"

export class Alchemist extends Actor {

    speed = 0

    constructor() {
        super({width: Resources.Alchemist.width, height: Resources.Alchemist.height})
        this.body.collisionType = CollisionType.Active
    }

    onInitialize(engine) {
        this.game = engine

        // this.graphics.use(Resources.Alchemist.toSprite())
        // this.pos = new Vector(150, 543)
        this.on('precollision', (event) => this.interact(event))

        this.scene.camera.strategy.lockToActor(this)
        this.scene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 3780, 720))
        this.on('collisionstart', (event) => this.sceneTransition(event))
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.isHeld(Input.Keys.D)) {
            this.speed = 200
            this.vel = new Vector(this.speed, 0)
            this.graphics.flipHorizontal = false
        } else if (engine.input.keyboard.isHeld(Input.Keys.A)) {
            this.speed = -200
            this.vel = new Vector(this.speed, 0)
            this.graphics.flipHorizontal = true
        } else {
            this.vel = new Vector(0, 0)
        }
    }

    interact() {
        if (this.game.input.keyboard.wasPressed(Input.Keys.E)) {
            console.log("hello")
        }
    }
    sceneTransition(event) {
        if(event.other instanceof SceneTransition) {
            this.scene.engine.goToScene('levelone')
        }
    }
}