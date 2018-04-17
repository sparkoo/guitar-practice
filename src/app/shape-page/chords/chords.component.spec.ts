import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordsComponent } from './chords.component';
import { SelectionService } from '../selection.service';
import { FretboardComponent } from '../../fretboard/fretboard.component';
import { ChordsService } from './chords.service';

describe('ChordsComponent', () => {
  let component: ChordsComponent;
  let fixture: ComponentFixture<ChordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordsComponent, FretboardComponent],
      providers: [SelectionService, ChordsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
