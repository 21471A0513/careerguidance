import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocupComponent } from './vocup.component';

describe('VocupComponent', () => {
  let component: VocupComponent;
  let fixture: ComponentFixture<VocupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
