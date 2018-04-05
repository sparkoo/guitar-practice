import { Injectable } from '@angular/core';
import { Position } from './position.model';

@Injectable()
export class DbService {

  constructor() { }

  get(): Position {
    return { frets: 6, fingers: { 1: ['b'], 3: ['d'], 4: ['a'] } };
  }
}
