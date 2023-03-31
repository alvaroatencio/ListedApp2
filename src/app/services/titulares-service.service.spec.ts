import { TestBed } from '@angular/core/testing';

import { TitularesServiceService } from './titulares-service.service';

describe('TitularesServiceService', () => {
  let service: TitularesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitularesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
