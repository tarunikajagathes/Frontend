import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[HttpHandler,HttpClient,UserService]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {  
    expect(service).toBeTruthy();
  });

  it('#emailCheckUnique should return value from real',
    () => {
      service.emailCheckUnique("abd@gmail.com").subscribe(value => {
      expect(value).toBe('observable value');
     
    });
  });

 

  // it('#emailCheckPresent should return value from real',
  //   () => {
  //     service.emailCheckPresent("abc@gmail.com").subscribe(value => {
  //     expect(value).toBe('observable value');
  //   });
  // });

  // it('#sign should return value from real',
  //   () => {
  //     let data={"email":"abc@gmail.com","username":"abc","phone":"123456","address":"xyz","password":"123"};
  //     service.sign(data).subscribe(value => {
  //     expect(value).toBe('observable value');
  //   });
  // });

  // it('#checkUser should return value from observable',
  // ()=>{
  //   service.checkUser("abc@gmail.com","123").subscribe(value => {
  //     expect(value).toBe('observable value')
  //   });
  // });

  // it('#data should return value from observable',
  // ()=>{
  //   service.data("xyz").subscribe(value => {
  //     expect(value).toBe('observable value')
  //   });
  // });

  // it('#userDetails should return value from observable',
  // ()=>{
  //   service.userdetails("xyz@gmail.com").subscribe(value => {
  //     expect(value).toBe('observable value')
  //   });
  // });

  // it('#userItems should return value from observable',
  // ()=>{
  //   service.userItems("xyz@gmail.com").subscribe(value => {
  //     expect(value).toBe('observable value')
  //   });
  // });

  // it('#clearBasket should return value from real',
  // ()=>{
  //   service.clearBasket("xyz@gmail.com").subscribe(value => {
  //     expect(value).toBe('real value')
  //   });
  // });

  // it('#placeOrder should return value from real',
  // ()=>{
  //   service.placeOrder("xyz@gmail.com").subscribe(value => {
  //     expect(value).toBe('real value')
  //   });
  // });

  // it('#filterCatogery should return value from observable',
  // ()=>{
  //   service.filterCatogery("1-50","high","low","Fruits").subscribe(value => {
  //     expect(value).toBe('observable value')
  //   });
  // });


});
