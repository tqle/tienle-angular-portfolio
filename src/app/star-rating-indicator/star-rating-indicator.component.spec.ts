import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingIndicatorComponent } from './star-rating-indicator.component';

describe('StarRatingIndicatorComponent', () => {
  let component: StarRatingIndicatorComponent;
  let fixture: ComponentFixture<StarRatingIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarRatingIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRatingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
