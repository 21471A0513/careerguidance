import { ComponentFixture, TestBed } from '@angular/core/testing';

import { In4pComponent } from './in4p.component';

describe('In4pComponent', () => {
  let component: In4pComponent;
  let fixture: ComponentFixture<In4pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ In4pComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(In4pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
