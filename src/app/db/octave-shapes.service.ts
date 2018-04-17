import { Injectable } from '@angular/core';
import { DbServiceBase, Query } from './db-service-base';

/**
 * query keys are in format
 * `tone_position` -> 'A_3', 'Csharp_1'
 */
@Injectable()
export class OctaveShapesService extends DbServiceBase {

  constructor() {
    super();
  }

  private static initFingers(): any[] {
    const fingers = [];
    fingers[0] = { 1: ['b'], 3: ['a'] };
    fingers[1] = { 1: ['a'], 3: ['g'] };
    fingers[2] = { 1: ['g'], 4: ['e', 'E'] };
    fingers[3] = { 1: ['e', 'E'], 3: ['d'] };
    fingers[4] = { 1: ['d'], 4: ['b'] };
    return fingers;
  }

  generateShapes(frets: number): {} {
    return DbServiceBase.generateShapes(frets, OctaveShapesService.initFingers());
  }

  public generateKey(query: Query): string {
    return `${query.tone.key}_${query.shapeNo}`;
  }
}
