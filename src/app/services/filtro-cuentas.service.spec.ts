import { TestBed } from '@angular/core/testing';

import { FiltroCuentasService } from './filtro-cuentas.service';

describe('FiltroCuentasService', () => {
  let service: FiltroCuentasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltroCuentasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
