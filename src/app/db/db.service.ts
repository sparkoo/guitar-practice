import { Injectable } from '@angular/core';
import { Shape } from '../model/shape';
import { Type } from '../model/type';
import { Tone } from '../model/tone';
import { OctaveShapesService } from './octave-shapes.service';
import { ChordsService } from './chords.service';
import { PentatonicService } from './pentatonic.service';

@Injectable()
export class DbService {
  constructor(private octaveShapesService: OctaveShapesService,
              private chordService: ChordsService,
              private pentatonicService: PentatonicService) { }

  query(query: Query): Shape {
    return undefined;
  }

  getOctaveShape(key: string): Shape {
    return this.octaveShapesService.get(key);
  }

  getChord(key: string): Shape {
    return this.chordService.get(key);
  }

  getPentatonic(key: string) {
    return this.pentatonicService.get(key);
  }
}

export interface Query {
  type: Type;
  tone: Tone;
  shape: number;
}

