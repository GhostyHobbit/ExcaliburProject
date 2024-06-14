import { Actor, Scene, Vector } from "excalibur"
import { Resources } from './resources'
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'

export class LevelOne extends Scene {
    onInitialize(engine) {
        const levelonescreenone = new Actor()
        levelonescreenone.pos = new Vector(1900, 360)
        this.add(levelonescreenone)
        levelonescreenone.graphics.use(Resources.LevelOneScreenOne.toSprite())
    }
    onActivate(ctx) {
        const alchemist = new Alchemist()
        alchemist.pos = new Vector(0, 600)
        this.add(alchemist)
    }
}