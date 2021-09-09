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
  public userItems() {
    this.service.userItems(sessionStorage.getItem('email')).subscribe(res => {
      this.uItems = res;
      if (this.uItems.length == 0) {
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

  public cout() {
   this.service.placeOrder(sessionStorage.getItem('email')).subscribe();
    alert("Order placed Sucessfully!!");
   this.service.clearBasket(sessionStorage.getItem('email')).subscribe();
    this.userItems();
    this.route.navigate(['']);
  }
}
