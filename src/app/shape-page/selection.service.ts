import { Injectable } from '@angular/core';
import { TonalityValue, ToneValue } from '../model/tone';

@Injectable()
export class SelectionService {

  private _tone: ToneValue;
  private _shapeNo: number;
  private _tonality: TonalityValue;

  constructor() { }

  selectTone(tone: ToneValue) {
    this._tone = tone;
  }

  selectShapeNo(shapeNo: number) {
    this._shapeNo = shapeNo;
  }

  selectTonality(tonality: TonalityValue) {
    this._tonality = tonality;
  }


  get tone(): ToneValue {
    return this._tone;
  }

  get shapeNo(): number {
    return this._shapeNo;
  }

  get tonality(): TonalityValue {
    return this._tonality;
  }
}
