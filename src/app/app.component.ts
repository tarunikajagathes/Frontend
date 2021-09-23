import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fresh Choice';
  noUser:boolean=true;


  Logout(){
    sessionStorage.removeItem('currentUser');
    this.noUser=true;
  }

  public login(){
    return sessionStorage.getItem('currentUser')
  }
    
}
