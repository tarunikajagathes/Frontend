import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private service: UserService, private route: Router) { }

  ngOnInit(): void {
    this.userItems();
  }
  empty: boolean = false;
  uItems: any;
  total: Number = 0;
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
    }, (error) => {
      console.log(error);
      });
  }

  public cout() {
   this.service.placeOrder().subscribe(err=>console.log(err));
    alert("Order placed Sucessfully!!");
   this.service.clearBasket().subscribe(err=>console.log(err));
    this.userItems();
    this.route.navigate(['']);
  }
}
