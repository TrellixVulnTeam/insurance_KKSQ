import { TestBed } from '@angular/core/testing';

import { AddInsuranceService } from './add-insurance.service';

describe('AddInsuranceService', () => {
  let service: AddInsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddInsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
