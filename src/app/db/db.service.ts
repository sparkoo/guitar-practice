import { Injectable } from '@angular/core';
import { Shape } from '../model/shape';
import { Type } from '../model/type';
import { Tone } from '../model/tone';
import { OctaveShapesService } from './octave-shapes.service';

@Injectable()
export class DbService {
  constructor(private octaveShapesService: OctaveShapesService) { }

  get(): Shape {
    return { frets: 6, base: 0, fingers: { 0: ['g', 'e'], 1: ['b'], 3: ['d'], 4: ['a'] } };
  }

  query(query: Query): Shape {
    return this.octaveShapesService.query({tone: query.tone, shape: query.shape});
  }

  getOctaveShape(key: string): Shape {
    return this.octaveShapesService.get(key);
  }
}

export interface Query {
  type: Type;
  tone: Tone;
  shape: number;
}

