import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeComponent } from './practice.component';
import { FretboardComponent } from '../fretboard/fretboard.component';
import { SelectionService } from '../shape-page/selection.service';
import { ChordsService } from '../db/chords.service';
import { ArpeggiosService } from '../db/arpeggios.service';
import { OctaveShapesService } from '../db/octave-shapes.service';
import { PentatonicService } from '../db/pentatonic.service';
import { ScalesService } from '../db/scales.service';

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
