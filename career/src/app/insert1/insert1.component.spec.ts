import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insert1Component } from './insert1.component';

describe('Insert1Component', () => {
  let component: Insert1Component;
  let fixture: ComponentFixture<Insert1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Insert1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Insert1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
