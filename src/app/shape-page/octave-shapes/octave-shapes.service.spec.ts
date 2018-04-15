import { TestBed, inject } from '@angular/core/testing';

import { OctaveShapesService } from './octave-shapes.service';

describe('OctaveShapesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OctaveShapesService]
    });
  });

  it('should be created', inject([OctaveShapesService], (service: OctaveShapesService) => {
    expect(service).toBeTruthy();
  }));
});
