import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  })

  constructor(private router: Router, private service: UserService) { }

  falseUser: Boolean = true;
  result: any;
  public moveToSignin() {
    this.router.navigate(['/Signin']);
  }
  public changeP() {
    this.falseUser = true;
  }
  
  public login() {
    if (this.loginForm.invalid) {
      this.loginForm.disable;
    }
    else{
    this.service.checkUser(this.loginForm.value.email, btoa(this.loginForm.value.password)).subscribe(async res => {
      if (res) {
        this.result = res;
        sessionStorage.setItem('currentUser', this.result.token);
        sessionStorage.setItem('email', this.loginForm.value.email);
        this.router.navigate([""]);
      }
      else {
        this.falseUser = false;
      }
    }, err => {
      this.falseUser = false;
    })
  }
  }


}
