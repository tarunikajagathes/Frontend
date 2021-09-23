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
  private userItems() {
    this.service.userItems().subscribe(res => {
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
    }, (error) => {
      console.log(error);
      })
  }
 
  public remove(name: any) {
    this.service.Rvalue(name).subscribe(err=>{console.log(err);});
    this.userItems();
  }
 
  public inc(name: any) {
    this.service.Incvalue(name).subscribe();
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
      this.service.decvalue(name).subscribe();
      this.userItems();
    }

  }
  public clear() {
    this.service.clearBasket().subscribe(err=>console.log(err));
    this.userItems();
  }
  public checkout() {
    this.route.navigate(['/CheckOut']);
  }
}
