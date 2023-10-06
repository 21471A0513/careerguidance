import { TestBed } from '@angular/core/testing';

import { Crud2Service } from './crud2.service';

describe('Crud2Service', () => {
  let service: Crud2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Crud2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
