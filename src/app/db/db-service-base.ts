import { DbServiceInterface } from './db-interface';
import { Shape } from '../model/shape';
import { TonalityValue, ToneUpKeys, ToneValue } from '../model/tone';

export interface Query {
  tone: ToneValue;
  tonality: TonalityValue;
  shapeNo: number;
}

export abstract class DbServiceBase implements DbServiceInterface {
  private static CBases = [0, 2, 4, 7, 9];

  protected readonly data = {};

  protected constructor(frets: number = 6) {
    this.data = this.generateShapes(frets);
  }

  protected static generateMajMinShapes(frets: number, fingersMaj: any[], fingersMin: any[]): {} {
    const data = {};
    ToneUpKeys.forEach((t, ti) => {
      for (let p = 0; p < 5; p++) {
        const majorShapeName = `${t}_maj_${p + 1}`;
        data[majorShapeName] = {
          frets: frets,
          base: (DbServiceBase.CBases[p] + ti) % 12,
          fingers: fingersMaj[p]
        };
        const minorShapeName = `${t}_min_${p + 1}`;
        data[minorShapeName] = {
          frets: frets,
          base: (DbServiceBase.CBases[p] + ti) % 12,
          fingers: fingersMin[p]
        };
      }
    });
    return data;
  }

  protected static generateShapes(frets: number, fingers: any[]): {} {
    const data = {};
    ToneUpKeys.forEach((t, ti) => {
      for (let p = 0; p < 5; p++) {
        const shapeName = `${t}_${p + 1}`;
        data[shapeName] = {
          frets: frets,
          base: (this.CBases[p] + ti) % 12,
          fingers: fingers[p]
        };
      }
    });
    return data;
  }

  protected queryData(key: string): Shape {
    return this.data[key];
  }

  abstract generateShapes(frets: number): {};

  public get(key: string): Shape {
    return this.data[key];
  }

  public query(query: Query): Shape {
    return this.get(this.generateKey(query));
  }

  public generateKey(query: Query): string {
    return `${query.tone.key}_${query.tonality['name']}_${query.shapeNo}`;
  }
}
