import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserNotloginedService } from './user-notlogined.service';

describe('UserNotloginedService', () => {
  let service: UserNotloginedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[HttpHandler,HttpClient,UserNotloginedService] 
    });
    service = TestBed.inject(UserNotloginedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
