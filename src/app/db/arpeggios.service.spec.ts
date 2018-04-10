import { TestBed, inject } from '@angular/core/testing';

import { ArpeggiosService } from './arpeggios.service';

describe('ArpeggiosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArpeggiosService]
    });
  });

  it('should be created', inject([ArpeggiosService], (service: ArpeggiosService) => {
    expect(service).toBeTruthy();
  }));
});
