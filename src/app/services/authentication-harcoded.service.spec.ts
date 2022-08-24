import { TestBed } from '@angular/core/testing';

import { AuthenticationHARCODEDService } from './authentication-harcoded.service';

describe('AuthenticationHARCODEDService', () => {
  let service: AuthenticationHARCODEDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationHARCODEDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
