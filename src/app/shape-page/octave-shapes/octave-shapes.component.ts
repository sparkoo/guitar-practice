import { Component } from '@angular/core';
import { OctaveShapesService } from '../../db/octave-shapes.service';
import { ShapeBaseComponent } from '../shape-base.component';
import { Tonality, ToneUp } from '../../model/tone';

@Component({
  selector: 'app-octave-shapes',
  templateUrl: './octave-shapes.component.html',
  styleUrls: ['../shape-base.component.scss', './octave-shapes.component.scss']
})
export class OctaveShapesComponent extends ShapeBaseComponent {
  constructor(private octaveShapesService: OctaveShapesService) {
    super(octaveShapesService, ToneUp.C, Tonality.MAJOR, 1);
  }

  getShapeKey(): string {
    return `${this.selectedTone.key}_${this.selectedShapeNo}`;
  }
}
