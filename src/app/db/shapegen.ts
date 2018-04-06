import { ToneUp } from '../model/tone';

export class ShapeGen {
  static generateShapes(fingers: Array, frets: number): {} {
    const data = {};
    const CBases = [0, 2, 4, 7, 9];
    Object.keys(ToneUp).filter(t => typeof ToneUp[t] === 'number').forEach((t, ti) => {
      for (let p = 0; p < 5; p++) {
        const shapeName = `${t}_${p + 1}`;
        data[shapeName] = {
          frets: frets,
          base: (CBases[p] + ti) % 12,
          fingers: fingers[p]
        };
      }
    });
    return data;
  }
}
