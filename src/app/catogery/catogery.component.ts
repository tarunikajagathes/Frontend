import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Constants } from '../constants';

@Component({
  selector: 'app-catogery',
  templateUrl: './catogery.component.html',
  styleUrls: ['./catogery.component.css']
})
export class CatogeryComponent implements OnInit {

  constructor(private router: ActivatedRoute, private service: UserService, private route: Router) { }

  delivery=Constants.delvery;
  type: any;
  details: any;
  Sid: Number = 0;
  value: any;
  noitems: any;
  high_to_low: string = "";
  low_to_high: string = "";
  range_value: string = "";
  added: boolean = false;

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.type = params['type'];
      this.data();
    });
  }

  public data() {
    this.service.data(this.type).subscribe(res => {
      this.details = res;
    })
  }
  public add() {
    return this.added;
  }
  public addToCart(name: any) {
    if (!sessionStorage.getItem('currentUser')) {
      alert("Login Or Signup to add products to basket!!")
      this.route.navigate(['/Login']);
    }

    else {
      this.added = true;
      for (let detail of this.details) {
        if (name == detail.name) {
          this.value = { name: detail.name, image: detail.image, qty: 1, price: detail.price };
        }
      }
      this.service.Ivalue(this.value, sessionStorage.getItem('email')).subscribe(res => { alert("Added to Cart!!") });
    }
  }
  public high() {
    this.high_to_low = "high";
    this.low_to_high = "";
    this.filter();
  }
  public low() {
    this.low_to_high = "low";
    this.high_to_low = "";
    this.filter();
  }
  public range(value: any) {
    this.range_value = value;
    this.filter();
  }
  public none() {
    this.high_to_low = "";
    this.low_to_high = "";
    this.filter();
  }
  public noneRange() {
    this.range_value = "";
    this.filter();
  }
  public filter() {
    this.service.filterCatogery(this.range_value, this.high_to_low, this.low_to_high, this.type).subscribe(res => {
      this.details = res;
      if (this.details.length == 0) {
        this.noitems = "No Items between the range";
      }
      else {
        this.noitems = "";
      }
    })
  }
}