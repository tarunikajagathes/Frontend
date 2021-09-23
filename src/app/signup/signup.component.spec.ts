import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../services/user.service';
import { SignupComponent } from './signup.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,RouterTestingModule],
      declarations: [ SignupComponent ],
      providers:[HttpClient,HttpHandler,UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', ()=>{
    expect(component.signinForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let email = component.signinForm.controls['email'];
    expect(email.valid).toBeFalsy();
    
  });
});
