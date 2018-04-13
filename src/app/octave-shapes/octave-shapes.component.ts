import { Component} from '@angular/core';
import { OctaveShapesService } from '../db/octave-shapes.service';
import { ShapeBaseComponent } from '../shape-base.component';
import { TonalityValue, ToneUp, ToneValue } from '../model/tone';

@Component({
  selector: 'app-octave-shapes',
  templateUrl: './octave-shapes.component.html',
  styleUrls: ['./octave-shapes.component.scss']
})
export class OctaveShapesComponent extends ShapeBaseComponent {
  constructor(private octaveShapesService: OctaveShapesService) {
    super();
  }

  getShape() {
    return this.octaveShapesService.get(`${this.selectedTone.key}_${this.selectedShapeNo}`);
  }

  initShapeNo(): number {
    return 1;
  }

  initTonality(): TonalityValue {
    return undefined;
  }

  initTone(): ToneValue {
    return ToneUp.C;
  }
}
