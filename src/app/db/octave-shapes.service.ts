import { Injectable } from '@angular/core';
import { Tone } from '../model/tone';
import { Shape } from '../model/shape';
import { DbServiceBase } from './db-service-base';

@Injectable()
export class OctaveShapesService extends DbServiceBase {
  constructor() {
    super();
  }

  initFingers() {
    const fingers = [];
    fingers[0] = { 1: ['b'], 3: ['a'] };
    fingers[1] = { 1: ['a'], 3: ['g'] };
    fingers[2] = { 1: ['g'], 4: ['e', 'E'] };
    fingers[3] = { 1: ['e', 'E'], 3: ['d'] };
    fingers[4] = { 1: ['d'], 4: ['b'] };
    return fingers;
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
