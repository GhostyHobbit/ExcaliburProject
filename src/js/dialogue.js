import { Actor, Engine, Vector, Input } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Label, FontUnit, Font} from "excalibur";
import { Game } from "./game.js";
import { Alchemist } from "./alchemist.js";

export class Dialogue extends Actor {

    dialogueShowing = false

    constructor() {
        super({width: Resources.Dialogue.width, height: Resources.Dialogue.height})
    }

    onInitialize() {
        this.graphics.use(Resources.Dialogue.toSprite())

        let label = new Label({
            text: 'Score: 0',
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
    
        this.addChild(label)
        label.text = 'Score: 100'
     }

     onPostUpdate() {
        this.pos = new Vector (this.scene.actors[2].pos.x, 200)
     }
}