import { ShapeNo, Tonality, TonalityValue, ToneUp, ToneUpKeys, ToneValue } from '../model/tone';
import { OnInit } from '@angular/core';
import { Shape } from '../model/shape';
import { DbServiceBase } from '../db/db-service-base';
import { SelectionService } from './selection.service';

export abstract class ShapeBaseComponent implements OnInit {
  shape: Shape;

  readonly tones = ToneUpKeys;
  readonly ToneUp = ToneUp;
  readonly ShapeNo = ShapeNo;
  readonly Tonality = Tonality;
  readonly TonalityKeys = Object.keys(Tonality);

  protected constructor(protected selection: SelectionService,
                        private dbService: DbServiceBase,
                        initTone: ToneValue,
                        initTonality: TonalityValue,
                        initShape: number) {
    this.selection.selectTone(initTone);
    this.selection.selectShapeNo(initShape);
    this.selection.selectTonality(initTonality);
    this.dbService = dbService;
  }

  ngOnInit() {
    this.drawShape();
  }

  selectTone(tone: ToneValue) {
    this.selection.selectTone(tone);
    this.drawShape();
  }

  selectShapeNo(shapeNo: number) {
    this.selection.selectShapeNo(shapeNo);
    this.drawShape();
  }

  selectTonality(tonality: TonalityValue) {
    this.selection.selectTonality(tonality);
    this.drawShape();
  }

  drawShape() {
    this.shape = this.dbService.get(this.getShapeKey());
  }

  protected getShapeKey(): string {
    return `${this.selection.tone.key}_${this.selection.tonality['name']}_${this.selection.shapeNo}`;
  }
}
