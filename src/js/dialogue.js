import { Actor, Engine, Vector, Input } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Label, FontUnit, Font} from "excalibur";

export class Dialogue extends Actor {

    constructor() {
        super({width: Resources.Dialogue.width, height: Resources.Dialogue.height})
    }

    onInitialize() {
        this.graphics.use(Resources.Dialogue.toSprite())
        this.pos = new Vector(620, 200)
    }
}