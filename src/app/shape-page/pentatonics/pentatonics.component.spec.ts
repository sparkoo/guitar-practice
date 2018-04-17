import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PentatonicsComponent } from './pentatonics.component';
import { SelectionService } from '../selection.service';
import { FretboardComponent } from '../../fretboard/fretboard.component';
import { PentatonicService } from './pentatonic.service';

describe('PentatonicsComponent', () => {
  let component: PentatonicsComponent;
  let fixture: ComponentFixture<PentatonicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PentatonicsComponent, FretboardComponent],
      providers: [SelectionService, PentatonicService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PentatonicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
