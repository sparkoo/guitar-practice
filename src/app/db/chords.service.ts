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

  private static initMajorFingers(): any[] {
    const fingers = [];
    fingers[0] = { 0: ['g', 'e', 'E', 'a', 'd', 'b'], 1: ['b'], 2: ['d'], 3: ['a'] };
    fingers[1] = { 1: ['a', 'e', 'd', 'g', 'b'], 3: ['d', 'g', 'b'] };
    fingers[2] = { 1: ['d', 'g', 'b', 'E', 'a'], 3: ['a'], 4: ['E'] };
    fingers[3] = { 1: ['e', 'E', 'b', 'g', 'a', 'd'], 2: ['g'], 3: ['d', 'a'] };
    fingers[4] = { 1: ['d'], 3: ['g', 'e'], 4: ['b'] };
    return fingers;
  }

  private static initMinorFingers(): any[] {
    const fingers = [];
    fingers[0] = { 0: ['g'], 1: ['b', 'd'], 3: ['a'] };
    fingers[1] = { 1: ['a', 'e', 'd', 'g', 'b'], 2: ['b'], 3: ['d', 'g'] };
    fingers[2] = { 1: ['d', 'g', 'a', 'E'], 2: ['a'], 4: ['E'] };
    fingers[3] = { 1: ['e', 'E', 'b', 'g', 'd', 'a'], 3: ['d', 'a'] };
    fingers[4] = { 1: ['d'], 2: ['e'], 3: ['g'], 4: ['b'] };
    return fingers;
  }

  generateShapes(frets: number): {} {
    return DbServiceBase.generateMajMinShapes(frets,
      ChordsService.initMajorFingers(),
      ChordsService.initMinorFingers());
  }

  query(query: any): Shape {
    return undefined;
  }
}
