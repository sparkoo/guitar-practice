import { Injectable } from '@angular/core';
import { DbServiceBase } from './db-service-base';
import { Shape } from '../model/shape';

@Injectable()
export class ArpeggiosService extends DbServiceBase {

  constructor() {
    super();
  }

  generateShapes(frets: number): {} {
    return undefined;
  }

  query(query: any): Shape {
    return undefined;
  }

}
