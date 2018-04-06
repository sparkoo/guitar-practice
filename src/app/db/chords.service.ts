import { Injectable } from '@angular/core';
import { Shape } from '../model/shape';
import { DbServiceInterface } from './db-interface';

@Injectable()
export class ChordsService implements DbServiceInterface {

  constructor() { }

  get(key: string): Shape {
    return undefined;
  }

  query(query: any): Shape {
    return undefined;
  }
}
