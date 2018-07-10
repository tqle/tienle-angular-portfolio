import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialProgressIndicatorComponent } from './radial-progress-indicator.component';

describe('RadialProgressIndicatorComponent', () => {
  let component: RadialProgressIndicatorComponent;
  let fixture: ComponentFixture<RadialProgressIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadialProgressIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialProgressIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
