import { DbServiceInterface } from './db-interface';
import { Shape } from '../model/shape';
import { ShapeGen } from './shapegen';

export abstract class DbServiceBase implements DbServiceInterface {
  readonly frets = 5;
  readonly data = {};
  readonly fingers = [];

  protected constructor() {
    this.fingers = this.initFingers();
    this.data = ShapeGen.generateShapes(this.fingers, this.frets);
  }

  abstract initFingers(): [any];
  abstract get(key: string): Shape;
  abstract query(query: any): Shape;
}
