import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinupComponent } from './cinup.component';

describe('CinupComponent', () => {
  let component: CinupComponent;
  let fixture: ComponentFixture<CinupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
