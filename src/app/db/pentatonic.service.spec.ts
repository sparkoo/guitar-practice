import { TestBed, inject } from '@angular/core/testing';

import { PentatonicService } from './pentatonic.service';

describe('PentatonicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PentatonicService]
    });
  });

  it('should be created', inject([PentatonicService], (service: PentatonicService) => {
    expect(service).toBeTruthy();
  }));
});
