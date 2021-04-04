import { TestBed } from '@angular/core/testing';

import { SignauthService } from './signauth.service';

describe('SignauthService', () => {
  let service: SignauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
