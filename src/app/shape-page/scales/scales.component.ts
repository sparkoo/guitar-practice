import { Component } from '@angular/core';
import { SelectionService } from '../selection.service';
import { ShapeBaseComponent } from '../shape-base.component';
import { DbServiceBase } from '../../db/db-service-base';
import { ScalesService } from './scales.service';

@Component({
  selector: 'app-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['../shape-base.component.scss', './scales.component.scss']
})
export class ScalesComponent extends ShapeBaseComponent {

  constructor(private selectionService: SelectionService,
              private scalesService: ScalesService) {
    super(selectionService);
  }

  getDbService(): DbServiceBase {
    return this.scalesService;
  }

}
