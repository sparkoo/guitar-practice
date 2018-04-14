import { Injectable } from '@angular/core';
import { Tonality, TonalityValue, ToneUp, ToneValue } from '../model/tone';

@Injectable()
export class SelectionService {

  private _tone: ToneValue = ToneUp.C;
  private _shapeNo = 1;
  private _tonality: TonalityValue = Tonality.MAJOR;

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
