import '../css/style.css'
import { Actor, Engine, Vector, Camera, ScreenElement, DisplayMode, Sound, SolverStrategy } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Label, FontUnit, Font} from "excalibur";
import { Alchemist } from './alchemist.js'  
import { Letter } from './letter.js'
import { Dialogue } from './dialogue.js'
import { LevelOne } from './levelone.js'
import { Intro } from './intro.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            displayMode: DisplayMode.FitScreen,
            physics: {
            solver: SolverStrategy.Realistic,
            displayMode: DisplayMode.FitScreen,
            gravity: new Vector(0, 1280),
    } })
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
