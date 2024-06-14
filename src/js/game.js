import '../css/style.css'
import { Actor, Engine, Vector, Camera, ScreenElement, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Label, FontUnit, Font} from "excalibur";
import { LevelOne } from './levelone.js'
import { Intro } from './intro.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1260,
            height: 720,
            displayMode: DisplayMode.FitScreen, })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add('intro', new Intro())
        this.add('levelone', new LevelOne())
        this.goToScene('intro')

        let label = new Label({
            text: 'Score: 0',
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
    
        this.add(label)
        label.text = 'Score: 100'

    }
}

new Game() 
