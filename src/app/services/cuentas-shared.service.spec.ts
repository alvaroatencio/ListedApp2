import { TestBed } from '@angular/core/testing';

import { CuentasSharedService } from './cuentas-shared.service';

describe('CuentasSharedService', () => {
  let service: CuentasSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentasSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
