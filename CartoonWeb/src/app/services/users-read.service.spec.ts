import { TestBed } from '@angular/core/testing';

import { UsersReadService } from './users-read.service';

describe('UsersReadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersReadService = TestBed.get(UsersReadService);
    expect(service).toBeTruthy();
  });
});
