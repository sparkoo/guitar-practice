import { Injectable } from '@angular/core';
import { Position } from './position.model';

@Injectable()
export class DbService {

  constructor() { }

  get(): Position {
    return { frets: 6, fingers: { 1: [2], 3: [3], 4: [4] } };
  }
}
