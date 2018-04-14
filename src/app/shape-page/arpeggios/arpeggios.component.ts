import { Component } from '@angular/core';
import { Tonality, ToneUp } from '../../model/tone';
import { ShapeBaseComponent } from '../shape-base.component';
import { ArpeggiosService } from '../../db/arpeggios.service';

@Component({
  selector: 'app-arpeggios',
  templateUrl: './arpeggios.component.html',
  styleUrls: ['../shape-base.component.scss', './arpeggios.component.scss']
})
export class ArpeggiosComponent extends ShapeBaseComponent {

  constructor(private apeggiosService: ArpeggiosService) {
    super(apeggiosService, ToneUp.C, Tonality.MAJOR, 1);
  }
}
