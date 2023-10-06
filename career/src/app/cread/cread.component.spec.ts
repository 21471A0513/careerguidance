import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadComponent } from './cread.component';

describe('CreadComponent', () => {
  let component: CreadComponent;
  let fixture: ComponentFixture<CreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
