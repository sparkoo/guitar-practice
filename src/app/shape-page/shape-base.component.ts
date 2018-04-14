import { ShapeNo, Tonality, TonalityValue, ToneUp, ToneUpKeys, ToneValue } from '../model/tone';
import { OnInit } from '@angular/core';
import { Shape } from '../model/shape';
import { DbServiceBase } from '../db/db-service-base';
import { SelectionService } from './selection.service';

export abstract class ShapeBaseComponent implements OnInit {
  shape: Shape;

  protected readonly dbService: DbServiceBase;
  private readonly selectionService: SelectionService;

  readonly tones = ToneUpKeys;
  readonly ToneUp = ToneUp;
  readonly ShapeNo = ShapeNo;
  readonly Tonality = Tonality;
  readonly TonalityKeys = Object.keys(Tonality);

  protected constructor(selectionService: SelectionService,
                        dbService: DbServiceBase,
                        initTone: ToneValue,
                        initTonality: TonalityValue,
                        initShape: number) {
    this.selectionService.selectTone(initTone);
    this.selectionService.selectShapeNo(initShape);
    this.selectionService.selectTonality(initTonality);
    this.dbService = dbService;
  }

  ngOnInit() {
    this.drawShape();
  }

  selectTone(tone: ToneValue) {
    this.selectionService.selectTone(tone);
    this.drawShape();
  }

  selectShapeNo(shapeNo: number) {
    this.selectionService.selectShapeNo(shapeNo);
    this.drawShape();
  }

  selectTonality(tonality: TonalityValue) {
    this.selectionService.selectTonality(tonality);
    this.drawShape();
  }

  drawShape() {
    this.shape = this.dbService.get(this.getShapeKey());
  }

  protected getShapeKey(): string {
    return `${this.selectionService.tone.key}_${this.selectionService.tonality['name']}_${this.selectionService.shapeNo}`;
  }
}
