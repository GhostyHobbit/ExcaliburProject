import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources';

export class Door extends Actor {
  constructor() {
    super({
      width: Resources.L1Door.width,
      height: Resources.L1Door.height,
    });
    this.body.collisionType = CollisionType.Passive;
  }

  onInitialize(engine) {
    this.graphics.use(Resources.L1Door.toSprite());
    this.pos = new Vector(2720,437)

    //if (engine.input.keyboard.isHeld(Keys.E)) {
      //this.goToScene('intro')
    //}
  }
}