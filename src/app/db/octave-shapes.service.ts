import { Injectable } from '@angular/core';
import { Tone } from '../model/tone';
import { Shape } from '../model/shape';

@Injectable()
export class OctaveShapesService {
  private data = {
    'C_1': { frets: 6, base: 0, fingers: { 1: ['b'], 4: ['a'] } },
    'C_2': { frets: 6, base: 2, fingers: { 1: ['a'], 3: ['g'] } },
    'C_3': { frets: 6, base: 4, fingers: { 1: ['g'], 4: ['e', 'E'] } },
    'C_4': { frets: 6, base: 6, fingers: { 1: ['e', 'E'], 3: ['d'] } },
    'C_5': { frets: 6, base: 8, fingers: { 1: ['d'], 4: ['b'] } },
  };

  constructor() { }

  query(query: {'tone': Tone, 'shape': number}): Shape {
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
