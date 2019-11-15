import { TestBed } from '@angular/core/testing';

import { UsersRemarkService } from './users-remark.service';

describe('UsersRemarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersRemarkService = TestBed.get(UsersRemarkService);
    expect(service).toBeTruthy();
  });
});
