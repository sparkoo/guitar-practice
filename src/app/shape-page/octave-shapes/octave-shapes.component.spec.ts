import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctaveShapesComponent } from './octave-shapes.component';
import { SelectionService } from '../selection.service';
import { FretboardComponent } from '../../fretboard/fretboard.component';
import { OctaveShapesService } from './octave-shapes.service';

describe('OctaveShapesComponent', () => {
  let component: OctaveShapesComponent;
  let fixture: ComponentFixture<OctaveShapesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OctaveShapesComponent, FretboardComponent],
      providers: [SelectionService, OctaveShapesService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctaveShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
