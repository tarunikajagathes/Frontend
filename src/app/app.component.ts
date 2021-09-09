import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  noUser:boolean=true;


  Logout(){
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('email');
    this.noUser=true;
  }

  public login(){
    return sessionStorage.getItem('currentUser')
  }
  public reload(){
    window.location.reload
  }
    
}
