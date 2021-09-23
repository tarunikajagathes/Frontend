import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MyInterceptorService } from './my-interceptor.service';

describe('MyInterceptorService', () => {
  let service: MyInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[HttpClient,HttpHandler,MyInterceptorService]
    });
    service = TestBed.inject(MyInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
