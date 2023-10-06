import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up2Component } from './up2.component';

describe('Up2Component', () => {
  let component: Up2Component;
  let fixture: ComponentFixture<Up2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Up2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
