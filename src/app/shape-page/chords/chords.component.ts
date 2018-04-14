import { Component } from '@angular/core';
import { Tonality, ToneUp } from '../../model/tone';
import { ChordsService } from '../../db/chords.service';
import { ShapeBaseComponent } from '../shape-base.component';

@Component({
  selector: 'app-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['../shape-base.component.scss', './chords.component.scss']
})
export class ChordsComponent extends ShapeBaseComponent {

  constructor(private chordShapesService: ChordsService) {
    super(chordShapesService, ToneUp.C, Tonality.MAJOR, 1);
  }
}
