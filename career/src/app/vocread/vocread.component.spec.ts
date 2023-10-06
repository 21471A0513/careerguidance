import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocreadComponent } from './vocread.component';

describe('VocreadComponent', () => {
  let component: VocreadComponent;
  let fixture: ComponentFixture<VocreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
