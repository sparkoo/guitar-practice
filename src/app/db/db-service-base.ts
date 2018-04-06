import { DbServiceInterface } from './db-interface';
import { Shape } from '../model/shape';
import { ShapeGen } from './shapegen';

export abstract class DbServiceBase implements DbServiceInterface {
  private readonly data = {};
  private readonly fingers = [];

  protected constructor(frets: number) {
    this.fingers = this.initFingers();
    this.data = ShapeGen.generateShapes(this.fingers, frets);
  }

  protected queryData(key: string): Shape {
    return this.data[key];
  }

  abstract initFingers(): any[];

  abstract get(key: string): Shape;

  abstract query(query: any): Shape;
}
