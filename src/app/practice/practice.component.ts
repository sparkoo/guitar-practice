import { Component } from '@angular/core';
import { ShapeBaseComponent } from '../shape-page/shape-base.component';
import { ArpeggiosService } from '../db/arpeggios.service';
import { SelectionService } from '../shape-page/selection.service';
import { DbServiceBase } from '../db/db-service-base';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['../shape-page/shape-base.component.scss', './practice.component.scss']
})
export class PracticeComponent extends ShapeBaseComponent {

  constructor(private selectionService: SelectionService,
              private arpeggiosService: ArpeggiosService) {
    super(selectionService);
  }

  getDbService(): DbServiceBase {
    return undefined;
  }
}
