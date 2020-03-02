import { TestBed } from '@angular/core/testing';

import { EimUiService } from './eim-ui.service';

describe('EimUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EimUiService = TestBed.get(EimUiService);
    expect(service).toBeTruthy();
  });
});
