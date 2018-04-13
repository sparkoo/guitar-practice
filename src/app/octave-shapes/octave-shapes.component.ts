import { Component, OnInit } from '@angular/core';
import { OctaveShapesService } from '../db/octave-shapes.service';
import { Shape } from '../model/shape';
import { ToneUp, ToneUpKeys, ToneValue } from '../model/tone';

@Component({
  selector: 'app-octave-shapes',
  templateUrl: './octave-shapes.component.html',
  styleUrls: ['./octave-shapes.component.scss']
})
export class OctaveShapesComponent implements OnInit {
  shape: Shape;

  selectedTone: ToneValue = ToneUp['C'];
  selectedShapeNo = 1;

  readonly tones = ToneUpKeys;
  readonly ToneUp = ToneUp;

  constructor(private octaveShapesService: OctaveShapesService) { }

  ngOnInit() {
    this.drawShape();
  }

  selectTone(tone: ToneValue) {
    console.log(ToneUp[tone]);
    this.selectedTone = tone;
    this.drawShape();
  }

  selectShapeNo(shapeNo: number) {
    this.selectedShapeNo = shapeNo;
    this.drawShape();
  }

  drawShape() {
    this.shape = this.octaveShapesService.get(`${this.selectedTone.key}_${this.selectedShapeNo}`);
  }
}
