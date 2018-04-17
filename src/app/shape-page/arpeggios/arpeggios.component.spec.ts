import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArpeggiosComponent } from './arpeggios.component';
import { FretboardComponent } from '../../fretboard/fretboard.component';
import { SelectionService } from '../selection.service';
import { ArpeggiosService } from './arpeggios.service';

describe('ArpeggiosComponent', () => {
  let component: ArpeggiosComponent;
  let fixture: ComponentFixture<ArpeggiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArpeggiosComponent, FretboardComponent],
      providers: [SelectionService, ArpeggiosService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArpeggiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
