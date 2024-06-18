import { Actor, Scene, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Alchemist } from './alchemist.js'
import { Letter } from './letter.js'
import { InvisibleFloor } from './invisiblefloor.js'
import { Door } from './door.js'

export class LevelTwo extends Scene {
    onInitialize(engine) {
        const leveltwoscreen = new Actor()
        leveltwoscreen.pos = new Vector(1200, 360)
        this.add(leveltwoscreen)
        leveltwoscreen.graphics.use(Resources.levelTwoPlaceholder.toSprite())

        const invisfloor = new InvisibleFloor()
        invisfloor.pos = new Vector(1900, 700)
        this.add(invisfloor)

        const door = new Door()
        door.pos = new Vector(2720,437)
        this.add(door)
    }
    onActivate(ctx) {
        const alchemist = new Alchemist()
        alchemist.pos = new Vector(0, 600)
        this.add(alchemist)
    }
}