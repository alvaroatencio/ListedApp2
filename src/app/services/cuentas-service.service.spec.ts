import { TestBed } from '@angular/core/testing';

import { CuentasServiceService } from './cuentas-service.service';

describe('CuentasServiceService', () => {
  let service: CuentasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
