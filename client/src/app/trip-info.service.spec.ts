import { TestBed } from '@angular/core/testing';

import { TripInfoService } from './trip-info.service';

describe('TripInfoService', () => {
  let service: TripInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
