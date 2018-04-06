import { DbServiceInterface } from './db-interface';
import { Shape } from '../model/shape';

export abstract class DbServiceBase implements DbServiceInterface {
  protected readonly data = {};
  private readonly fingers = [];

  protected constructor(frets: number) {
    this.fingers = this.initFingers();
    this.data = this.generateShapes(this.fingers, frets);
  }

  protected queryData(key: string): Shape {
    return this.data[key];
  }

  abstract initFingers(): any[];

  abstract generateShapes(fingers: Array<any>, frets: number): {};

  abstract get(key: string): Shape;

  abstract query(query: any): Shape;
}
