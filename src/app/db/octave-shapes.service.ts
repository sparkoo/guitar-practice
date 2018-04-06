import { Injectable } from '@angular/core';
import { Tone, ToneUp } from '../model/tone';
import { Shape } from '../model/shape';
import { DbServiceBase } from './db-service-base';

/**
 * query keys are in format
 * `tone_position` -> 'A_3', 'Csharp_1'
 */
@Injectable()
export class OctaveShapesService extends DbServiceBase {
  constructor() {
    super(5);
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
    const data = {};
    const CBases = [0, 2, 4, 7, 9];
    const fingers = OctaveShapesService.initFingers();
    Object.keys(ToneUp).filter(t => typeof ToneUp[t] === 'number').forEach((t, ti) => {
      for (let p = 0; p < 5; p++) {
        const shapeName = `${t}_${p + 1}`;
        data[shapeName] = {
          frets: frets,
          base: (CBases[p] + ti) % 12,
          fingers: fingers[p]
        };
      }
    });
    return data;
  }

  query(query: { tone: Tone, shape: number }): Shape {
    const queryString = `${Tone[query.tone]}_${query.shape}`;
    return this.queryData(queryString);
  }
}
