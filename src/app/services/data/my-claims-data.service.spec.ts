import { TestBed } from '@angular/core/testing';

import { MyClaimsDataService } from './my-claims-data.service';

describe('MyClaimsDataService', () => {
  let service: MyClaimsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyClaimsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
