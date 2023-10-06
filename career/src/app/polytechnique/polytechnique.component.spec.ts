import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolytechniqueComponent } from './polytechnique.component';

describe('PolytechniqueComponent', () => {
  let component: PolytechniqueComponent;
  let fixture: ComponentFixture<PolytechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolytechniqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolytechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
