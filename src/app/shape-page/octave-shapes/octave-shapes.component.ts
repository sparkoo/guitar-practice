import { Component } from '@angular/core';
import { OctaveShapesService } from '../../db/octave-shapes.service';
import { ShapeBaseComponent } from '../shape-base.component';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-octave-shapes',
  templateUrl: './octave-shapes.component.html',
  styleUrls: ['../shape-base.component.scss', './octave-shapes.component.scss']
})
export class OctaveShapesComponent extends ShapeBaseComponent {
  constructor(private selectionService: SelectionService,
              private octaveShapesService: OctaveShapesService) {
    super(selectionService, octaveShapesService);
  }

  getShapeKey(): string {
    return `${this.selectionService.tone.key}_${this.selectionService.shapeNo}`;
  }
}
