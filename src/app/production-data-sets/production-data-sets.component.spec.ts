import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionDataSetsComponent } from './production-data-sets.component';

describe('ProductionDataSetsComponent', () => {
  let component: ProductionDataSetsComponent;
  let fixture: ComponentFixture<ProductionDataSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionDataSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionDataSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
