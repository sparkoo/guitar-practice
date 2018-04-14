import { Component} from '@angular/core';
import { Tonality, TonalityValue, ToneUp, ToneValue } from '../../model/tone';
import { ChordsService } from '../../db/chords.service';
import { ShapeBaseComponent } from '../shape-base.component';

@Component({
  selector: 'app-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['../shape-base.component.scss', './chords.component.scss']
})
export class ChordsComponent extends ShapeBaseComponent {

  constructor(private chordShapesService: ChordsService) {
    super(chordShapesService);
  }

  getShapeKey(): string {
    return `${this.selectedTone.key}_${this.selectedTonality['name']}_${this.selectedShapeNo}`;
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
