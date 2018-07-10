import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartRatingIndicatorComponent } from './heart-rating-indicator.component';

describe('HeartRatingIndicatorComponent', () => {
  let component: HeartRatingIndicatorComponent;
  let fixture: ComponentFixture<HeartRatingIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartRatingIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartRatingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
