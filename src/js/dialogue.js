import { Actor, Engine, Vector, Input } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Label, FontUnit, Font} from "excalibur";
import { Game } from "./game.js";

export class Dialogue extends Actor {

    constructor() {
        super({width: Resources.Dialogue.width, height: Resources.Dialogue.height})
    }

    onInitialize() {
        this.graphics.use(Resources.Dialogue.toSprite())
        this.pos = new Vector(620, 200)

        let label = new Label({
            text: 'Score: 0',
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
    
        this.Game.add(label)
        label.text = 'Score: 100'
    }
}