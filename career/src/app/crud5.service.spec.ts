import { TestBed } from '@angular/core/testing';

import { Crud5Service } from './crud5.service';

describe('Crud5Service', () => {
  let service: Crud5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Crud5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
