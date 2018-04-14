import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctaveShapesComponent } from './octave-shapes.component';

describe('OctaveShapesComponent', () => {
  let component: OctaveShapesComponent;
  let fixture: ComponentFixture<OctaveShapesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctaveShapesComponent ]
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
