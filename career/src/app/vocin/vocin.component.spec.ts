import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocinComponent } from './vocin.component';

describe('VocinComponent', () => {
  let component: VocinComponent;
  let fixture: ComponentFixture<VocinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
