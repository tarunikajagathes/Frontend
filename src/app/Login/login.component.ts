import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  })

  constructor(private router: Router, private service: UserService) { }

  falseUser: Boolean = false;
  result: any;
  public moveToSignin() {
    this.router.navigate(['/Signin']);
  }
  
  
  public login() {
    if (this.loginForm.valid) {
    this.service.checkUser(this.loginForm.value.email, btoa(this.loginForm.value.password)).subscribe( res => {
      this.result=res;
      if (this.result.data!="no data") {
        sessionStorage.setItem('currentUser', this.result.token);
        this.router.navigate([""]);
      }
      else {
        this.falseUser = true;
      }
    }, err => {
      this.falseUser = true;
    })
  }
  }
}
