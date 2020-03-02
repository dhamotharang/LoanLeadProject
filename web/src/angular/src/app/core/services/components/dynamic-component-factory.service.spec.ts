import { TestBed } from '@angular/core/testing';

import { DynamicComponentFactoryService } from './dynamic-component-factory.service';

describe('DynamicComponentFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicComponentFactoryService = TestBed.get(DynamicComponentFactoryService);
    expect(service).toBeTruthy();
  });
});
