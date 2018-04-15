import { Injectable } from '@angular/core';
import { DbServiceBase } from '../../db/db-service-base';

@Injectable()
export class ScalesService extends DbServiceBase {

  constructor() {
    super();
  }

  private static initMajorFingers(): any[] {
    const fingers = [];
    fingers[0] = {
      0: ['E', 'a', 'd', 'g', 'b', 'e'],
      1: ['E', 'b', 'e'],
      2: ['a', 'd', 'g'],
      3: ['E', 'a', 'd', 'b', 'e']
    };
    fingers[1] = {
      0: ['a', 'd', 'g'],
      1: ['E', 'a', 'd', 'b', 'e'],
      2: ['g'],
      3: ['E', 'a', 'd', 'g', 'b', 'e'],
      4: ['b']
    };
    fingers[2] = {
      0: ['g'],
      1: ['E', 'a', 'd', 'g', 'b', 'e'],
      2: ['b'],
      3: ['E', 'a', 'd', 'g', 'e'],
      4: ['E', 'a', 'b', 'e']
    };
    fingers[3] = {
      0: ['E', 'a', 'd', 'g', 'e'],
      1: ['E', 'a', 'b', 'e'],
      2: ['d', 'g'],
      3: ['E', 'a', 'd', 'g', 'b', 'e']
    };
    fingers[4] = {
      0: ['d', 'g'],
      1: ['E', 'a', 'd', 'g', 'b', 'e'],
      3: ['E', 'a', 'd', 'g', 'b', 'e'],
      4: ['E', 'b', 'e']
    };
    return fingers;
  }

  private static initMinorFingers(): any[] {
    const fingers = [];
    fingers[0] = { 0: ['g'], 1: ['E', 'a', 'd', 'b', 'e'], 3: ['E', 'a', 'd', 'g', 'e'], 4: ['b'] };
    fingers[1] = { 1: ['E', 'a', 'd', 'g', 'e'], 2: ['b'], 3: ['d', 'g'], 4: ['E', 'a', 'b', 'e'] };
    fingers[2] = { 1: ['d', 'g'], 2: ['E', 'a', 'b', 'e'], 4: ['E', 'a', 'd', 'g', 'b', 'e'] };
    fingers[3] = { 1: ['E', 'a', 'd', 'g', 'b', 'e'], 3: ['a', 'd', 'g'], 4: ['E', 'b', 'e'] };
    fingers[4] = { 1: ['a', 'd', 'g'], 2: ['E', 'b', 'e'], 3: ['g'], 4: ['E', 'a', 'd', 'b', 'e'] };
    return fingers;
  }

  generateShapes(frets: number): {} {
    return DbServiceBase.generateMajMinShapes(frets,
      ScalesService.initMajorFingers(),
      ScalesService.initMinorFingers());
  }

}
