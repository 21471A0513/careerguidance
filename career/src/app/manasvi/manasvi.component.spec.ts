import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManasviComponent } from './manasvi.component';

describe('ManasviComponent', () => {
  let component: ManasviComponent;
  let fixture: ComponentFixture<ManasviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManasviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManasviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
