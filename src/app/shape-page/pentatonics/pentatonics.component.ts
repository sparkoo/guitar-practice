import { Component } from '@angular/core';
import { ShapeBaseComponent } from '../shape-base.component';
import { PentatonicService } from '../../db/pentatonic.service';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-pentatonics',
  templateUrl: './pentatonics.component.html',
  styleUrls: ['../shape-base.component.scss', './pentatonics.component.scss']
})
export class PentatonicsComponent extends ShapeBaseComponent {

  constructor(private selectionService: SelectionService,
              private pentatonicService: PentatonicService) {
    super(selectionService, pentatonicService, );
  }
}
