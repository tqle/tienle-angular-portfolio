import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentricRadialIndicatorComponent } from './concentric-radial-indicator.component';

describe('ConcentricRadialIndicatorComponent', () => {
  let component: ConcentricRadialIndicatorComponent;
  let fixture: ComponentFixture<ConcentricRadialIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcentricRadialIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcentricRadialIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
