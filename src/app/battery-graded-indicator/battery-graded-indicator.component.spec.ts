import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryGradedIndicatorComponent } from './battery-graded-indicator.component';

describe('BatteryGradedIndicatorComponent', () => {
  let component: BatteryGradedIndicatorComponent;
  let fixture: ComponentFixture<BatteryGradedIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatteryGradedIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryGradedIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
