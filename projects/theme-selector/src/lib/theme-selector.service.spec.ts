import { TestBed } from '@angular/core/testing';

import { ThemeSelectorService } from './theme-selector.service';

describe('ThemeSelectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeSelectorService = TestBed.get(ThemeSelectorService);
    expect(service).toBeTruthy();
  });
});
