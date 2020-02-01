import { TestBed } from '@angular/core/testing';

import { RepServiceService } from './rep-service.service';

describe('RepServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepServiceService = TestBed.get(RepServiceService);
    expect(service).toBeTruthy();
  });
});
