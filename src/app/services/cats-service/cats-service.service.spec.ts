import { TestBed } from '@angular/core/testing';

import { CatsServiceService } from './cats-service.service';

describe('CatsServiceService', () => {
  let service: CatsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
