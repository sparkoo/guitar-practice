import { Injectable } from '@angular/core';
import { DbServiceBase } from '../../db/db-service-base';

@Injectable()
export class ArpeggiosService extends DbServiceBase {

  constructor() {
    super();
  }

  private static initMajorFingers(): any[] {
    const fingers = [];
    fingers[0] = { 0: ['E', 'g', 'e'], 1: ['b'], 2: ['d'], 3: ['E', 'a', 'e'] };
    fingers[1] = { 0: ['d'], 1: ['E', 'a', 'e'], 3: ['d', 'g', 'b'] };
    fingers[2] = { 1: ['d', 'g', 'b'], 3: ['a'], 4: ['E', 'b', 'e'] };
    fingers[3] = { 0: ['a'], 1: ['E', 'b', 'e'], 2: ['g'], 3: ['a', 'd'] };
    fingers[4] = { 0: ['g'], 1: ['a', 'd'], 3: ['E', 'g', 'e'], 4: ['b'] };
    return fingers;
  }

  private static initMinorFingers(): any[] {
    const fingers = [];
    fingers[0] = { 0: ['g'], 1: ['d', 'b'], 3: ['E', 'a', 'e'], 4: ['b'] };
    fingers[1] = { 1: ['E', 'a', 'e'], 2: ['b'], 3: ['d', 'g'], 4: ['a'] };
    fingers[2] = { 1: ['d', 'g'], 2: ['a'], 4: ['E', 'g', 'b', 'e'] };
    fingers[3] = { 1: ['E', 'g', 'b', 'e'], 3: ['a', 'd'], 4: ['E', 'e'] };
    fingers[4] = { 1: ['a', 'd'], 2: ['E', 'e'], 3: ['g'], 4: ['d', 'b'] };
    return fingers;
  }

  generateShapes(frets: number): {} {
    return DbServiceBase.generateMajMinShapes(frets,
      ArpeggiosService.initMajorFingers(),
      ArpeggiosService.initMinorFingers());
  }
}
