import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AsyncValidator, AsyncValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signinForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    username: new FormControl(null, [Validators.required, Validators.pattern("[a-z,A-z]*")]),
    phone: new FormControl(null, [Validators.minLength(10), Validators.maxLength(10), Validators.required, Validators.pattern("[0-9]{10}")]),
    address: new FormControl(null, [Validators.maxLength(100), Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]),
    cpassword: new FormControl(null, Validators.required)
  })

  constructor(private router: Router, private service: UserService) { }

  emailAlredyExist = "";
  studentEmailcheck = "";
  
  public moveToLogin() {
    this.router.navigate(['/Login']);
  }
  public signin() {
    if (this.signinForm.invalid) {
      this.signinForm.disable;
    }
    const data = { email: this.signinForm.value.email, username: this.signinForm.value.username, phone: this.signinForm.value.phone, address: this.signinForm.value.address, password: btoa(this.signinForm.value.password) }
    this.service.sign(data)
      .subscribe(
        data => {
          alert("Sucessfully signined!!")
          this.router.navigate(['/Login']);
        }
      )
  }
 
  public emailCheckUnique() {
    this.service.emailCheckUnique(this.signinForm.value.email).subscribe(res => {
      this.studentEmailcheck = res;
      if (this.studentEmailcheck.length > 3) {
        this.emailAlredyExist = "Someone already has this email. Try another?";
        this.signinForm.invalid;
      }
      else {
        this.emailAlredyExist = "";
      }
    });
  }
}
