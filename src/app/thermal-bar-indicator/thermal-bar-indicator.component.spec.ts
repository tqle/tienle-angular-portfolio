import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalBarIndicatorComponent } from './thermal-bar-indicator.component';

describe('ThermalBarIndicatorComponent', () => {
  let component: ThermalBarIndicatorComponent;
  let fixture: ComponentFixture<ThermalBarIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermalBarIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermalBarIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
