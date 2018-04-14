import { ShapeNo, Tonality, TonalityValue, ToneUp, ToneUpKeys, ToneValue } from '../model/tone';
import { OnInit } from '@angular/core';
import { Shape } from '../model/shape';
import { DbServiceBase } from '../db/db-service-base';

export abstract class ShapeBaseComponent implements OnInit {
  shape: Shape;

  selectedTone: ToneValue;
  selectedShapeNo: number;
  selectedTonality: TonalityValue;

  protected readonly dbService: DbServiceBase;

  readonly tones = ToneUpKeys;
  readonly ToneUp = ToneUp;
  readonly ShapeNo = ShapeNo;
  readonly Tonality = Tonality;
  readonly TonalityKeys = Object.keys(Tonality);

  protected constructor(dbService: DbServiceBase) {
    this.selectedTone = this.initTone();
    this.selectedShapeNo = this.initShapeNo();
    this.selectedTonality = this.initTonality();
    this.dbService = dbService;
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
    this.shape = this.dbService.get(this.getShapeKey());
  }

  protected abstract getShapeKey(): string;

  protected abstract initTone(): ToneValue;

  protected abstract initShapeNo(): number;

  protected abstract initTonality(): TonalityValue;
}