import { TestBed } from '@angular/core/testing';

import { NySeveritySelectorService } from './ny-severity-selector.service';

describe('NySeveritySelectorService', () => {
  let service: NySeveritySelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NySeveritySelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
