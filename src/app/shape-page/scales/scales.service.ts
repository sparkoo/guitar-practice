import { Injectable } from '@angular/core';
import { DbServiceBase } from '../../db/db-service-base';

@Injectable()
export class ScalesService extends DbServiceBase {

  constructor() {
    super();
  }

  private static initMajorFingers(): any[] {
    return [
      {
        0: ['E', 'a', 'd', 'g', 'b', 'e'],
        1: ['E', 'b', 'e'],
        2: ['a', 'd', 'g'],
        3: ['E', 'a', 'd', 'b', 'e']
      },
      {
        0: ['a', 'd', 'g'],
        1: ['E', 'a', 'd', 'b', 'e'],
        2: ['g'],
        3: ['E', 'a', 'd', 'g', 'b', 'e'],
        4: ['b']
      },
      {
        0: ['g'],
        1: ['E', 'a', 'd', 'g', 'b', 'e'],
        2: ['b'],
        3: ['E', 'a', 'd', 'g', 'e'],
        4: ['E', 'a', 'b', 'e']
      },
      {
        0: ['E', 'a', 'd', 'g', 'e'],
        1: ['E', 'a', 'b', 'e'],
        2: ['d', 'g'],
        3: ['E', 'a', 'd', 'g', 'b', 'e']
      },
      {
        0: ['d', 'g'],
        1: ['E', 'a', 'd', 'g', 'b', 'e'],
        3: ['E', 'a', 'd', 'g', 'b', 'e'],
        4: ['E', 'b', 'e']
      }];
  }

  private static initMinorFingers(): any[] {
    return [
      {
        0: ['d', 'g'],
        1: ['E', 'a', 'd', 'g', 'b', 'e'],
        3: ['E', 'a', 'd', 'g', 'b', 'e'],
        4: ['E', 'b', 'e']
      },
      {
        1: ['E', 'a', 'd', 'g', 'b', 'e'],
        2: ['E', 'b', 'e'],
        3: ['a', 'd', 'g'],
        4: ['E', 'a', 'd', 'b', 'e']
      },
      {
        1: ['a', 'd', 'g'],
        2: ['E', 'a', 'd', 'b', 'e'],
        3: ['g'],
        4: ['E', 'a', 'd', 'g', 'b', 'e'],
        5: ['b']
      },
      {
        0: ['g'],
        1: ['E', 'a', 'd', 'g', 'b', 'e'],
        2: ['b'],
        3: ['E', 'a', 'd', 'g', 'e'],
        4: ['E', 'a', 'b', 'e']
      },
      {
        1: ['E', 'a', 'd', 'g', 'e'],
        2: ['E', 'a', 'b', 'e'],
        3: ['d', 'g'],
        4: ['E', 'a', 'd', 'g', 'b', 'e']
      }
    ];
  }

  generateShapes(frets: number): {} {
    return DbServiceBase.generateMajMinShapes(frets,
      ScalesService.initMajorFingers(),
      ScalesService.initMinorFingers());
  }

}
