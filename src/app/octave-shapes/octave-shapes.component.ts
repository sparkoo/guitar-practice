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
  shape: Shape = this.octaveShapesService.get('C_3');

  selectedTone: ToneValue = ToneUp['C'];

  readonly tones = ToneUpKeys;
  readonly ToneUp = ToneUp;

  constructor(private octaveShapesService: OctaveShapesService) { }

  ngOnInit() {
  }

  selectTone(tone: ToneValue) {
    console.log(ToneUp[tone]);
    this.selectedTone = tone;
    this.drawShape();
  }

  drawShape() {
    this.shape = this.octaveShapesService.get(`${this.selectedTone.key}_3`);
  }
}
