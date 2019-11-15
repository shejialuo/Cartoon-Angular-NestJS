import { TestBed } from '@angular/core/testing';

import { LostAndFoundService } from './lost-and-found.service';

describe('LostAndFoundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LostAndFoundService = TestBed.get(LostAndFoundService);
    expect(service).toBeTruthy();
  });
});
