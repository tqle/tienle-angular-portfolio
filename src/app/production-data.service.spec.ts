import { TestBed, inject } from '@angular/core/testing';

import { ProductionDataService } from './production-data.service';

describe('ProductionDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductionDataService]
    });
  });

  it('should be created', inject([ProductionDataService], (service: ProductionDataService) => {
    expect(service).toBeTruthy();
  }));
});
