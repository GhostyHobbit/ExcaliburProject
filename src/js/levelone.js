import { Actor, Scene } from "excalibur"
import { Resources } from './resources'

export class LevelOne extends Scene {
    onInitialize(engine) {
        const levelonescreenone = new Actor()
        this.add(levelonescreenone)
        levelonescreenone.graphics.use(Resources.LevelOneScreenOne.toSprite())
    }
    onActivate(ctx) {
        console.log("Cool level ofz idrk")
    }
}