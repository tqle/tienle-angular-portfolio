import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionDataDetailComponent } from './production-data-detail.component';

describe('ProductionDataDetailComponent', () => {
  let component: ProductionDataDetailComponent;
  let fixture: ComponentFixture<ProductionDataDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionDataDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionDataDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
