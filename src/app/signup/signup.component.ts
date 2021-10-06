import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ValidateService } from '../services/validate.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router: Router, private service: UserService,private fb:FormBuilder,private validate:ValidateService) { }

  signinForm: FormGroup =this.fb.group({
    email:[null, [Validators.email, Validators.required,Validators.pattern(/(\b^(?:([a-z])(?!\2{2})){3,}(?:([0-9._])(?!\3{2})){0,4}@(?:([a-z])(?!\4{2})){5,}\.(?:([a-z])(?!\5{2})){2,4}$\b)/)]],
    username:[null,[Validators.required, Validators.pattern(/(\b(?:([A-Za-z])(?!\2{2}))+\b)/),Validators.minLength(3)]],
    phone: [null,[Validators.minLength(10), Validators.maxLength(10), Validators.required, Validators.pattern("[6-9][0-9]{9}")]],
    address:[null,[Validators.maxLength(100), Validators.required]],
    password:[null,[Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
    cpassword:[null, [Validators.required]],
  },{
    validator:this.validate.checkPassword("password","cpassword")
  })

  emailAlredyExist = "";
  studentEmailcheck:any;
  
  public moveToLogin() {
    this.router.navigate(['/Login']);
  }
  public signin() {
    const data = { email: this.signinForm.value.email, username: this.signinForm.value.username, phone: this.signinForm.value.phone, address: this.signinForm.value.address, password: btoa(this.signinForm.value.password) }
    this.service.sign(data)
      .subscribe(
        data => {
          this.router.navigate(['/Login']);
        }
      )
      alert("Sucessfully signined!!");
  }
 
  public emailCheckUnique() {
    this.service.emailCheckUnique(this.signinForm.value.email).subscribe(res => {
      this.studentEmailcheck = res;
      if (this.studentEmailcheck.data!="no data") {
        this.emailAlredyExist = "Someone already has this email. Try another?";
      }
      else {
        this.emailAlredyExist = "";
      }
    });
  }
}
