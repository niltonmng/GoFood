import { TestBed } from '@angular/core/testing';

import { FoodsInMemoryDataService } from './foods-in-memory-data.service';

describe('InMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodsInMemoryDataService = TestBed.get(FoodsInMemoryDataService);
    expect(service).toBeTruthy();
  });
});
