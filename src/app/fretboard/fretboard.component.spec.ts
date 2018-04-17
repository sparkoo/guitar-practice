import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FretboardComponent } from './fretboard.component';

describe('FretboardComponent', () => {
  let component: FretboardComponent;
  let fixture: ComponentFixture<FretboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FretboardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretboardComponent);
    component = fixture.componentInstance;
    component.shape = { frets: 1, base: 1, fingers: { 1: ['e'] } };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
