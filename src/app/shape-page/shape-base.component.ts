import { ShapeNo, Tonality, TonalityValue, ToneUp, ToneUpKeys, ToneValue } from '../model/tone';
import { OnInit } from '@angular/core';
import { Shape } from '../model/shape';

export abstract class ShapeBaseComponent implements OnInit {
  shape: Shape;

  selectedTone: ToneValue;
  selectedShapeNo: number;
  selectedTonality: TonalityValue;

  readonly tones = ToneUpKeys;
  readonly ToneUp = ToneUp;
  readonly ShapeNo = ShapeNo;
  readonly Tonality = Tonality;
  readonly TonalityKeys = Object.keys(Tonality);

  protected constructor() {
    this.selectedTone = this.initTone();
    this.selectedShapeNo = this.initShapeNo();
    this.selectedTonality = this.initTonality();
  }

  ngOnInit() {
    this.drawShape();
  }

  selectTone(tone: ToneValue) {
    this.selectedTone = tone;
    this.drawShape();
  }

  selectShapeNo(shapeNo: number) {
    this.selectedShapeNo = shapeNo;
    this.drawShape();
  }

  selectTonality(tonality: TonalityValue) {
    this.selectedTonality = tonality;
    this.drawShape();
  }

  drawShape() {
    this.shape = this.getShape();
  }

  abstract getShape(): Shape;

  abstract initTone(): ToneValue;

  abstract initShapeNo(): number;

  abstract initTonality(): TonalityValue;
}
