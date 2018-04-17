import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeComponent } from './practice.component';
import { FretboardComponent } from '../fretboard/fretboard.component';
import { SelectionService } from '../shape-page/selection.service';
import { ChordsService } from '../shape-page/chords/chords.service';
import { ArpeggiosService } from '../shape-page/arpeggios/arpeggios.service';
import { OctaveShapesService } from '../shape-page/octave-shapes/octave-shapes.service';
import { PentatonicService } from '../shape-page/pentatonics/pentatonic.service';
import { ScalesService } from '../shape-page/scales/scales.service';

describe('PracticeComponent', () => {
  let component: PracticeComponent;
  let fixture: ComponentFixture<PracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PracticeComponent,
        FretboardComponent
      ],
      providers: [
        SelectionService,
        ChordsService,
        ArpeggiosService,
        OctaveShapesService,
        PentatonicService,
        ScalesService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
