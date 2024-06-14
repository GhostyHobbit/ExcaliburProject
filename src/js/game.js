import '../css/style.css'
import { Actor, Engine, Vector, Camera, ScreenElement, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Label, FontUnit, Font} from "excalibur";
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'
import { Dialogue } from './dialogue.js'
import { LevelOne } from './levelone.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1260,
            height: 720,
            displayMode: DisplayMode.FitScreen, })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        const letter = new Letter()
        this.add(letter)

        const dialogue = new Dialogue()
        this.add(letter)

        const alchemist = new Alchemist()
        this.add(alchemist)

        this.add('levelone', new LevelOne())
        // this.goToScene('levelone')

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
