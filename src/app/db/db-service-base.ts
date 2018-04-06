import { DbServiceInterface } from './db-interface';
import { Shape } from '../model/shape';

export abstract class DbServiceBase implements DbServiceInterface {
  protected readonly data = {};

  protected constructor(frets: number) {
    this.data = this.generateShapes(frets);
  }

  protected queryData(key: string): Shape {
    return this.data[key];
  }

  abstract generateShapes(frets: number): {};

  public get(key: string): Shape {
    return this.data[key];
  }

  abstract query(query: any): Shape;
}
