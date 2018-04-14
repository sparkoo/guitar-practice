import { Component } from '@angular/core';
import { ChordsService } from '../../db/chords.service';
import { ShapeBaseComponent } from '../shape-base.component';
import { SelectionService } from '../selection.service';
import { DbServiceBase } from '../../db/db-service-base';

@Component({
  selector: 'app-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['../shape-base.component.scss', './chords.component.scss']
})
export class ChordsComponent extends ShapeBaseComponent {

  constructor(private selectionService: SelectionService,
              private chordShapesService: ChordsService) {
    super(selectionService);
  }

  getDbService(): DbServiceBase {
    return this.chordShapesService;
  }
}
