import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserLoginedService } from './user-logined.service';

describe('UserLoginedService', () => {
  
  let service: UserLoginedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[HttpHandler,HttpClient,UserLoginedService] 
    });
    service = TestBed.inject(UserLoginedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
