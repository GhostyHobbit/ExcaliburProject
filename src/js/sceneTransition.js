import { Actor, Engine, Vector, Input, Keys, Camera, ScreenElement, BoundingBox } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class SceneTransition extends Actor {
    constructor() {
        super()
        this.graphics.use(Resources.SceneTransition.toSprite())
        this.pos = new Vector(3740, 450)
    }
    onInitialize() {
        
    }
}