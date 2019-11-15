import { TestBed } from '@angular/core/testing';

import { UsersPageService } from './users-page.service';

describe('UsersPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersPageService = TestBed.get(UsersPageService);
    expect(service).toBeTruthy();
  });
});
