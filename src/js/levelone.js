import { Actor, Scene, Vector } from "excalibur"
import { Resources } from './resources'
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'
import { InvisibleFloor } from './invisiblefloor.js'

export class LevelOne extends Scene {
    onInitialize(engine) {
        const levelonescreenone = new Actor()
        levelonescreenone.pos = new Vector(1900, 360)
        this.add(levelonescreenone)
        levelonescreenone.graphics.use(Resources.LevelOneScreenOne.toSprite())

        const invisfloor = new InvisibleFloor()
        invisfloor.pos = new Vector(1900, 700)
        this.add(invisfloor)
    }
    onActivate(ctx) {
        const alchemist = new Alchemist()
        alchemist.pos = new Vector(0, 600)
        this.add(alchemist)

        Resources.LevelOneMusic.play(0.8);
    }
}