import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(private service:UserService,private route:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.service.clearBasket().subscribe();
  }

  public direct(){
    this.route.navigate([""])
    this.dialog.closeAll();
  }

}
