import { Component, OnInit } from '@angular/core';
import { Tonality, TonalityValue, ToneUp, ToneValue } from '../../model/tone';
import { ChordsService } from '../../db/chords.service';
import { Shape } from '../../model/shape';
import { ShapeBaseComponent } from '../shape-base.component';
import { PentatonicService } from '../../db/pentatonic.service';

@Component({
  selector: 'app-pentatonics',
  templateUrl: './pentatonics.component.html',
  styleUrls: ['../shape-base.component.scss', './pentatonics.component.scss']
})
export class PentatonicsComponent extends ShapeBaseComponent {

  constructor(private pentatonicService: PentatonicService) {
    super();
  }

  getShape(): Shape {
    return this.pentatonicService.get(`${this.selectedTone.key}_${this.selectedTonality['name']}_${this.selectedShapeNo}`);
  }

  initShapeNo(): number {
    return 1;
  }

  initTonality(): TonalityValue {
    return Tonality.MAJOR;
  }

  initTone(): ToneValue {
    return ToneUp.C;
  }
}
