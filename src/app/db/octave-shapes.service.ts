import { Injectable } from '@angular/core';
import { Tone } from '../model/tone';
import { Shape } from '../model/shape';

@Injectable()
export class OctaveShapesService {
  private data = {};

  private fingers = [];

  constructor() {
    this.initFingers();
    this.initData();
  }

  private initFingers() {
    this.fingers[1] = { 1: ['b'], 3: ['a'] };
    this.fingers[2] = { 1: ['a'], 3: ['g'] };
    this.fingers[3] = { 1: ['g'], 4: ['e', 'E'] };
    this.fingers[4] = { 1: ['e', 'E'], 3: ['d'] };
    this.fingers[5] = { 1: ['d'], 4: ['b'] };
  }

  private initData() {
    this.data = {
      'C_1': { frets: 6, base: 0, fingers: this.fingers[1] },
      'C_2': { frets: 6, base: 2, fingers: this.fingers[2] },
      'C_3': { frets: 6, base: 4, fingers: this.fingers[3] },
      'C_4': { frets: 6, base: 7, fingers: this.fingers[4] },
      'C_5': { frets: 6, base: 9, fingers: this.fingers[5] },
      'Csharp_1': { frets: 6, base: 1, fingers: this.fingers[1] },
      'Csharp_2': { frets: 6, base: 3, fingers: this.fingers[2] },
      'Csharp_3': { frets: 6, base: 5, fingers: this.fingers[3] },
      'Csharp_4': { frets: 6, base: 8, fingers: this.fingers[4] },
      'Csharp_5': { frets: 6, base: 10, fingers: this.fingers[5] },
      'D_1': { frets: 6, base: 2, fingers: this.fingers[1] },
      'D_2': { frets: 6, base: 4, fingers: this.fingers[2] },
      'D_3': { frets: 6, base: 5, fingers: this.fingers[3] },
      'D_4': { frets: 6, base: 9, fingers: this.fingers[4] },
      'D_5': { frets: 6, base: 11, fingers: this.fingers[5] },
    };
  }

  query(query: { 'tone': Tone, 'shape': number }): Shape {
    console.log('query octave shape: ', query);
    const queryString = Tone[query.tone] + '_' + query.shape;
    console.log('searching key: ', queryString);
    const shape = this.data[queryString];
    console.log('found shape: ', shape);
    return shape;
  }

  get(query: string): Shape {
    console.log('get octave shape: ', query);
    const shape = this.data[query];
    console.log('found shape: ', shape);
    return shape;
  }
}
