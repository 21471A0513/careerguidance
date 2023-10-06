import { TestBed } from '@angular/core/testing';

import { Crud1Service } from './crud1.service';

describe('Crud1Service', () => {
  let service: Crud1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Crud1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
