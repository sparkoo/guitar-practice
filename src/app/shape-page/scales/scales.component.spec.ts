import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalesComponent } from './scales.component';
import { SelectionService } from '../selection.service';
import { FretboardComponent } from '../../fretboard/fretboard.component';
import { ScalesService } from './scales.service';

describe('ScalesComponent', () => {
  let component: ScalesComponent;
  let fixture: ComponentFixture<ScalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScalesComponent, FretboardComponent],
      providers: [SelectionService, ScalesService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
