import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import {MatDialog} from '@angular/material/dialog'
import { DialogComponent } from '../dialog/dialog.component';
import { FinalComponent } from '../final/final.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private service: UserService, private route: Router,private dialog: MatDialog,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userItems();
    this.userData();
  }
  empty: boolean = false;
  uItems: any;
  total: Number = 0;
  details:any;
place:any;
credit:boolean=false;

checkout:FormGroup=this.fb.group({
  address:[null,[Validators.required,Validators.maxLength(100)]]
})
  private userData() {
    this.service.userdetails().subscribe(res => {
      this.details = res;
      this.place = this.details.data[0].address;
      sessionStorage.setItem("address",this.place);
    })
  }
  private userItems() {
    this.service.userItems().subscribe(res => {
      this.uItems = res;
      if (this.uItems.length == 0||this.uItems[0].items.length==0) {
        this.empty = true;
        
      }
      else {
        this.empty = false;
        for (let detail of this.uItems) {
          for (let item of detail.items) {
            item.price = item.price * item.qty
            this.total = this.total + item.price;
          }
        }
      }
    });
  }

  public detectedChange(){
    if(this.credit==true){
      this.credit=false;
    }
    else{
      this.credit=true;
    }
   
  }

  public newAddress(){
    sessionStorage.setItem("address",this.checkout.controls.address.value);
  }

  public cout() {
    if(this.credit==true){
      this.dialog.open(DialogComponent,{height:'455px',width:'455px',disableClose:true});
    }
    else{
      this.dialog.open(FinalComponent,{height:'200px',width:'455px',disableClose:true})
      this.service.placeOrder(this.place,"not paid").subscribe();
    }
  }
}
