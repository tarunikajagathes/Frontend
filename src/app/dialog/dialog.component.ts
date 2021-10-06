import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FinalComponent } from '../final/final.component';
import { UserService } from '../services/user.service';
import { ValidateService } from '../services/validate.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  order: FormGroup = new FormGroup({
    address: new FormControl(null, [ Validators.required]),
    password: new FormControl(null, Validators.required)
  })

  constructor(private service: UserService, private dialog:MatDialog, private fb:FormBuilder,private validate:ValidateService) { }

  ngOnInit(): void {
  }
  payment: FormGroup =this.fb.group({
    cardnumber:[null, [Validators.required,Validators.minLength(12)]],
    cardexpiry:[null,[Validators.required,Validators.pattern("([1-9]{1,2})(/)([0-9]{4})")]],
    cvc: [null,[Validators.required,Validators.minLength(3),Validators.pattern("[0-9]{3}")]],
    name:[null,[Validators.required,Validators.pattern("[A-Z]{3,15}")]]
  },{
    validator:this.validate.checkCardNumber("cardnumber")
  })

  closeDialog(){
    this.dialog.closeAll();
  }

 async move(){
    this.dialog.closeAll();
    this.service.placeOrder(sessionStorage.getItem("address"),"paid").subscribe(res=>{
      this.dialog.open(FinalComponent,{width:"455px",height:"200px",disableClose:true})
  });
}
}
