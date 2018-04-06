import { Injectable } from '@angular/core';
import { Tone, ToneUp } from '../model/tone';
import { Shape } from '../model/shape';

@Injectable()
export class OctaveShapesService {
  private readonly frets = 5;
  private data = {};
  private fingers = [];

  constructor() {
    this.initFingers();
    this.initData();
  }

  private initFingers() {
    this.fingers[0] = { 1: ['b'], 3: ['a'] };
    this.fingers[1] = { 1: ['a'], 3: ['g'] };
    this.fingers[2] = { 1: ['g'], 4: ['e', 'E'] };
    this.fingers[3] = { 1: ['e', 'E'], 3: ['d'] };
    this.fingers[4] = { 1: ['d'], 4: ['b'] };
  }

  private initData() {
    const Cbases = [0, 2, 4, 7, 9];
    Object.keys(ToneUp).filter(t => typeof ToneUp[t] === 'number').forEach((t, ti) => {
      for (let p = 0; p < 5; p++) {
        const shapeName = `${t}_${p + 1}`;
        this.data[shapeName] = {
          frets: this.frets,
          base: (Cbases[p] + ti) % 12,
          fingers: this.fingers[p]
        };
      }
    });
  }

  query(query: { 'tone': Tone, 'shape': number }): Shape {
    // console.log('query octave shape: ', query);
    const queryString = Tone[query.tone] + '_' + query.shape;
    // console.log('searching key: ', queryString);
    const shape = this.data[queryString];
    // console.log('found shape: ', shape);
    return shape;
  }

  get(query: string): Shape {
    // console.log('get octave shape: ', query);
    const shape = this.data[query];
    // console.log('found shape: ', shape);
    return shape;
  }
}
