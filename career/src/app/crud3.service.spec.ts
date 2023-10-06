import { TestBed } from '@angular/core/testing';

import { Crud3Service } from './crud3.service';

describe('Crud3Service', () => {
  let service: Crud3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Crud3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
