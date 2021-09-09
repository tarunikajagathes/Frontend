import { QueryValueType } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private service: UserService, private route: Router) { }

  ngOnInit(): void {
    this.userItems();
  }
  uItems: any;
  noitems: any;
  value: any;
  ivalue: any;
  dvalue: any;
  public userItems() {
    this.service.userItems(sessionStorage.getItem('email')).subscribe(res => {
      this.uItems = res;
      if (this.uItems.length == 0) {
        this.noitems = "Empty Basket!!"
      }
      else {
        if (this.uItems[0].items.length == 0) {
          this.noitems = "Empty Basket!!"
        }
        else {
          this.noitems = "";
        }
      }
    })
  }
 
  public remove(name: any) {
    for (let detail of this.uItems) {
      for (let item of detail.items) {
        if (name == item.name) {
          this.value = { name: item.name, image: item.image, qty: item.qty, price: item.price };
        }
      }
    }
    this.service.Rvalue(this.value, sessionStorage.getItem('email')).subscribe();
    this.userItems();
  }
 
  public inc(name: any) {
    for (let detail of this.uItems) {
      for (let item of detail.items) {
        if (name == item.name) {
          this.ivalue = { name: item.name, qty: item.qty };
        }
      }
    }
    this.service.Incvalue(this.ivalue, sessionStorage.getItem('email')).subscribe();
    this.userItems();
  }
  
  public dec(name: any) {
    for (let detail of this.uItems) {
      for (let item of detail.items) {
        if (name == item.name) {
          this.dvalue = { name: item.name, qty: item.qty };
        }
      }
    }
    if (this.dvalue.qty != 0) {
      this.service.decvalue(this.dvalue, sessionStorage.getItem('email')).subscribe();
      this.userItems();
    }

  }
  public clear() {
    this.service.clearBasket(sessionStorage.getItem('email')).subscribe();
    this.userItems();
  }
  public checkout() {
    this.route.navigate(['/CheckOut']);
  }
}
