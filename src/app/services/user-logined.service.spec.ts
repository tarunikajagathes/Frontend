import { TestBed } from '@angular/core/testing';

import { UserLoginedService } from './user-logined.service';

describe('UserLoginedService', () => {
  let service: UserLoginedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLoginedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
