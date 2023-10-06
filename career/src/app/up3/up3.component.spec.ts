import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up3Component } from './up3.component';

describe('Up3Component', () => {
  let component: Up3Component;
  let fixture: ComponentFixture<Up3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Up3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
