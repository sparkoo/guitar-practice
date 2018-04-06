import { Injectable } from '@angular/core';
import { Shape } from '../model/shape';
import { DbServiceBase } from './db-service-base';

/**
 * query keys are in format
 * `tone_maj/min_position` -> 'A_maj_3', 'Csharp_min_1'
 */
@Injectable()
export class ChordsService extends DbServiceBase {
  constructor() {
    super(5);
  }

  initFingers(): any[] {
    const fingers = [];
    fingers[0] = { 1: ['b'], 3: ['a'] };
    fingers[1] = { 1: ['a'], 3: ['g'] };
    fingers[2] = { 1: ['g'], 4: ['e', 'E'] };
    fingers[3] = { 1: ['e', 'E'], 3: ['d'] };
    fingers[4] = { 1: ['d'], 4: ['b'] };
    return fingers;
  }

  generateShapes(fingers: Array<any>, frets: number): {} {
    return undefined;
  }

  get(key: string): Shape {
    return undefined;
  }

  query(query: any): Shape {
    return undefined;
  }

}
