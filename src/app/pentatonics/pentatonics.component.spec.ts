import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PentatonicsComponent } from './pentatonics.component';

describe('PentatonicsComponent', () => {
  let component: PentatonicsComponent;
  let fixture: ComponentFixture<PentatonicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PentatonicsComponent ]
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
