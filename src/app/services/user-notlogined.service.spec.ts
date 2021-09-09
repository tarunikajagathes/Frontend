import { TestBed } from '@angular/core/testing';

import { UserNotloginedService } from './user-notlogined.service';

describe('UserNotloginedService', () => {
  let service: UserNotloginedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserNotloginedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
