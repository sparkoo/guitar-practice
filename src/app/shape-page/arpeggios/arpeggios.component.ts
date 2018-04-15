import { Component } from '@angular/core';
import { ShapeBaseComponent } from '../shape-base.component';
import { ArpeggiosService } from './arpeggios.service';
import { SelectionService } from '../selection.service';
import { DbServiceBase } from '../../db/db-service-base';

@Component({
  selector: 'app-arpeggios',
  templateUrl: './arpeggios.component.html',
  styleUrls: ['../shape-base.component.scss', './arpeggios.component.scss']
})
export class ArpeggiosComponent extends ShapeBaseComponent {

  constructor(private selectionService: SelectionService,
              private arpeggiosService: ArpeggiosService) {
    super(selectionService);
  }

  getDbService(): DbServiceBase {
    return this.arpeggiosService;
  }

}
