import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarProgressIndicatorComponent } from './bar-progress-indicator.component';

describe('BarProgressIndicatorComponent', () => {
  let component: BarProgressIndicatorComponent;
  let fixture: ComponentFixture<BarProgressIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarProgressIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarProgressIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
