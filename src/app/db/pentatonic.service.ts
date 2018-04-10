import { Injectable } from '@angular/core';
import { DbServiceBase } from './db-service-base';
import { Shape } from '../model/shape';
import { ToneUp } from '../model/tone';

@Injectable()
export class PentatonicService extends DbServiceBase {

  constructor() {
    super(5);
  }

  private static initMajorFingers(): any[] {
    const fingers = [];
    fingers[0] = { 0: ['E', 'a', 'd', 'g', 'e'], 1: ['b'], 2: ['d', 'g'], 3: ['E', 'a', 'b', 'e'] };
    fingers[1] = { 0: ['d', 'g'], 1: ['E', 'a', 'b', 'e'], 3: ['E', 'a', 'd', 'g', 'b', 'e'] };
    fingers[2] = { 1: ['E', 'a', 'd', 'g', 'b', 'e'], 3: ['a', 'd', 'g'], 4: ['E', 'b', 'e'] };
    fingers[3] = { 0: ['a', 'd', 'g'], 1: ['E', 'b', 'e'], 2: ['g'], 3: ['E', 'a', 'd', 'b', 'e'] };
    fingers[4] = { 0: ['g'], 1: ['E', 'a', 'd', 'b', 'e'], 3: ['E', 'a', 'd', 'g', 'e'], 4: ['b'] };
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
    const data = {};
    const CBases = [0, 2, 4, 7, 9];
    const majorFingers = PentatonicService.initMajorFingers();
    const minorFingers = PentatonicService.initMinorFingers();
    Object.keys(ToneUp).filter(t => typeof ToneUp[t] === 'number').forEach((t, ti) => {
      for (let p = 0; p < 5; p++) {
        const majorShapeName = `${t}_maj_${p + 1}`;
        data[majorShapeName] = {
          frets: frets,
          base: (CBases[p] + ti) % 12,
          fingers: majorFingers[p]
        };
        const minorShapeName = `${t}_min_${p + 1}`;
        data[minorShapeName] = {
          frets: frets,
          base: (CBases[p] + ti) % 12,
          fingers: minorFingers[p]
        };
      }
    });
    return data;
  }

  query(query: any): Shape {
    return undefined;
  }

}
