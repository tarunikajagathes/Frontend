import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { UserService } from '../services/user.service';

import { CatogeryComponent } from './catogery.component';
import { pipe } from 'rxjs';

describe('CatogeryComponent', () => {
  let component: CatogeryComponent;
  let fixture: ComponentFixture<CatogeryComponent>;
  
  const fakeActivatedRoute = {
    snapshot: { data:{} }
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule],
      declarations: [ CatogeryComponent ],
      providers:[{provide:ActivatedRoute,useValue:fakeActivatedRoute},HttpClient,HttpHandler,UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatogeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have service',()=>{
    expect(UserService).toBeTruthy();
  })
});
