import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArpeggiosComponent } from './arpeggios.component';

describe('ArpeggiosComponent', () => {
  let component: ArpeggiosComponent;
  let fixture: ComponentFixture<ArpeggiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArpeggiosComponent ]
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
