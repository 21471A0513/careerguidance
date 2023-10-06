import { TestBed } from '@angular/core/testing';

import { Crud4Service } from './crud4.service';

describe('Crud4Service', () => {
  let service: Crud4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Crud4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
