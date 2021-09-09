import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanComponentLeave } from '../services/unsavedchanges.guard';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, CanComponentLeave {

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userData();
    this.disable();
  }
  noteditable: boolean = true;
  details: any;
  Name: any;
  number: any;
  place: any;
  num: Number = 0;
  public userData() {
    this.service.userdetails(sessionStorage.getItem('email')).subscribe(res => {
      this.details = res;
      this.Name = this.details[0].username;
      this.number = this.details[0].phone_number;
      this.place = this.details[0].address;
    })
  }

  signinForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    phone: new FormControl(null, [Validators.pattern("[0-9]{10}"), Validators.required]),
    address: new FormControl(null, [Validators.maxLength(100), Validators.required]),
  })

 

  public makeedits() {
    this.signinForm.controls.username.enable();
    this.signinForm.controls.phone.enable();
    this.signinForm.controls.address.enable();

  }
  public disable() {
    this.signinForm.controls.username.disable();
    this.signinForm.controls.phone.disable();
    this.signinForm.controls.address.disable();
  }
  public update() {
    this.num = 1;
    if (this.signinForm.value.username == null) {
      this.signinForm.value.username = this.Name;
    }
    if (this.signinForm.value.phone == null) {
      this.signinForm.value.phone = this.number;
    }
    if (this.signinForm.value.address == null) {
      this.signinForm.value.address = this.place;
    }
    console.log("hello", this.signinForm.value);
    this.service.userUpdate(sessionStorage.getItem('email'), this.signinForm.value).subscribe(res => {
      alert("saved changes!!");
    })
  }
  public canLeave(): boolean {
    if (this.signinForm.dirty || this.num != 0) {
      return window.confirm("Are you sure you want to navigate?");
    }
    return true;
  }
}
